# WhatsUnity — Cinematic Feature Catalog (A4 Landscape)

## Context
The user is building a **client-facing presentation catalog** for their community/building-management
app, **WhatsUnity** (compound: JANNA). It documents the app's features **role by role**, one printable
**A4-landscape page** per feature (or per small group of features). Each page pairs a narrative
description of a feature with device mockups of the real screens.

This is the **first batch: the Community role**, covering — social feed / posts, chat, community votes,
and maintenance reporting. Real screenshots are already supplied in `src/imports/*.png`. More roles and
English screens will be added later, so the catalog must be **data-driven and easy to extend** (add a
page = add one config entry + drop in a screenshot).

**Decisions locked with the user:**
- **Light premium** stage (soft white/blue gradient, subtle shadows) — matches the app UI, not dark.
- **Arabic-first, RTL** catalog copy. English pages come later.
- **Blue** text accents and blue chip icons, matching the app (e.g. the Directory icon look).
- **Mixed density**: hero pages (1 large mockup) for key features, grouped pages (2–3 mockups) for smaller ones.

## Aesthetic direction
Implementation MUST begin by invoking the `aesthetic-stance` skill and calling `create_make_theme`
(1–2 sentence brief: "Light, premium Arabic RTL product-feature catalog for a community-management app;
airy white/blue stage, blue accents, elegant device mockups"). Final font + token choices come from that
skill. Working intent:
- **Typography**: a premium Arabic face (e.g. *IBM Plex Sans Arabic* or *Tajawal*) for RTL copy, paired
  with a clean Latin face for the "WhatsUnity" wordmark / codes (MR-1#, GP-8821). Wire via Google Fonts
  `@import` at the very top of `src/index.css` (per AGENTS.md).
- **Color tokens** (in `src/index.css` `@theme`): primary blue (~`#2563EB`), soft blue chip bg (~`#EFF3FF`),
  ink/slate text, warm off-white page stage, muted borders. Reuse app category colors where a screen maps to
  one (Maintenance=green, Security=orange, Care=blue, Directory=blue).
- **Craft**: floating phone frames with soft layered shadow + faint blue glow, generous whitespace, thin
  hairline dividers, small blue-chip feature icons, page-number + role tag footer.

## Architecture
Keep `src/main.tsx` / `index.html` untouched. Replace the empty `src/App.tsx` body with the catalog
composition. Build small, reusable, **data-driven** pieces under `src/components/catalog/`:

- `src/App.tsx` — sets `dir="rtl"`, renders the light gradient stage, maps over the pages config, includes
  print controls.
- `src/components/catalog/CatalogPage.tsx` — one A4-landscape sheet (fixed aspect ~`297/210`, e.g.
  `1123×794`px stage), white card, soft shadow, print `page-break-after`. Slots: header (role tag + section
  title), feature panel, mockup zone. RTL naturally puts copy on the right, mockups on the left (mirrors the
  `image.png` sample).
- `src/components/catalog/PhoneMockup.tsx` — device frame (rounded bezel, subtle notch/glow) wrapping a
  screenshot `import`ed from `src/imports/*.png`. Size variants: `hero` (single large) and `grid` (2–3).
- `src/components/catalog/FeaturePanel.tsx` — section eyebrow + Arabic title + list of feature rows
  (blue chip icon + bold title + description). Icons via `lucide-react`.
- `src/components/catalog/CoverPage.tsx` — brand cover: WhatsUnity wordmark/infinity mark, catalog title
  (e.g. "دليل الميزات — دور المجتمع"), compound "JANNA 2".
- `src/data/catalog.ts` — the **page config array** (title, eyebrow, layout=`hero|group`, feature list with
  icon names + Arabic copy, screenshot imports). This is the single place to extend for new roles/screens.

**Dependency**: install `lucide-react` (not in baseline) for the blue feature/nav icons.

## Page inventory (Community role, this batch)
Screenshots already present in `src/imports/`:
1. **Cover** — brand + role title (المجتمع).
2. **Hero — الصفحة الرئيسية والمنشورات** → `Home_screen_community.png` (feed, category shortcuts, post card,
   like/comment/share). Feature bullets: نشر المنشورات، الوسائط، التفاعل، اختصارات الخدمات.
3. **Group — الخلاصة الاجتماعية (الحالات)** → `empty-social_.png` + `social.png` (empty state + populated feed,
   real-time, residents & staff only, AR/EN + dark toggle).
4. **Hero — الدردشة المجتمعية** → `chatting.png` (General Chat, roles, RTL messages).
5. **Hero — التصويت المجتمعي** → `creating_community_vote.png` (New Vote modal: question, options, duration,
   launch poll).
6. **Group — تقارير الصيانة** → `maintinace-reporting.png` + `creatting-new_report.png` (status filters
   الكل/جديد/قيد التنفيذ/محلول, report cards, create form).

Each page: right-side Arabic feature panel, left-side mockup(s), role tag + page number footer, WhatsUnity
mark in the header.

## Extensibility note
Later roles (Security/Gatekeeper/Patrol per `RBC_SECURITY_AND_OPERATIONS.md`) and English screens are added
by appending entries to `src/data/catalog.ts` and dropping screenshots into `src/imports/`. Group entries
under a `role` field so pages can be sectioned by role. No structural changes needed.

## Verification
- Dev server is already running on `$PORT`; confirm the catalog renders as stacked A4-landscape sheets,
  RTL, with each screenshot correctly framed and no layout flip issues on the Arabic copy.
- Check print/PDF preview (Ctrl/Cmd-P): each page should occupy one A4 landscape sheet with clean page
  breaks and no clipped mockups.
- Sanity-check the build compiles (imports resolve, `lucide-react` installed).
