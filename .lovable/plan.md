Port the uploaded portfolio into this TanStack Start app **keeping all original copy, section names, project data, and component names intact**. The only thing changing is the visual polish — cinematic dark theme, better motion, premium typography. No renaming, no rewriting Nour's bio or the hero hook.

## Hard rules
- **Keep original Hero copy** exactly: "From paper ball → To paper plane" reveal, signature, original CTAs ("Resume" / "Let's Talk"), name as it appears in the source ("Noureldin"/"Nour Adawy" — whichever the original files use, unchanged).
- **Keep original section names**: Hero, Portfolio Summary, Payment Showcase, Projects Timeline, Contact, Footer.
- **Keep original project data verbatim**: Whatsunity, Medicare, Mokhalafaty, Phone Dialer — titles, years, descriptions, tech-stack labels, links exactly as in `projectsData.jsx`.
- **Keep original payment showcase content**: same architectural breakdown, same test credentials, same Card / PayPal tabs (visual only, no real processing).
- **Keep original contact integration**: EmailJS with the service/template/public key from your `useContact.js`.
- **Keep original phone mockup**: dynamic island, home indicator, side buttons, screen-glare overlay, iframe scale trick — straight port of `PhoneMockup.jsx` + `.css`.

## What changes (visuals only)
- **Theme**: cinematic dark — `bg-slate-950` base, electric-blue + deep-purple subtle glows. Original magenta `#e81cff` / `#ff2d95` accents preserved as a secondary highlight (they're part of the brand).
- **Typography**: keep Inter for body. Add Bebas Neue (already in your original) for display headings to make the hero feel cinematic.
- **Motion**: replace plain CSS transitions with Framer Motion — staggered fade-up on every section, scroll-triggered reveals, signature SVG stroke-draw, smooth project case-study expand.
- **Hero background**: keep the original "paper ball → paper plane" concept but render the paper plane as a **pure SVG animated by Motion** (glides, dips, sways across the background, behind the text). Replaces the Unicorn Studio dependency without changing the message.
- **Skill / tech bar**: render as floating glow cards with stagger-fade on scroll (visual upgrade of the existing icon row).
- **Project timeline**: keep the vertical year rail + cards, add a smooth "View Case Study" expand animation and filter pills (All / Mobile Apps / Web Apps) populated from the original project categories.
- **Glass surfaces**: `bg-white/5 backdrop-blur-xl border-white/10` on cards, with subtle glow rings on hover.

## Clean Architecture structure (per /skill:clean-arch)
```
src/features/portfolio/
  domain/
    entities/
      Project.ts            # mirrors original projectsData shape
      Skill.ts
      ContactMessage.ts
    repositories/
      ContactRepository.ts  # interface, ported from your file
  usecases/
    SendContactMessage.ts   # ported verbatim
    useContact.ts           # EmailJS wiring (keys from original useContact.js)
    useProjectFilter.ts     # All / Mobile / Web filtering
    useCaseStudyToggle.ts   # expand/collapse state
  data/
    repositories/
      EmailJSContactRepository.ts   # ported verbatim
    projects.data.ts        # original Whatsunity / Medicare / Mokhalafaty / Phone Dialer data
    skills.data.ts          # Flutter, Dart, Spring Boot, React, Clean Arch, BLoC/Cubit
  presentation/
    sections/
      HeroSection.tsx           # original copy, new SVG plane bg
      PortfolioSummarySection.tsx
      PaymentShowcaseSection.tsx
      ProjectsTimelineSection.tsx
      ContactSection.tsx        # original layout, EmailJS-wired
      FooterSection.tsx
    components/
      Navbar.tsx
      Signature.tsx             # SVG stroke-draw
      AnimatePing.tsx           # ported
      PaperAirplane.tsx         # NEW — SVG plane animated by Motion
      GlowCard.tsx              # reusable floating glow card
      TimelineItem.tsx
      ProjectCaseStudy.tsx
      ProjectGallery.tsx        # Embla replacement for react-image-gallery
      PhoneMockup.tsx           # straight port of original + .css
      SectionHeading.tsx
    animations/
      variants.ts               # shared Motion variants
    styles/
      PhoneMockup.module.css    # original phone CSS, scoped

src/routes/index.tsx        # composes all sections in original order
src/styles.css              # slate-950 base + electric/violet glow tokens + Bebas Neue
public/Resume.pdf           # placeholder until you upload real one
```

## Execution plan (two phases, per your instructions)

**Phase 1 — first build response:**
1. Print the folder tree above so you can confirm.
2. Install `framer-motion`, `react-icons`, `@emailjs/browser`.
3. Add tokens + keyframes to `src/styles.css`, load Bebas Neue + Inter in `__root.tsx`.
4. Build `PaperAirplane.tsx` (pure SVG, Motion-driven glide/dip/sway, behind hero text).
5. Build `HeroSection.tsx` with original copy preserved exactly + new airplane bg + signature stroke-draw.
6. Mount it in `src/routes/index.tsx`.
7. **Stop and ask permission before Phase 2.**

**Phase 2 — after you say go:** Navbar, PortfolioSummary, PaymentShowcase (visual), ProjectsTimeline with filters + case-study expand, ContactSection (EmailJS), Footer.

## Dependencies to add
`framer-motion`, `react-icons`, `@emailjs/browser`

## Dropped (not part of the visual upgrade, would only add bloat)
`react-ga4` (analytics), `@stripe/react-stripe-js` + `@paypal/react-paypal-js` (showcase is visual only), `react-hot-toast` (use existing `sonner`), `react-image-gallery` (use Embla, already installed), `tailwindcss-motion`, extra Google Font imports beyond Inter + Bebas Neue.