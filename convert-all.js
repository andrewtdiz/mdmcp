#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting complete conversion process...\n');

// Step 1: Convert .ts files to .md files
console.log('📝 Step 1: Converting TypeScript files to Markdown...');
const mdDir = './md';
const tsFiles = fs.readdirSync(mdDir).filter(file => file.endsWith('.ts'));

console.log(`Found ${tsFiles.length} TypeScript files to convert...`);

tsFiles.forEach(file => {
  const filePath = path.join(mdDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract the content between backticks, properly handling escaped backticks
  const exportMatch = content.match(/export const \w+ = `/);
  if (!exportMatch) {
    console.log(`  ❌ Could not find export statement in ${file}`);
    return;
  }

  const startIndex = exportMatch.index + exportMatch[0].length;
  let endIndex = -1;
  let i = startIndex;

  // Find the closing backtick that's not escaped
  while (i < content.length) {
    if (content[i] === '`') {
      // Check if this backtick is escaped by counting preceding backslashes
      let backslashCount = 0;
      let j = i - 1;
      while (j >= 0 && content[j] === '\\') {
        backslashCount++;
        j--;
      }
      // If even number of backslashes (including 0), the backtick is not escaped
      if (backslashCount % 2 === 0) {
        endIndex = i;
        break;
      }
    }
    i++;
  }

  if (endIndex === -1) {
    console.log(`  ❌ Could not find closing backtick in ${file}`);
    return;
  }

  let markdownContent = content.substring(startIndex, endIndex);

  // Replace escaped backticks with regular backticks
  markdownContent = markdownContent.replace(/\\`/g, '`');

  const outputFile = file.replace('.ts', '.md');
  const outputPath = path.join(mdDir, outputFile);

  fs.writeFileSync(outputPath, markdownContent);
  console.log(`  ✅ ${file} → ${outputFile}`);
});

console.log('\n📁 Step 2: Processing markdown files to _generated...');

// Step 2: Create the _generated directory if it doesn't exist
const generatedDir = './md/_generated';
if (!fs.existsSync(generatedDir)) {
  fs.mkdirSync(generatedDir, { recursive: true });
  console.log('Created md/_generated directory');
}

// Get all .md files in the md directory (exclude _generated subfolder)
const mdFiles = fs.readdirSync(mdDir)
  .filter(file => file.endsWith('.md'))
  .filter(file => !file.includes('_generated'));

console.log(`Found ${mdFiles.length} markdown files to process...`);

mdFiles.forEach(file => {
  const sourcePath = path.join(mdDir, file);
  const content = fs.readFileSync(sourcePath, 'utf8');

  // Process the markdown content (you can add custom processing here)
  const processedContent = content;

  const outputPath = path.join(generatedDir, file);
  fs.writeFileSync(outputPath, processedContent);
  console.log(`  ✅ ${file} → _generated/${file}`);
});

console.log('\n🔄 Step 3: Converting _generated markdown files back to TypeScript...');

// Get all .md files in the _generated directory
const generatedMdFiles = fs.readdirSync(generatedDir).filter(file => file.endsWith('.md'));

console.log(`Found ${generatedMdFiles.length} markdown files in _generated to convert...`);

generatedMdFiles.forEach(file => {
  const sourcePath = path.join(generatedDir, file);
  const markdownContent = fs.readFileSync(sourcePath, 'utf8');

  // Escape backticks in the markdown content
  const escapedContent = markdownContent.replace(/`/g, '\\`');

  // Get the base filename without extension for the export name
  const baseName = file.replace('.md', '');

  // Create TypeScript content with proper export
  const tsContent = `export const ${baseName} = \`${escapedContent}\`;
`;

  const outputFile = file.replace('.md', '.ts');
  const outputPath = path.join(generatedDir, outputFile);

  fs.writeFileSync(outputPath, tsContent);
  console.log(`  ✅ ${file} → ${outputFile}`);
});

console.log(`\n🎉 Conversion complete!`);
console.log(`   - ${tsFiles.length} TypeScript files converted to Markdown`);
console.log(`   - ${mdFiles.length} Markdown files processed to md/_generated/`);
console.log(`   - ${generatedMdFiles.length} Markdown files converted back to TypeScript`);

// List the generated files
console.log('\n📋 Generated files:');
const generatedFiles = fs.readdirSync(generatedDir);
generatedFiles.forEach(file => {
  console.log(`   - ${file}`);
});