# NOURELDIN MOHAMED YEHIA
**Founder & Lead Engineer | Mobile & Full-Stack Systems**  
📍 Cairo, Egypt | 📱 (+20) 01020007093 | ✉️ [nouradawy@hotmail.com](mailto:nouradawy@hotmail.com)  
🌐 [nouradawy.tech](https://www.nouradawy.tech) | 💼 [linkedin.com/in/nouradawy](https://linkedin.com/in/nouradawy) | 🐙 [github.com/Nouradawy](https://github.com/Nouradawy)

---

## PROFESSIONAL SUMMARY
Founder & Lead Engineer with 5+ years building production-grade systems from first principles. Specialized in offline-first mobile applications (Flutter/Dart 3 with SQLite Master, zero-latency optimistic UI synchronization, and Clean Architecture), distributed cloud backends (Appwrite 6-database architecture, Spring Boot, Supabase, Cloudflare R2 direct-to-edge storage), and autonomous AI agent workflows (Google Antigravity 2.0, Claude models: Opus 4.8 / 5 / 5.5 & Sonnet, Model Context Protocol MCP servers, and ARTEMIS testing). Passionate about high-fidelity UX, rock-solid security protocols, and owning the complete product lifecycle from architecture to production release.

---

## TECHNICAL SKILLS

- **Mobile Engineering**: Flutter, Dart 3, BLoC / Cubit, SQLite (Local Master Architecture), Offline Sync & LWW Conflict Resolution, Shorebird OTA Code Push, Telegram MTProto API (TDLib), Platform Channels, Android (Kotlin), Responsive UI, Localization (AR/EN RTL/LTR).
- **Backend & Cloud**: Docker (Appwrite & Supabase Local Testing Sandboxes), Appwrite (6-Database Architecture, Teams RBAC, Realtime WebSockets, Edge Functions), Spring Boot (Java, Spring Security, JPA/Hibernate, JWT), Supabase (Auth, Realtime, Storage), Cloudflare R2 (Direct-to-Edge Pre-signed URLs), PostgreSQL, MySQL (Indexing & Query Optimization), RESTful APIs, CI/CD.
- **Frontend & Web**: React 19, TypeScript, TanStack Router / Query / Start, Tailwind CSS v4, Framer Motion, Vite, Responsive & Accessible UI.
- **AI & Agentic Systems**: Claude models (Opus 4.8 / 5 / 5.5, Sonnet), Google Antigravity 2.0, Cursor AI, Model Context Protocol (MCP Servers), Agent Rules & Workflows (`.agents/`, `SKILL.md`, `rules/*.md`), ARTEMIS Closed-Loop Mobile Testing, Multi-Agent Orchestration.
- **Architecture & Practices**: Clean Architecture (Domain, Data, Presentation with 0 Flutter imports in Domain), Domain-Driven Design (DDD), Event-Driven Architecture, Test-Driven Development (TDD), Repository Pattern, SOLID Principles, Automated Testing (Unit, Integration, Widget).

---

## ENGINEERING EXPERIENCE

### **Founder & Lead Engineer** · WhatsUnity
*09/2024 – Present* | Flutter, Dart 3, Appwrite Cloud & Self-Hosted, SQLite Master, Telegram MTProto (TDLib), Cloudflare R2, Shorebird OTA, Docker, Clean Architecture, BLoC
- **Offline-First SQLite Master Architecture**: Architected an enterprise offline-first mobile operating system where all client mutations commit immediately to local SQLite (`sync_state = 'dirty'`) delivering zero-latency optimistic UI synchronization, backed by background sync workers with Last-Write-Wins (LWW) conflict resolution and Dead Letter Queue (DLQ) resurrection with 48h TTL pruning.
- **Role Reconciliation & Offline Security**: Implemented deterministic pre-sync role reconciliation handshakes on reconnect, dynamic 2-minute offline guards, automated SQLite table purges on role demotion across 24+ security and maintenance tables, and outbound queue pruning to prevent 401/403 retry loops.
- **Polymorphic Dual Messaging Engine**: Decoupled community chat transport into Appwrite Realtime (WebSockets) for premium tiered estates and Telegram MTProto (TDLib) with bounded in-memory pagination (80-message windowing), scroll offset anchoring, and cinematic 2FA authentication, slashing cloud database costs to $0 for budget communities.
- **Cryptographic Offline Perimeter Security**: Engineered a 4-tier security suite (Gatekeeper, Mobile Patrol, Security Supervisor, Head of Security) with sub-50ms offline HMAC-signed QR visitor pass verification, automated vehicle overstay alerts, NFC patrol checkpoint logging, and unified incident dispatch.
- **Direct-to-Edge Media & Performance**: Designed a zero-proxy storage pipeline leveraging Cloudflare R2 and short-lived pre-signed URLs from Appwrite Edge Functions for voice notes with waveforms and high-res media; added progressive decoding and lifecycle-based RAM bitmap eviction.
- **Dockerized Testing Sandboxes**: Orchestrated Docker container environments to host local Appwrite & Supabase testing sandboxes, validate database schema migrations, and execute automated regression test suites.
- **Build Velocity & OTA**: Eliminated `build_runner` dependencies by leveraging native Dart 3 sealed classes and pattern matching, cutting build times while maintaining strict type safety; integrated Shorebird for instant over-the-air code pushes and distributed multi-platform releases on Android and PWA Web.

### **Founder & Sole Engineer** · FlashApply
*06/2026 – 07/2026* | TypeScript, React, Chrome Extension (MV3), Chrome DevTools Protocol (CDP), Gemini Flash, Groq, Firestore, Firebase Auth, New Relic
- **Multi-Provider AI Orchestration**: Engineered a 6-provider AI orchestration layer with automatic waterfall failover across Groq (Llama 3.3 70B), Google Gemini 2.0 Flash, OpenRouter, Local Ollama, and on-device Gemini Nano as a zero-failure fallback.
- **CDP Browser Automation**: Architected an intelligent browser automation extension utilizing CDP (Chrome DevTools Protocol) with organic event dispatching, contextual form filling, and resilient multi-step DOM workflows.
- **Dual-Storage & Web Store Releases**: Architected a dual-storage split (flat Firestore schema with 1:1 SQL mapping + `chrome.storage.local` for credentials) and shipped 7 versioned Chrome Web Store releases with PII-scrubbed New Relic telemetry.

---

## ACADEMIC CAPSTONE PROJECT

### **Medicare** — Full-Stack Healthcare Platform
*Computer Science Diploma Graduation Project · Cairo University*  
*08/2024 – 01/2026* | React, Spring Boot, Java, MySQL, Spring Security, JWT, Clean Architecture, REST APIs
- Designed and engineered a full-stack medical services and clinic management platform as the capstone graduation project for the Computer Science Diploma at Cairo University.
- Architected high-throughput RESTful backend APIs in Spring Boot, enforcing Clean Architecture boundaries and decoupling business domain entities from database persistence.
- Implemented Spring Security with role-based access control (Doctor, Patient, Clinic Administrator), stateless JWT token lifecycle management, and secure password hashing.
- Designed relational MySQL schemas with optimized B-tree indexing and query execution strategies for concurrent appointment scheduling, patient queues, and electronic medical records.
- Developed a modern, responsive web application using React, implementing component-driven state management, real-time appointment status workflows, and interactive doctor filtering.
- Authored comprehensive unit and integration test suites, ensuring high uptime, modular maintainability, and clean domain isolation.

---

## EARLIER PROJECTS

### **Flutter Engineer** · Phone Dialer App
*11/2021 – 11/2022* | Flutter, Dart, Platform Channels (Android)
- Engineered a full-featured Android dialer replacement; implemented Platform Channels to intercept call states, apply live UI theming, and expose native telephony APIs to Dart.
- Built a "Call Reason" feature enabling callers to attach a purpose before ringing — shown to the receiver to help them decide to accept or decline.
- Integrated Facebook Graph API to fetch friend-list profile pictures and map them onto contacts for a unified social-contact experience.

### **Flutter Engineer** · Mokhalafaty — Traffic Violations App
*03/2024 – 05/2024* | Flutter, Dart, JavaScript
- Built an Android app that stores license data locally and scrapes the traffic authority portal to extract violation records, eliminating repetitive data entry.

---

## EDUCATION

### **Diploma in Computer Science** · Cairo University
*08/2024 – 01/2026* | **GPA**: 3.2 / 4.0
- **Graduation Project**: **Medicare** — Capstone Full-Stack Medical Services Platform (React, Spring Boot, MySQL, Spring Security).

### **Bachelor's Degree in Construction & Building** · Arab Academy for Science, Technology & Maritime Transport (AASTMT — ABET Accredited)
*01/2009 – 02/2015* | **GPA**: 2.4 / 4.0

---

## LANGUAGES
- **Arabic**: Native
- **English**: Advanced / Professional
