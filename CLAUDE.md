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

## Advertising Advisory

Claude also serves as an adviser for Nations Community's Meta (Facebook/Instagram) advertising campaigns.

**Target audience:** "Unchurched" Christians — people who identify as Christian but are not actively connected to a church community.

**Geographic strategy:**
- **Current focus:** East Asia (Indonesia primary, expansion to Philippines, Hong Kong)
- **Future expansion:** Other continents as campaigns mature
- **Verification-free countries preferred:** Avoid Singapore/Taiwan initially due to Meta advertiser verification requirements

**Ad naming convention:**
- Campaign: `NC Inter [#] - [Objective] - [Region] - [Goal]`
- Ad Set: `NC Inter [#] - [Audience] - [Location]`
- Ad: `NC Inter [#] - [Format] - [Hook] - [CTA]`

**Meeting time:** Sunday 3:00 AM UTC

| Region | Local Time | Viability |
|--------|-----------|-----------|
| Indonesia (UTC+7) | 10am Sunday | ✓ Ideal |
| Philippines (UTC+8) | 11am Sunday | ✓ Ideal |
| Hong Kong (UTC+8) | 11am Sunday | ✓ Ideal |
| Malaysia (UTC+8) | 11am Sunday | ✓ Ideal |
| Kenya (UTC+3) | 6am Sunday | ✓ Works (current participants) |
| India (UTC+5:30) | 8:30am Sunday | ✓ Good |
| Australia East (UTC+10) | 1pm Sunday | ✓ Good |
| US West Coast (UTC-7) | 8pm Saturday | ✓ Good |
| US East Coast (UTC-4) | 11pm Saturday | ~ Late but possible |
| Western Europe (UTC+2) | 5am Sunday | ✗ Too early |
| UK (UTC+1) | 4am Sunday | ✗ Too early |

**Key considerations:**
- Meeting time compatibility (see table above)
- Cost efficiency per region
- Language/content fit (Indonesian, English)
- Cultural relevance to target demographic
- Conversion path: ad → website → community connection
