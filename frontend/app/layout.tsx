import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MDMCP - Markdown MCP Frontend',
  description: 'A unified frontend for serving markdown text via MCP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto h-full w-full flex flex-col text-center relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}