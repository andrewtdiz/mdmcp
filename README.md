# MDMCP - Markdown MCP

A unified monorepo containing both a Next.js frontend application and an MCP (Model Context Protocol) server for serving markdown text.

## Installation

```bash
npm install mdmcp
```

## Usage

### Development

Start both frontend and MCP server in development mode:

```bash
npm run dev
```

Or start them individually:

```bash
# Frontend only (Next.js)
npm run dev:frontend

# MCP server only
npm run dev:mcp
```

### Production

Build the entire project:

```bash
npm run build
```

Start the production servers:

```bash
# Start Next.js frontend
npm run start:frontend

# Start MCP server
npm run start:mcp
```

### CLI Usage

After installing globally or using npx:

```bash
# Start MCP server
mdmcp-server

# Start Next.js frontend server
mdmcp-frontend
```

## Project Structure

```
mdmcp/
├── frontend/          # Next.js frontend application
│   ├── app/          # Next.js App Router
│   ├── src/          # Source components
│   └── ...
├── mcp/              # MCP server implementation
├── md/               # Markdown content to be served
├── dist/             # Built output
├── package.json      # Unified dependencies
└── README.md
```

## Scripts

- `npm run dev` - Start both services in development
- `npm run build` - Build both services
- `npm run test` - Run tests
- `npm run clean` - Clean all build outputs and dependencies
- `npm run install:all` - Install dependencies for all packages

## Requirements

- Node.js >= 18.0.0
- TypeScript >= 5.0.0

## Technology Stack

### Frontend
- Next.js 15 with App Router
- React 18
- TypeScript
- Tailwind CSS
- Radix UI components
- MDX support

### MCP Server
- Model Context Protocol SDK
- Express.js
- TypeScript
- Zod for validation