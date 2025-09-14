import { home } from '../../md/_generated/home'
import { development } from '../../md/_generated/development'
import * as markdownSupportModule from '../../md/_generated/markdown_support'
import * as projectStructureModule from '../../md/_generated/project_structure'
import * as quickStartModule from '../../md/_generated/quick_start'
import * as technologyStackModule from '../../md/_generated/technology_stack'

const markdownContent: Record<string, string | ((variables: any) => string)> = {
  home,
  development,
  'markdown-support': markdownSupportModule['markdown-support'],
  'project-structure': projectStructureModule['project-structure'],
  'quick-start': quickStartModule['quick-start'],
  'technology-stack': technologyStackModule['technology-stack']
}

export function loadMarkdown(route: string, variables: Record<string, string> = {}): string {
  const content = markdownContent[route] || home;
  if (typeof content === 'function') {
    return content(variables);
  }
  return content;
}