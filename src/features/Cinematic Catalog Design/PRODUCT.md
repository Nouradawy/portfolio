# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary Audience**: Compound owners, real estate developers, property management executives, and Homeowners Association (HOA) board members evaluating WhatsUnity for compound deployment.
- **End-App Users Featured**:
  - **Residents & Property Owners**: Daily social interactions, building finances, maintenance ticketing, visitor invitations, and directory lookups.
  - **Gatekeepers & Security Officers**: Fast offline QR pass scanning, guest verification, directive alerts, and incident reporting.
  - **Patrol Guards**: Physical NFC/QR checkpoint rounds and photo-verified incident logging.
  - **Compound Administrators & Managers**: Membership verification, join request approval/decline, role delegation (Admin, Owner, Tenant), chat/account moderation & ban enforcement, and community/guard broadcast dispatching.

## Product Purpose

WhatsUnity is a comprehensive residential compound operating system. This project—the **Cinematic Feature Catalog (دليل الميزات التقديمي)**—is a client-facing, marketing-grade presentation application and printable A4 landscape catalog that demonstrates WhatsUnity's capabilities role-by-role and screen-by-screen to prospective clients.

## Positioning

The first unified solution that combines **Resident Community Engagement** with an **Offline-First Security & Role-Based Access Control (RBC) Engine** in an all-in-one platform with real-time cloud synchronization.

## Operating Context

- Used in client sales presentations, stakeholder pitch meetings, and PDF export handouts.
- Delivered as an interactive web catalog (running on Google Chrome) with live role filtering, fluid RTL layouts, and 1-click A4 landscape PDF export (`297mm × 210mm`).

## Capabilities and Constraints

- **Tiers & Deployment Editions**:
  - **Free Community Edition (via Telegram)**: Access to basic community chat, directory lookups, and maintenance ticket logging managed via Telegram chat.
  - **Premium Complete Edition (Appwrite Cloud & Google Play)**: Unlocks full RBC security, QR gate passes, physical patrol checkpoints, shift planning, building financial ledger, multi-seat capacity, and interactive simulation sandboxes.
- **Cross-Platform Availability**: Currently live on **Google Play Store (Android)** and as a **PWA (Progressive Web App)**, with an upcoming **Apple iOS** release.
- **Multi-Role Coverage**: Modular pages organized by role (Community, Security Center, Subscription & Editions, Admin Console).
- **Layout Variations**: Hero showcase for flagship screens (`hero`), side-by-side comparison for multi-state flows (`group`), and micro-crop callout strips (`details`).
- **High-Fidelity PDF Output**: 100% exact color preservation, zero margin clipping, and eager image decoding.
- **Language & Direction**: Full bilingual Arabic/English with instant LTR/RTL switching.

## Brand Commitments

- **Name**: WhatsUnity (ووتس‑يونيتي)
- **Compound Reference**: JANNA 2 (and multi-tenant compounds)
- **Palette**: Electric Blue (`#2563EB`) for Community, Emerald Teal (`#0D9488`) for Security, Royal Purple (`#7C3AED`) for Subscription & Plans, Deep Indigo (`#4F46E5`) for Admin Console, Forest Green for Maintenance, Slate/Ink typography.
- **Typography**: *IBM Plex Sans Arabic* for Arabic body and headings, paired with *Inter* for Latin wordmarks and codes.
- **Visual Tone**: Light, airy, premium editorial style with floating phone frames, soft radial ambient glows, and clean hairline cards.

## Evidence on Hand

- Native screenshot assets in `src/imports/*.png` covering Community Feed, Building Chat & Budget Ledger, Voting, Maintenance Reporting, QR Gate Passes, Timeline, Guard Notes, Gate Activity Logs, Security Ticketing, User Profile & Capacity, Subscription Tiers with Interactive Sandbox, Member Access Verification, Member Ban & Role Assignment, and Broadcast Publisher.
- Architectural documentation: `src/imports/RBC_SECURITY_AND_OPERATIONS.md`.

## Product Principles

1. **Client-Facing Elegance**: Every screen is presented with marketing-grade Arabic and English copy with clean visual framing.
2. **True-to-Print Precision**: The on-screen experience translates 1:1 to printed or exported A4 landscape PDFs with zero color or detail degradation.
3. **Transparent Tiering & Sandbox**: Demonstrating the clear value gap between Free (Telegram Lite) and Premium (Full RBC OS) with risk-free interactive sandboxes.
4. **Administrative Authority & Community Safety**: Equipping compound managers with full control over resident verification, role delegation, chat moderation, and instant security broadcasting.
