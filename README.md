# VALENCE // Cinematic Scroll-Driven Event Storytelling Experience

> A modern designer-portfolio styled, high-contrast, editorial event management platform built strictly with **semantic HTML5, modern CSS3, and vanilla JavaScript (ES6+)**. Powered by **GSAP (GreenSock)** and **ScrollTrigger** for immersive scroll storytelling.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
[![Vercel Ready](https://img.shields.io/badge/Deploy-Vercel_%2F_Netlify_%2F_GitHub_Pages-black?logo=vercel&style=flat-square)](#-deploying-to-vercel)
[![No Frameworks](https://img.shields.io/badge/Stack-HTML5_%7C_CSS3_%7C_Vanilla_JS-blueviolet?style=flat-square)](#-tech-stack)
[![Animations](https://img.shields.io/badge/Motion-GSAP_3.12_%2B_ScrollTrigger-06b6d4?style=flat-square)](#-the-narrative-concept)
[![Mobile Tested](https://img.shields.io/badge/Responsive-Tested_at_360px_%2B_44px_Tap-success?style=flat-square)](#-mobile-responsive-at-360px)

---

## 🌟 Brand Identity: VALENCE

- **Brand Name**: **VALENCE**
- **Brand Mark**: Precision isometric glowing prism hexagon with multidirectional node connections (embedded SVG with gradient glow).
- **Core Mantra**: *“Beyond Reality. Before the World.”*
- **Theme Palette**:
  - `--bg: #050507` (Deep Obsidian Black)
  - `--bg-soft: #0d0d14`
  - `--surface: rgba(255, 255, 255, 0.04)` with 1px border `rgba(212, 175, 55, 0.18)`
  - `--gradient-main: linear-gradient(135deg, #3b4cff 0%, #7b2ff7 50%, #d4af37 100%)` (Blue -> Purple -> Gold)
  - `--gold: #d4af37`, `--gold-light: #f5d97a` (Premium Accent)
  - `--text: #f5f2e8`, `--text-muted: #a8a5b3` (WCAG AAA contrast: 18.5:1)
  - **Light Mode**: Warm cream (`#faf6ea`) background with dark espresso text and gradient accents.
- **Live Preview URL**: [https://valence-events.vercel.app](https://valence-events.vercel.app) *(Deploy-ready placeholder)*
- **Repository**: [https://github.com/hoursgotviral-dev/VALENCE](https://github.com/hoursgotviral-dev/VALENCE)

### Hero Showcase
```
+-----------------------------------------------------------------------------------------+
|  [VALENCE LOGO] VALENCE EXP    01 Spark   02 Discover   03 Spotlight   04 Dive In  [Passes: 0]|
|                                                                                         |
|                    BEYOND REALITY.                                                      |
|                    BEFORE THE WORLD.                                                    |
|                                                                                         |
|        [ NEXT FLAGSHIP: SYNAPSE SUMMIT — 14d : 08h : 42m : 19s ]                         |
|                 [ Explore Lineup -> ]   [ Reserve Access ]                              |
|                                                                                         |
|                               ( Scroll to Unravel )                                     |
+-----------------------------------------------------------------------------------------+
```

---

## 📖 The Narrative Concept

Rather than treating events as an ordinary database table, **VALENCE** unfolds as a **7-chapter cinematic scroll journey**:

| Chapter | Title | Focus & Cinematic Motion |
| :--- | :--- | :--- |
| **00** | **Prologue (Hero)** | Parallax floating gradient blobs, memorable split-text line reveal (*"BEYOND REALITY. BEFORE THE WORLD."*), live countdown timer to the flagship event, magnetic CTAs. |
| **01** | **The Spark** | The mission manifesto with word-by-word scroll reveal, followed by ScrollTrigger-animated number counters (events, attendees, cities, rating). |
| **02** | **Discover** | 11+ curated global gatherings across Tech, Music, Sports, Workshops, and Culture. Interactive search, category chips, 3D card tilt & hover effects. Automatic `ScrollTrigger.refresh()` on filter. |
| **03** | **Spotlight** | Pinned horizontal scroll section featuring 4 flagship event panels (ScrollTrigger `pin: true` + `scrub: 1`, parallax images, giant gold numbers, dynamic progress fill; fluid scroll-snap carousel on mobile). |
| **04** | **Dive In** | Interactive multi-stage explorer (Keynote, Ateliers, Sensory Showcase, Nocturne Lounge) plus a rich full-screen Event Details Modal with scale/clip-path transition, live countdown, and timeline schedule. |
| **05** | **Join the Story** | Real-time validated registration form with animated SVG checkmark draw, full-screen canvas fireworks finale sequence, and digital pass preview. |
| **06** | **Epilogue** | Visionary closing dispatch, private newsletter signup, curation hubs, and system health status. |

---

## 🎬 Cinematic Animation & Motion Engine

VALENCE incorporates a high-performance, studio-grade motion engine engineered strictly with vanilla JavaScript, modern CSS, GSAP 3.12, ScrollTrigger, and Lenis:

1. **Lenis Smooth Page-Scroll**:
   - Integrated via CDN (`lenis.min.js`) and synchronized directly with GSAP ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`.
   - Driven smoothly through `gsap.ticker.add((time) => lenis.raf(time * 1000))` with `gsap.ticker.lagSmoothing(0)` for zero layout jitter.
   - Smooth interpolation on in-page anchor links and Back-to-Top trigger.

2. **Custom Trailing Cursor with "VIEW" Expansion (Desktop)**:
   - High-precision mouse tracker with hardware-accelerated `translate3d()` and trailing lerp outline.
   - Expands to an illuminated 78px circular viewfinder revealing **"VIEW"** typography whenever hovering over `.event-card` and spotlight panels, with automatic dot concealment.

3. **Magnetic Buttons & 3D Tilt with Lighting Glare**:
   - Primary CTAs, theme toggles, and back-to-top triggers feature magnetic elastic follow with `gsap.to()` and spring returns.
   - Event cards calculate mouse coordinate offsets to generate true 3D perspective tilt (`rotateX`, `rotateY`, `scale3d`) paired with dynamic radial glare sheens (`.card-sheen`).

4. **Split-Text Letter-by-Letter Chapter Reveals**:
   - Every chapter headline (`.section-headline`) automatically wraps words and characters with overflow-hidden wrappers.
   - Characters slide up and rotate into place with staggered cubic-bezier easing (`stagger: 0.02`) triggered on ScrollTrigger entry, while preserving complete accessibility via semantic `aria-label`.

5. **Infinite Scrolling Marquee Category Strips**:
   - Dual running marquee ticker strips placed between chapters (Ch 1->2 and Ch 3->4) displaying upcoming event themes, international hubs, and celestial glyphs with hover-pause functionality.

6. **Parallax Ambient Floating Shapes**:
   - Floating glowing gradients and orbital wireframe rings placed within chapter backgrounds scrubbed smoothly along the vertical axis via `data-speed` ScrollTrigger scrubs.

7. **Event Card Image Clip-Path Reveal**:
   - Event card media starts clipped with `clip-path: inset(100% 0% 0% 0%)` and gracefully unfolds to `inset(0% 0% 0% 0%)` when scrolling into the viewport.

8. **Dynamic Chapter Atmosphere Shifts**:
   - Smoothly transitions the document background hue as each narrative chapter enters view (between Obsidian `#050507`, Midnight Blue `#0a0a14`, and Deep Violet `#0d0817`), with clean override when Light Mode is active.

9. **Animated Underline Navigation & Scroll Progress**:
   - Dynamic gradient underline expands on hover and smoothly marks active chapter navigation.
   - Ultra-responsive top progress bar tracks reading velocity.

10. **Vanilla Canvas Fireworks & Particle Engine**:
    - Full-screen `<canvas id="fireworks">` with `pointer-events: none` and precise z-index stacking (`1006`), rendering behind dialog text (`1008`) and above page content.
    - Rocket launches with gold trailing sparks into 60–100 particle explosions (`globalCompositeOperation = 'lighter'`).
    - 4 procedural explosion geometries: **circular burst**, **expanding ring**, **parametric heart**, and **5-pointed star**.
    - Ambient hero fireworks timed every 1.5–2.5s with reduced opacity (0.42) so text stays legible, pausing when the hero is out of view.
    - Immediate explosions on pointer taps anywhere in `#hero` or `#spotlight`.
    - Micro spark bursts on hovering "Register Now" CTA buttons.
    - Grand 6-burst fireworks finale on successful booking confirmation.
    - Intelligent resource management: caps at 400 particles on desktop (150 on mobile), pauses on tab switch (`visibilitychange`), respects `prefers-reduced-motion`, and cancels the animation loop when idle.

11. **Strict Reduced Motion Compliance (`prefers-reduced-motion`)**:
    - Disables Lenis, heavy scrubs, 3D tilts, marquees, transforms, and ambient fireworks when the operating system preference is detected, ensuring universal accessibility.

---

## 📱 Mobile Responsive at 360px

The platform has been audited and optimized specifically for **360px viewport widths** (tested on iPhone SE, Galaxy S8, and mini mobile screens):
- **Zero Horizontal Overflow**: Guaranteed via `max-width: 100vw; overflow-x: hidden;` and wrapping text properties.
- **Spotlight Responsive Layout**: On desktop (`>= 769px`), Chapter 3 pins and scrubs horizontally. On mobile screens (`<= 768px`), it automatically switches to an unpinned horizontal scroll-snap carousel with dot pagination. No layout breaks or horizontal viewport overflows.
- **Comfortable Tap Targets (>= 44px)**:
  - All interactive buttons, icon buttons (`.theme-toggle`, `.hamburger-btn`), chips, and tab triggers strictly satisfy the Apple/Android **44px–52px minimum tap area**.
  - On phones, the hero action buttons expand to full width (`min-height: 50px`) for thumb navigation.
- **Form Usability**: Input fields have `font-size: 16px` to prevent annoying automatic zoom behavior in iOS Safari.

---

## ⚡ Core Features & Functional Requirements

### 1. Events Data Engine (11 Curated Gatherings)
- Comprehensive dataset in `script.js` featuring events spanning 2026 and 2027:
  - *Synapse Neurotech & AI Summit (Tokyo)*
  - *Lumina Solstice Odyssey (Reykjavik)*
  - *Velocity World Invitational (Berlin)*
  - *Horizon Kinetic Biennale (London)*
  - *Quantum Systems Atelier (Zurich)*
  - *Resonance Ambient Festival (Berlin)*
  - *Algorithmic Art & Generative AI (Paris)*
  - *NextGen Silicon & Photonics Expo (San Francisco)*
  - *High-Altitude Alpine Ultra Rally (Chamonix)*
  - *Kyoto Tea & Sensory Philosophy (Kyoto)*
  - *Cybernetic Bio-Design Symposium (Singapore)*
- Fields include unique `id`, `name`, future ISO `date`, `venue`, `category`, Unsplash banner URLs, `shortDesc`, `fullDesc`, `price`, real-time `seats`, and detailed `schedule` timelines.

### 2. Live Search & Dynamic Filtering
- **Debounced instant search** matching title, venue, city, category, or description keywords with an instant clear button.
- **Category filter chips**: `All`, `Tech`, `Music`, `Sports`, `Workshop`, `Cultural`.
- **Empty State**: Friendly visual fallback when zero results match the user's query, complete with a single-click "Reset All Filters" button.
- **ScrollTrigger Synchronization**: Calls `ScrollTrigger.refresh()` after DOM updates to keep triggers calibrated.

### 3. Interactive Event Details Modal (Chapter 4)
- Triggered by clicking any event card or spotlight panel.
- Smooth scale + clip-path transition with glassmorphism backdrop.
- Displays high-res visual banner, category, remaining seats, full narrative overview, curated multi-stage schedule, and a **real-time live countdown timer** to the event's opening hour.
- Includes a **"Register for this Event"** CTA that closes the modal, smoothly scrolls down to the registration form, and preselects the event in the dropdown.

### 4. Registration System with Client-Side Validation
- Fields:
  - **Full Name**: Minimum 3 letters, alphabetic characters and spaces.
  - **Email Address**: Strict email RFC regex validation.
  - **Phone Number**: Exactly 10 numerical digits.
  - **Experience Dropdown**: Dynamic real-time remaining seat counter per option.
- **No intrusive `alert()` calls**: Instant visual cues with green checkmarks on valid fields, red alert messages on invalid inputs, and a global warning callout.
- **Duplicate Prevention**: Intelligently detects and blocks duplicate reservations for the same email and event combination.

### 5. LocalStorage & Pass Portfolio ("My Passes" Drawer)
- Confirmed registrations are persisted to browser `localStorage`.
- Booking decrements the available seats for that event in real-time across the app.
- Slide-over **"My Passes"** drawer:
  - Displays all registered passes with unique cryptographically formatted IDs (e.g. `NX-84920`), attendee credentials, date, and venue.
  - **Cancellation Option**: Users can release their reservation at any time, which automatically removes the pass from storage and restores the seat count.
- Dynamic ticket badge counter on the desktop navbar and mobile drawer.

---

## 🛠️ Tech Stack

- **Markup**: HTML5 (Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dialog>`, ARIA roles)
- **Styling**: Modern CSS3 (Custom properties/variables, Glassmorphism `backdrop-filter`, CSS Grid, Flexbox, Clamp typography)
- **Scripting & Particles**: Vanilla JavaScript (ES6+ Modules/IIFE, Canvas Particle Physics, Web Storage API)
- **Animation Libraries (CDN)**:
  - [GSAP 3.12](https://greensock.com/gsap/) (Core timeline animations)
  - [GSAP ScrollTrigger 3.12](https://greensock.com/scrolltrigger/) (Pinned scroll, counters, scrubbed reveals)
  - [Lenis 1.1](https://lenis.darkroom.engineering/) (Smooth page scroll)

---

## 📁 Project Structure

```
├── index.html        # Semantic HTML5 single-page application structure & modals
├── style.css         # Complete CSS3 design system, responsive rules & animations
├── script.js         # Events database, GSAP motion, form validation & LocalStorage
├── vercel.json       # Vercel deployment configuration (security headers, caching)
└── README.md         # Architecture, deployment guide & documentation
```

---

## 🚀 Deploying to Vercel

The project includes an optimized [`vercel.json`](file:///c:/Users/KIIT/Downloads/ASSIGNMENT%20KIIT/vercel.json) configuration file with HTTP security headers and immutable asset caching.

### Option A: Deploy via Vercel Dashboard (Zero Setup)
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Leave all build settings at their defaults:
   - **Framework Preset**: `Other`
   - **Root Directory**: `./`
   - **Build Command**: *(leave empty)*
   - **Output Directory**: *(leave empty)*
5. Click **"Deploy"**. Your site will be globally deployed in seconds!

### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy directly from this directory
vercel

# Deploy to production
vercel --prod
```

---

## 💻 Running Locally

Because this project uses standard browser-native HTML5, CSS3, and JavaScript with CDN dependencies, **no build step or package manager is required**.

```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js (npx)
npx serve .
```
Then visit `http://localhost:8000` in your browser.

---

## 📄 License & Attribution

Designed and developed as an open demonstration of modern web craftsmanship. Released under the **MIT License**.
Banner imagery sourced under the Unsplash license.
