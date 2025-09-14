import { home } from '../../../md/_generated/home'
import { development } from '../../../md/_generated/development'


const markdownContent: Record<string, string | ((variables: any) => string)> = {
  home,
  development,
  markdownSupportModule,
  projectStructureModule,
  quickStartModule,
  technologyStackModule
}


export function loadMarkdown(route: string, variables: Record<string, string> = {}): string {
  const content = markdownContent[route] || home;
  if (typeof content === 'function') {
    return content(variables);
  }
  return content;
}