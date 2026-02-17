# Pretend Play App

## Overview
Interactive bedtime adventure app for parents and toddlers. Parents pick an energy level (Active/Cozy), get 3 randomized scenario options, then play through a 3-step story (Starter > Twist > Ending) with assigned roles.

## Tech Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 with PostCSS
- No backend — localStorage for persistence

## Project Structure
- `app/page.tsx` — Main page component with all UI modes (setup, select, story, favorites)
- `app/layout.tsx` — Root layout
- `app/globals.css` — Global styles
- `components/SelectionCard.tsx` — Reusable card for scenario selection
- `data/scenarios.ts` — All 16 scenarios with bilingual content (EN/TR)
- `hooks/useFavorites.ts` — Favorites persistence via localStorage
- `hooks/useLanguage.ts` — EN/TR language toggle with hydration handling

## Features Implemented
- Energy level selection (Active / Cozy)
- 3 randomized adventure options per energy level
- 3-step story progression with progressive reveal
- Parent & child role assignments
- Favorites system (localStorage)
- Full EN/TR bilingual support (default: Turkish)
- Responsive mobile-first design

## Scenarios
- 8 Active energy scenarios (Airport, Space Station, Race Car, Jungle, Pirate Ship, Dinosaur World, Superhero City, Mountain Rescue)
- 8 Low energy scenarios (Library, Vet Clinic, Bakery, Cloud Painter, Forest Cottage, Moonlight Garden, Toy Repair, Starlight Train)

## Recent Changes
- Removed gendered icons (🧒/🧑) from role labels in story view — gender-neutral "You're:" / "I'm:" instead
- Updated Turkish translations across all scenarios
- Changed default language to Turkish (TR)
- UI/UX fixes: added back button in story mode, "Play again" button at story end, fade-in transitions between all modes, hidden language toggle during story playback, aria-labels on all favorite buttons
- Removed dark mode CSS conflict in globals.css (was causing flash for dark-mode users)
- Fixed favorites badge count bug — was using raw `favorites.length` (included stale IDs) instead of `favoriteScenarios.length` (only valid scenarios)
- Added TR/EN language toggle

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint

---

## 1. UI/UX Review

### Strengths
- Calm gradient backgrounds suit the bedtime context well
- Progressive story reveal (Starter > Twist > Ending) creates anticipation without overwhelming
- Energy toggle (Active/Cozy) is a smart UX pattern — parents self-select mood
- Large tap targets and rounded corners are toddler-screen friendly
- Emoji-driven visual cues reduce cognitive load for both parent and child

### Issues & Risks
- **Single-page monolith**: All 4 modes (setup, select, story, favorites) live in one component. Navigation state is managed via `useState` with no URL routing — pressing browser back exits the app entirely, which is frustrating mid-story

### Fixed Issues
- ~~No transition animations~~ — Added fade-in animations (0.35s ease-out) to all mode containers
- ~~No "replay same story" option~~ — Added "Play again" button at story end
- ~~Dark mode conflict~~ — Removed `prefers-color-scheme: dark` override from globals.css
- ~~Language toggle always visible~~ — Hidden during story playback
- ~~No "back" from story view~~ — Added "Back to adventures" link at top of story view
- ~~Accessibility: no aria-labels~~ — Added aria-labels to all favorite toggle buttons

### Remaining Suggestions
- Consider URL-based routing so browser back button works naturally between modes

---

## 2. Architecture Review

### Strengths
- Clean separation: data (`scenarios.ts`), hooks (`useFavorites`, `useLanguage`), UI (`page.tsx`, `SelectionCard`)
- TypeScript typing is consistent — `LocalizedText`, `Scenario`, `Lang` types are well-defined
- Custom hooks properly encapsulate localStorage logic with error handling
- Fisher-Yates shuffle implementation is correct

### Issues & Risks
- **Monolithic page component**: `page.tsx` handles all 4 modes, all state, all logic. As features grow this will become unwieldy. Should be split into separate view components (SetupView, SelectView, StoryView, FavoritesView)
- **No URL-based routing**: App state is entirely in React state. Refreshing the page always returns to setup mode. No deep-linking possible
- **Scenario data is static import**: All 16 scenarios are bundled in the client JS. At 100+ scenarios this becomes a bundle size issue. Should move to dynamic loading or server-side filtering
- **Shuffle happens on every render path**: `generateOptions()` creates new random picks each time, but if the component re-renders for unrelated reasons (e.g., language change), the options persist correctly since they're in state — this is fine
- **`favoriteScenarios` computed on every render**: Uses `.map().find().filter()` — fine for 16 scenarios, but at scale should be memoized with `useMemo`
- **No error boundaries**: If scenario data is malformed or a hook throws, the entire app crashes with no recovery
- **`tsconfig.json` has `strict: false`**: Allows implicit `any` types and nullable issues to slip through. Should enable strict mode

