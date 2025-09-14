
import { loadMarkdown } from './markdownLoader'

export async function render(route: string, context: { sessionId: string, bearerToken?: string, routes: string[] }) {
    return loadMarkdown(route)
}