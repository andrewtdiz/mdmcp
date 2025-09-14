export const markdown_support = `# 📝 Markdown Support

Rich markdown formatting with advanced features.

## Standard Features
- Headers (# ## ###)
- Emphasis (*italic*, **bold**)
- Lists (ordered/unordered)
- Tables & blockquotes

## Navigation Features
- Links ([text](url)) to other routes
- Buttons (\`<button id="button-id">text</button>\`) to execute commands

## Commands
- Code blocks & inline code for sending commands
Example:

Addition: Send an addition operation from this route with the following format:
\`\`\`json
{
  "a": number,
  "b": number
}
\`\`\`


## Extended Features

**GitHub Flavored Markdown:**
- Strikethrough (\`~~text~~\`)
- Task lists (\`- [x] done\`)
- Auto-linking URLs

**MDX Support:**
- React components in markdown
- JSX syntax
- Component imports

**Template Variables:**
\`\`\`markdown
Hello \`\{\{name\}\}\`, welcome to \`\{\{project\}\}\`!
\`\`\`

## Conversion System
- Markdown ↔ TypeScript conversion
- Auto-detects template variables
- Generates type-safe functions
- Handles escaped content

## Code Highlighting
Supports: JavaScript, TypeScript, HTML, CSS, JSON, Bash, Python, and more.

`;