### Suggested Improvements
- Extract mode-specific views into separate components
- Add `useMemo` for `favoriteScenarios` and `storyBeats` computations
- Consider URL-based state (Next.js `searchParams` or `useRouter`) for at least the mode
- Enable `strict: true` in tsconfig
- Add an error boundary component

---

## 3. Security Review

### Current Risk Level: Low (appropriate for MVP)

### localStorage Usage
- **Data stored**: favorites (array of scenario IDs), language preference (string)
- **Validation**: `useFavorites` validates that parsed data is an array of strings before using it — good
- **No sensitive data**: No auth tokens, no PII, no financial data — just preferences
- **Error handling**: Both hooks have try/catch around localStorage access — handles private browsing / disabled storage

### Potential Vulnerabilities
- **No input sanitization on scenario IDs**: If someone manually edits localStorage to inject HTML/script into the favorites array, the IDs are only used for `.find()` lookups against the static scenarios list — they're never rendered as HTML. This is safe by design
- **XSS via scenario content**: All scenario text is hardcoded in `scenarios.ts`, not user-generated. No XSS risk currently, but if scenarios become user-generated or fetched from an API in the future, all text must be sanitized
- **No CSP headers**: No Content Security Policy configured in `next.config.ts`. Should add basic CSP headers for production
- **No rate limiting on localStorage writes**: Rapid toggling of favorites could fill localStorage quota, but the try/catch handles this gracefully
- **`<html lang="en">` is hardcoded**: Should dynamically reflect the selected language for accessibility and SEO

### Suggested Improvements for Production
- Add CSP headers in `next.config.ts`
- Make `<html lang>` dynamic based on selected language
- If scenarios ever become user-generated, sanitize all text content
- Add `next.config.ts` security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)

---

## 4. PWA Suitability Analysis

### Current PWA Readiness: Low
The app is well-suited for PWA conversion conceptually (offline bedtime app with no backend dependency), but has none of the required PWA infrastructure in place.

### Missing Elements

#### Required for PWA
- **Web App Manifest** (`manifest.json`): Not present. Need name, short_name, icons (192x192, 512x512), start_url, display: standalone, theme_color, background_color
- **Service Worker**: Not present. Next.js doesn't include one by default. Need to use `next-pwa` package or custom implementation
- **App Icons**: Only default Next.js/Vercel SVGs in `/public`. Need proper PNG icons at multiple sizes
- **Meta tags**: Missing `<meta name="theme-color">`, Apple touch icon links, viewport meta is likely only from Next.js defaults

#### Offline Readiness
- **Scenario data**: Already bundled client-side — works offline once cached
- **localStorage**: Already used for persistence — works offline
- **No API calls**: App has zero network dependencies after initial load — ideal for offline
- **Fonts**: Geist font loaded from Google Fonts — would fail offline without precaching
- **Static assets**: All in `/public` — need service worker precaching strategy

### Performance Concerns
- **Bundle size**: Currently small, but all 16 scenarios are in the client bundle. At scale, consider code splitting
- **No image optimization**: App uses emoji instead of images — actually great for performance
- **Hydration flash**: The `!hydrated` blank screen guard works but could show a skeleton/spinner instead

### PWA Conversion Roadmap

#### Step 1: Add Web App Manifest
- Create `/public/manifest.json` with app metadata
- Add icon files at 192x192, 384x384, 512x512
- Link manifest in `layout.tsx` `<head>`
- Add theme-color meta tag

#### Step 2: Add Service Worker
- Install `next-pwa` or use Workbox directly
- Configure precaching for all static assets
- Cache Google Fonts with stale-while-revalidate strategy
- Cache the main page shell

#### Step 3: Offline Support
- Precache all scenario data (already in bundle)
- Add offline fallback page
- Test full offline flow: install > airplane mode > use app

#### Step 4: Install Experience
- Add iOS-specific meta tags (apple-mobile-web-app-capable, status-bar-style)
- Add install prompt UI for Android (beforeinstallprompt event)
- Test install flow on both platforms

#### Step 5: Performance Optimization
- Add loading skeleton instead of blank hydration screen
- Lazy-load scenario data if it grows large
- Add `next/dynamic` for mode-specific components if bundle grows

#### Step 6: Testing & Deployment
- Run Lighthouse PWA audit (target 100)
- Test on real devices (iOS Safari, Android Chrome)
- Configure HTTPS (required for service workers)
- Deploy to Vercel (handles HTTPS automatically)
