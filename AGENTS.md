# Base44 Development Guide

## Project Overview
Manor Lords-style city-building game built with TypeScript, Phaser 3, and Vite.

## Setup
- **Runtime**: Node.js 22 (via Docker Compose)
- **Dev server**: `npx vite --host 0.0.0.0 --port 3000` (live reload enabled)
- **Build**: `npx vite build`
- **Tests**: `npx jest`

## Architecture
- `index.html` — Vite entry point
- `src/main.ts` — Phaser game bootstrap
- `src/scenes/` — Phaser scenes (game screens)
- `vite.config.ts` — Vite config (binds 0.0.0.0:3000, allows all hosts)

## Running
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The app is served on port 3000. Dependencies install automatically on container start via npm.

## Notes
- No external credentials required — fully self-contained game.
- `node_modules` is stored in a Docker volume to persist across restarts.
- Vite `allowedHosts: true` and `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` are set for preview compatibility.
