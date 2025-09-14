import { home } from '../../md/_generated/home'
import { quick_start } from '../../md/_generated/quick_start'
import { my_account } from '../../md/_generated/my_account'
import { hosted_ui } from '../../md/_generated/hosted_ui'
import { enterprise_auth } from '../../md/_generated/enterprise_auth'
import { create_sso } from '../../md/_generated/create_sso'
import { create_sso_token } from '../../md/_generated/create_sso_token'
import { refresh_api_key } from '../../md/_generated/refresh_api_key'
import { roles_and_permissions } from '../../md/_generated/roles_and_permissions'
import { radar } from '../../md/_generated/radar'
import { widgets } from '../../md/_generated/widgets'
import { custom_metadata } from '../../md/_generated/custom_metadata'
import { convex } from '../../md/_generated/convex'
import { invalid_route } from '../../md/_generated/invalid_route'

const markdownContent: Record<string, string | ((variables: any) => string)> = {
  home,
  quick_start,
  my_account,
  hosted_ui,
  enterprise_auth,
  create_sso,
  create_sso_token,
  refresh_api_key,
  roles_and_permissions,
  radar,
  widgets,
  custom_metadata,
  convex,
  invalid_route
}

export function loadMarkdown(route: string, variables: Record<string, string> = {}): string {
  const content = markdownContent[route] || invalid_route;
  if (typeof content === 'function') {
    return content(variables);
  }
  return content;
}