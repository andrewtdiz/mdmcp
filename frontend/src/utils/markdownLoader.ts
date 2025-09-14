import { home } from '../../../md/home'
import { quick_start } from '../../../md/quick_start'
import { my_account } from '../../../md/my_account'
import { hosted_ui } from '../../../md/hosted_ui'
import { enterprise_auth } from '../../../md/enterprise_auth'
import { create_sso } from '../../../md/create_sso'
import { create_sso_token } from '../../../md/create_sso_token'
import { refresh_api_key } from '../../../md/refresh_api_key'
import { roles_and_permissions } from '../../../md/roles_and_permissions'
import { radar } from '../../../md/radar'
import { widgets } from '../../../md/widgets'
import { custom_metadata } from '../../../md/custom_metadata'
import { convex } from '../../../md/convex'
import { invalid_route } from '../../../md/invalid_route'

const markdownContent: Record<string, string> = {
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

export function loadMarkdown(route: string): string {
  return markdownContent[route] || invalid_route
}