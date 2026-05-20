# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Nations Community, a Christian community based in Surabaya, Indonesia. No build system - plain HTML/CSS/JS served directly.

## Deployment

Hosted on **Cloudflare Pages** — auto-deploys on push to `master` branch.
- Production: https://www.nationscommunity.org
- GitHub: https://github.com/donaldxl/nations-community-website

## Development

To preview locally, serve from the root directory:
```bash
python3 -m http.server 8000
# or
npx serve .
```

The site uses absolute paths (`/header.html`, `/js/main.js`, `/images/...`) so it must be served from a web server, not opened as file://.

## Architecture

- **Tailwind CSS via CDN** - No local Tailwind config; styles use `cdn.tailwindcss.com` script tag
- **Shared header** - `header.html` is loaded dynamically via fetch into `#header-placeholder` on each page
- **Navigation highlighting** - `js/main.js` handles mobile menu toggle and active link highlighting based on current pathname

## Page Structure

Each page follows the same pattern:
1. Include Tailwind CDN in `<head>`
2. `<div id="header-placeholder"></div>` for dynamic header
3. Page-specific content sections
4. Footer
5. Include `/js/main.js` with defer

## Style Conventions

- Dark theme: `bg-gray-900` background, white text
- Accent color: `orange-500` for buttons and active states
- Container pattern: `container mx-auto px-6 md:px-12 lg:px-24`
