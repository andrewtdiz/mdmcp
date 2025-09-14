
import { loadMarkdown } from './utils/markdownLoader'

export function render(route: string, context: { sessionId: string, bearerToken?: string, routes: string[] }) {
    return loadMarkdown(route)
}