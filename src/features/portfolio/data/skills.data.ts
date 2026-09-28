import type { Skill } from "../domain/entities/Skill";

export const skills: Skill[] = [
  {
    name: "Flutter",
    category: "Mobile",
    blurb: "Cross-platform UI at native fidelity.",
    detail:
      "My primary mobile framework. I ship single-codebase apps for iOS and Android with native-feeling motion, gestures, and 60fps lists — no compromises on UX.",
    highlights: [
      "Custom design systems & theming",
      "Offline-first SQLite Master & Shorebird OTA",
      "Adaptive layouts for phone & tablet",
    ],
  },
  {
    name: "Dart",
    category: "Mobile",
    blurb: "Strongly typed, async-friendly.",
    detail:
      "The language behind every Flutter project I ship. Sound null-safety, isolates, and streams let me model complex async flows without fighting the type system.",
    highlights: [
      "Null-safe domain modeling",
      "Streams, Futures & isolates",
      "Zero-codegen: Dart 3 sealed classes & pattern matching",
    ],
  },
  {
    name: "Spring Boot",
    category: "Backend",
    blurb: "Production-grade Java APIs.",
    detail:
      "My go-to for serious backends. Clean REST APIs, JPA-driven persistence, JWT auth, and a service layer designed to stay testable as the product grows.",
    highlights: [
      "REST APIs with Spring Web",
      "JPA / Hibernate & PostgreSQL",
      "Spring Security + JWT",
    ],
  },
  {
    name: "React",
    category: "Frontend",
    blurb: "Composable interfaces and SSR.",
    detail:
      "Where the web side of my stack lives. Component-driven UIs, TanStack Router + Query for data, and a strong eye for motion and micro-interactions.",
    highlights: [
      "TanStack Start / Router / Query",
      "Tailwind + design tokens",
      "Framer Motion choreography",
    ],
  },
  {
    name: "Clean Architecture",
    category: "Architecture",
    blurb: "Domain-first, testable layers.",
    detail:
      "The discipline that ties everything together. Domain, use-cases, data, presentation — each layer can evolve on its own without rewriting the rest.",
    highlights: [
      "Pure domain entities",
      "Repository pattern at the seams",
      "Framework-agnostic use-cases",
    ],
  },
  {
    name: "BLoC / Cubit",
    category: "Mobile",
    blurb: "Predictable Flutter state.",
    detail:
      "How I keep Flutter UIs predictable. Events in, states out — easy to test, easy to debug, and a clean boundary between business logic and widgets.",
    highlights: [
      "Event → state pipelines",
      "Hydrated state persistence",
      "BlocObserver for traceable flows",
    ],
  },
  {
    name: "AI Engineering",
    category: "AI & Agents",
    blurb: "Cursor, Antigravity & Claude LLMs.",
    detail:
      "Engineering autonomous software development workflows with Cursor, Antigravity, and Claude models (Opus 4.8 / 5 / 5.5 & Sonnet). Driving rapid full-stack scaffolding, automated test generation, and pair-programming with deep contextual awareness and rigorous verification.",
    highlights: [
      "Claude models (Opus 4.8, 5, 5.5 & Sonnet)",
      "Cursor & Antigravity IDE agent orchestration",
      "Autonomous plan-execute-verify task loops",
    ],
  },
  {
    name: "MCP & Agent Skills",
    category: "AI & Agents",
    blurb: "Model Context Protocol & Markdown Rules.",
    detail:
      "Architecting extensible tool ecosystems and deterministic workflows for autonomous agents. Building Model Context Protocol (MCP) servers (tools, memory, live databases) and orchestrating structured agent behaviors, workflows, and skills entirely via version-controlled Markdown files (SKILL.md, .agents/, rules/*.md).",
    highlights: [
      "Custom MCP Tool Servers (Eager & Lazy loading)",
      "Executable SKILL.md workflow playbooks",
      "Deterministic Markdown Agent Rules (.agents/ & rules/*.md)",
    ],
  },
];
