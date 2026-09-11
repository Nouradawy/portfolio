import { motion } from "motion/react";
import logoImg from "../assets/logo.png";

const G = "#00e28a";
const CY = "#38bdf8";
const VI = "#8b7cff";

interface DiagramProps {
  locale?: string;
}

/* ───────────────────────── shared primitives ───────────────────────── */

/** A database "cylinder" glyph that adapts to light and dark themes. */
function Cylinder({ color, size = 72 }: { color: string; size?: number }) {
  const w = size;
  const h = size * 1.16;
  return (
    <svg width={w} height={h} viewBox="0 0 64 74" fill="none" className="shrink-0 drop-shadow-sm">
      <path
        d="M6 14v46a26 11 0 0 0 52 0V14"
        fill={`${color}18`}
        stroke={`${color}bb`}
        strokeWidth="2"
      />
      <ellipse cx="32" cy="14" rx="26" ry="11" fill={`${color}30`} stroke={color} strokeWidth="2" />
      <ellipse cx="32" cy="34" rx="26" ry="11" fill="none" stroke={`${color}66`} strokeWidth="1.5" />
      <ellipse cx="32" cy="52" rx="26" ry="11" fill="none" stroke={`${color}44`} strokeWidth="1.5" />
    </svg>
  );
}

/** Framework chip that is readable in both light and dark modes. */
function Chip({ children, color = "#64748b", delay = 0 }: { children: React.ReactNode; color?: string; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      dir="ltr"
      className="rounded-full border px-3.5 py-1 text-xs sm:text-sm font-bold tracking-wide shadow-sm backdrop-blur-sm"
      style={{
        fontFamily: "var(--font-mono)",
        color: color,
        borderColor: `${color}44`,
        background: `${color}14`,
      }}
    >
      {children}
    </motion.span>
  );
}

/* ───────────────────────── 1 · Architecture map ───────────────────────── */
export function ArchitectureDiagram({ locale = "ar" }: DiagramProps) {
  const isRtl = locale === "ar";
  const node = { x: 50, y: 44 };

  const dbs = [
    {
      x: 50,
      y: 12,
      color: G,
      label: isRtl ? "القاعدة المشتركة" : "Shared Database",
      sub: isRtl ? "بيانات عامة ودليل الكمبوند" : "Global Master Schema",
      delay: 0.7,
    },
    {
      x: 14,
      y: 84,
      color: CY,
      label: isRtl ? "كمبوند أ" : "Compound Alpha",
      sub: isRtl ? "قاعدة مخصّصة ومعزولة" : "Dedicated DB Partition",
      delay: 1.15,
    },
    {
      x: 50,
      y: 88,
      color: VI,
      label: isRtl ? "كمبوند ب" : "Compound Beta",
      sub: isRtl ? "قاعدة مخصّصة ومعزولة" : "Dedicated DB Partition",
      delay: 1.6,
    },
    {
      x: 86,
      y: 84,
      color: "#f59e0b",
      label: isRtl ? "كمبوند ج" : "Compound Gamma",
      sub: isRtl ? "قاعدة مخصّصة ومعزولة" : "Dedicated DB Partition",
      delay: 2.05,
    },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 lg:gap-6 py-4">
      {/* Canvas */}
      <div
        className="relative w-full max-w-5xl flex-1 min-h-[340px] lg:min-h-[400px] mx-auto"
        dir="ltr"
      >
        {/* Connectors */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          {dbs.map((d) => (
            <motion.line
              key={d.label}
              x1={node.x}
              y1={node.y}
              x2={d.x}
              y2={d.y}
              stroke={d.color}
              strokeWidth="2.2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ delay: d.delay + 0.1, duration: 0.6, ease: "easeInOut" }}
            />
          ))}
        </svg>

        {/* Travelling pulses along each link */}
        {dbs.map((d) => (
          <motion.span
            key={d.label + "-pulse"}
            aria-hidden
            className="absolute h-2.5 w-2.5 rounded-full pointer-events-none shadow-md"
            style={{ background: d.color, boxShadow: `0 0 12px ${d.color}` }}
            initial={{ opacity: 0, left: `${d.x}%`, top: `${d.y}%` }}
            animate={{
              opacity: [0, 1, 1, 0],
              left: [`${d.x}%`, `${node.x}%`],
              top: [`${d.y}%`, `${node.y}%`],
            }}
            transition={{ delay: d.delay + 0.7, duration: 1.4, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
          />
        ))}

        {/* Central Gateway Node */}
        <div
          className="absolute z-10"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 140, damping: 15 }}
            className="flex flex-col items-center gap-1.5 lg:gap-2 rounded-2xl lg:rounded-3xl border-2 border-emerald-500/40 bg-white/95 px-6 py-3 lg:px-8 lg:py-4 shadow-lg backdrop-blur-md dark:border-emerald-500/40 dark:bg-[#081310] dark:shadow-[0_0_50px_rgba(0,226,138,0.25)]"
          >
            <div
              className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-xl lg:rounded-2xl overflow-hidden p-1 bg-slate-100 border border-slate-200 dark:bg-white/[0.06] dark:border-emerald-500/40"
            >
              <img src={logoImg} alt="WhatsUnity" className="h-full w-full object-contain" />
            </div>
            <span dir="ltr" className="text-base lg:text-xl font-black text-slate-900 dark:text-white" style={{ fontFamily: "var(--font-display)" }}>
              Whats<span style={{ color: "#00e28a" }}>Unity</span>
            </span>
            <span className="text-[10px] lg:text-[11px] font-bold tracking-wider text-slate-500 dark:text-white/60" style={{ fontFamily: "var(--font-mono)" }}>
              {isRtl ? "عقدة البوابة الموحّدة" : "Unified Gateway Node"}
            </span>
          </motion.div>
        </div>

        {/* Databases */}
        {dbs.map((d) => (
          <div
            key={d.label + "-db"}
            className="absolute z-10"
            style={{ left: `${d.x}%`, top: `${d.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: d.delay, type: "spring", stiffness: 150, damping: 16 }}
              className="flex flex-col items-center gap-1"
            >
              <Cylinder color={d.color} size={68} />
              <div className="flex flex-col items-center leading-tight mt-1 text-center">
                <span className="text-xs lg:text-sm font-bold drop-shadow-sm" style={{ color: d.color, fontFamily: isRtl ? "var(--font-display)" : "inherit" }}>
                  {d.label}
                </span>
                <span className="text-[10px] lg:text-[11px] font-semibold text-slate-600 dark:text-white/60">
                  {d.sub}
                </span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Framework Tech Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="flex flex-wrap items-center justify-center gap-2.5 mt-2 lg:mt-4"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <span className="text-xs lg:text-sm font-bold tracking-wider text-slate-600 dark:text-white/60" style={{ fontFamily: "var(--font-mono)" }}>
          {isRtl ? "الإطار التقني المعماري:" : "Architectural Stack:"}
        </span>
        <Chip color="#0284c7" delay={2.55}>Flutter 3.x</Chip>
        <Chip color={G} delay={2.7}>Appwrite Cloud</Chip>
        <Chip color="#8b7cff" delay={2.85}>SQLite Local Master</Chip>
      </motion.div>
    </div>
  );
}

/* ───────────────────────── 2 · Offline-first sync ───────────────────────── */
export function OfflineSyncDiagram({ locale = "ar" }: DiagramProps) {
  const isRtl = locale === "ar";

  const rows = [
    { t: isRtl ? "رسالة دردشة #182" : "Community Chat #182", delay: 0.5, cloudDelay: 2.1 },
    { t: isRtl ? "بلاغ صيانة عاجل" : "Urgent Maintenance #104", delay: 0.75, cloudDelay: 2.35 },
    { t: isRtl ? "تصريح زائر مشفّر" : "Encrypted Visitor QR", delay: 1.0, cloudDelay: 2.6 },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center py-4">
      <div className="flex w-full max-w-5xl flex-col sm:flex-row items-stretch justify-center gap-5 lg:gap-8" dir={isRtl ? "rtl" : "ltr"}>
        {/* Device + local DB Card */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 24 : -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-1 flex-col justify-between gap-3 rounded-2xl lg:rounded-3xl border border-slate-200/90 bg-white p-5 shadow-md backdrop-blur-md dark:border-white/10 dark:bg-slate-950/70 dark:shadow-none"
        >
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-3">
              <span className="text-base font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: "var(--font-display)" }}>
                {isRtl ? "الجهاز · SQLite Master" : "Device · SQLite Master"}
              </span>
              <Cylinder color="#0284c7" size={32} />
            </div>

            <div className="mt-3 space-y-2.5">
              {rows.map((r) => (
                <motion.div
                  key={r.t}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: r.delay }}
                  className="flex items-center justify-between rounded-xl border border-amber-500/30 bg-amber-500/10 px-3.5 py-2.5 text-xs lg:text-sm font-semibold text-slate-900 dark:text-white"
                >
                  <span>{r.t}</span>
                  <span
                    className="flex items-center gap-1 text-[11px] font-bold text-amber-700 dark:text-amber-400"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    ⏳ {isRtl ? "محلي (0ms)" : "Local (0ms)"}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-slate-100 dark:bg-white/5 p-2.5 text-center text-[11px] font-bold text-slate-600 dark:text-slate-400 wu-font-mono">
            {isRtl ? "استجابة فورية 0ms دون انتظار الشبكة" : "0ms Instant Mutation · Optimistic UI"}
          </div>
        </motion.div>

        {/* Sync Engine Middle Column */}
        <div className="flex flex-1 flex-col items-center justify-center gap-3.5 py-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 140, damping: 15 }}
            className="flex flex-col items-center gap-2 rounded-2xl border-2 border-sky-500/40 bg-sky-500/10 px-6 py-4 shadow-sm backdrop-blur-md dark:border-sky-400/40 dark:bg-sky-950/30"
          >
            <svg
              width="32" height="32" viewBox="0 0 24 24" fill="none"
              className="animate-spin text-sky-600 dark:text-sky-400"
              style={{ animationDuration: "3s" }}
            >
              <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8M20 12a8 8 0 0 1-13.7 5.7L4 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M20 4v4h-4M4 20v-4h4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm lg:text-base font-extrabold text-sky-700 dark:text-sky-300" style={{ fontFamily: "var(--font-display)" }}>
              {isRtl ? "محرّك المزامنة (LWW Sync)" : "Sync Engine (LWW Protocol)"}
            </span>
          </motion.div>

          {/* Connection Status Pill */}
          <div
            className="rounded-full border border-emerald-500/40 bg-emerald-500/15 px-4 py-1.5 text-xs lg:text-sm font-bold text-emerald-700 dark:text-emerald-400 shadow-sm"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {isRtl ? "● مزامنة فورية بالخلفية" : "● Realtime Background Sync"}
          </div>

          {/* Version Compare Indicator */}
          <div
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            style={{ fontFamily: "var(--font-mono)" }}
            dir="ltr"
          >
            <span className="text-amber-600 dark:text-amber-400">v.local #42</span>
            <span className="text-base text-sky-600 dark:text-sky-400">⇄</span>
            <span className="text-emerald-600 dark:text-emerald-400">v.cloud #45</span>
          </div>
        </div>

        {/* Cloud Storage Card */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? -24 : 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-1 flex-col justify-between gap-3 rounded-2xl lg:rounded-3xl border border-emerald-500/30 bg-emerald-50/70 p-5 shadow-md backdrop-blur-md dark:border-emerald-500/30 dark:bg-slate-950/70 dark:shadow-none"
        >
          <div>
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
              <span className="text-base font-extrabold text-emerald-800 dark:text-emerald-300" style={{ fontFamily: "var(--font-display)" }}>
                Appwrite Cloud Master
              </span>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-emerald-600 dark:text-emerald-400">
                <path d="M6 17a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A4 4 0 0 1 18 17H6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="mt-3 space-y-2.5">
              {rows.map((r) => (
                <motion.div
                  key={r.t}
                  initial={{ opacity: 0.3, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: r.cloudDelay }}
                  className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-3.5 py-2.5 text-xs lg:text-sm font-semibold text-slate-900 dark:text-white"
                >
                  <span>{r.t}</span>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400" style={{ fontFamily: "var(--font-mono)" }}>
                    {isRtl ? "✓ مُزامَن بالكامل" : "✓ Fully Synced"}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-emerald-500/10 p-2.5 text-center text-[11px] font-bold text-emerald-700 dark:text-emerald-400 wu-font-mono">
            {isRtl ? "حل التعارض تلقائيًا بآخر كتابة فائزة LWW" : "Deterministic LWW Conflict Resolution"}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ───────────────────────── 3 · Encryption + hacker Q&A ───────────────────────── */
export function EncryptionDiagram({ locale = "ar" }: DiagramProps) {
  const isRtl = locale === "ar";

  const pipeline = [
    {
      title: isRtl ? "في السكون" : "At Rest",
      sub: "Appwrite · AES-256",
      note: isRtl ? "الأسماء · الأرقام · تصاريح الزوار" : "Resident Profiles · Phone Numbers · Passes",
      icon: "🔒",
      color: "#8b7cff",
      delay: 0.3,
    },
    {
      title: isRtl ? "أثناء النقل" : "In Transit",
      sub: "HTTPS · TLS 1.3 / WSS",
      note: isRtl ? "تشفير فوري خلال أجزاء من الثانية" : "Sub-millisecond SSL transport encryption",
      icon: "🛡",
      color: "#0284c7",
      delay: 0.7,
    },
    {
      title: isRtl ? "على الجهاز" : "On Device",
      sub: "SQLite · Hardware Encrypted",
      note: isRtl ? "المفاتيح في مخزن آمن بالعتاد" : "Keys isolated in Secure Enclave / KeyStore",
      icon: "🔑",
      color: G,
      delay: 1.1,
    },
  ];

  const qas = [
    {
      q: isRtl ? "ماذا لو اختُرِق الخادم السحابي؟" : "What if the cloud database is breached?",
      a: isRtl
        ? "جميع الأسماء والأرقام والبيانات الحساسة مخزنة مشفرة بمفاتيح لا يمكن قراءتها."
        : "All tenant records and PII are encrypted at rest with zero-knowledge keys, leaving attackers with useless cipher blocks.",
      demo: "##### · ##### · ENCRYPTED_CIPHER",
      delay: 1.6,
    },
    {
      q: isRtl ? "وماذا لو سُرِق جهاز البوابة؟" : "What if a gatekeeper tablet is stolen?",
      a: isRtl
        ? "قاعدة SQLite مقفلة بالعتاد وتُفتح فقط عبر التوثيق البيومتري والتصريح الحي."
        : "The local database requires hardware biometric unlock and immediately purges keys upon unauthorized tampering.",
      demo: "🔒 HARDWARE_KEYSTORE_LOCKED",
      delay: 2.0,
    },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 py-4">
      {/* 3-Stage Pipeline */}
      <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 gap-3.5" dir={isRtl ? "rtl" : "ltr"}>
        {pipeline.map((s) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: s.delay }}
            className="flex flex-col justify-between gap-2.5 rounded-2xl border border-slate-200 bg-white p-5 shadow-md backdrop-blur-md dark:border-white/10 dark:bg-slate-950/70 dark:shadow-none"
            style={{ borderTop: `3px solid ${s.color}` }}
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl text-base" style={{ background: `${s.color}22`, color: s.color }}>
                {s.icon}
              </span>
              <span className="text-base font-extrabold text-slate-900 dark:text-white" style={{ fontFamily: "var(--font-display)" }}>
                {s.title}
              </span>
            </div>
            <span dir="ltr" className={`text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 ${isRtl ? "text-right" : "text-left"}`} style={{ fontFamily: "var(--font-mono)" }}>
              {s.sub}
            </span>
            <span className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
              {s.note}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Security Threat Scenarios Q&A */}
      <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5" dir={isRtl ? "rtl" : "ltr"}>
        {qas.map((c) => (
          <motion.div
            key={c.q}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: c.delay, type: "spring", stiffness: 130, damping: 17 }}
            className="flex flex-col gap-2.5 rounded-2xl border border-red-300 bg-red-50/80 p-5 shadow-sm dark:border-red-500/30 dark:bg-red-950/20"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">🛡️</span>
              <span className="text-sm lg:text-base font-extrabold text-red-900 dark:text-red-200" style={{ fontFamily: "var(--font-display)" }}>
                {c.q}
              </span>
            </div>
            <p className="text-xs lg:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
              {c.a}
            </p>
            <div
              dir="ltr"
              className="rounded-xl bg-slate-900 px-3.5 py-2 text-center text-xs font-bold tracking-wider text-emerald-400 dark:bg-black/60"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {c.demo}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────────── 4 · Tenancy isolation ───────────────────────── */
export function TenancyDiagram({ locale = "ar" }: DiagramProps) {
  const isRtl = locale === "ar";

  const teams = [
    { name: isRtl ? "كمبوند الفا" : "Compound Alpha", color: G },
    { name: isRtl ? "كمبوند بيتا" : "Compound Beta", color: CY },
    { name: isRtl ? "كمبوند جاما" : "Compound Gamma", color: VI },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 py-4">
      {/* Isolated Compound Tenant Boxes */}
      <div className="grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5" dir={isRtl ? "rtl" : "ltr"}>
        {teams.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + idx * 0.25, type: "spring", stiffness: 150, damping: 16 }}
            className="relative flex h-[150px] lg:h-[165px] flex-col items-center justify-center gap-2.5 rounded-3xl border-2 border-dashed bg-white shadow-md backdrop-blur-md dark:bg-slate-950/70 dark:shadow-none"
            style={{ borderColor: `${t.color}66` }}
          >
            <span
              className="absolute -top-3 rounded-full px-3 py-0.5 text-[10px] font-extrabold shadow-sm bg-slate-900 text-white dark:bg-[#081310]"
              style={{ color: t.color, fontFamily: "var(--font-mono)" }}
            >
              TENANT ISOLATION
            </span>
            <span className="text-base lg:text-lg font-black text-slate-900 dark:text-white" style={{ fontFamily: "var(--font-display)" }}>
              {t.name}
            </span>
            <div className="flex gap-2">
              {[0, 1, 2].map((k) => (
                <span
                  key={k}
                  className="h-7 w-7 lg:h-8 lg:w-8 rounded-full border shadow-inner"
                  style={{ background: `${t.color}22`, borderColor: `${t.color}55` }}
                />
              ))}
            </div>
            <span
              className="text-[11px] font-bold text-red-600 dark:text-red-400"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {isRtl ? "🚫 بيانات وصلاحيات معزولة تمامًا" : "🚫 100% Isolated Data Boundary"}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Registration Guard Flow */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        className="flex w-full max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-5 lg:px-8 lg:py-4 shadow-md backdrop-blur-md dark:border-white/10 dark:bg-slate-950/70 dark:shadow-none"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-1.5 text-xs lg:text-sm font-extrabold text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            {isRtl ? "مستخدم جديد" : "New User Registration"}
          </span>
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400" style={{ fontFamily: "var(--font-mono)" }}>
            {isRtl ? "دور: زائر غير موثّق" : "Role: Unverified Guest"}
          </span>
        </div>

        <span className="text-xl font-bold text-slate-400 dark:text-white/40">
          {isRtl ? "←" : "→"}
        </span>

        <div className="flex flex-col items-center gap-1">
          <span className="rounded-xl border border-amber-400/50 bg-amber-500/15 px-3.5 py-1.5 text-xs lg:text-sm font-extrabold text-amber-800 dark:text-amber-300">
            {isRtl ? "بوابة التحقق والاعتماد" : "Admin KYC Approval Gate"}
          </span>
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400" style={{ fontFamily: "var(--font-mono)" }}>
            {isRtl ? "موافقة إدارة الكمبوند الرسمية" : "Verified by Compound Admin"}
          </span>
        </div>

        <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
          {isRtl ? "←" : "→"}
        </span>

        <div className="flex flex-col items-center gap-1">
          <span className="rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-3.5 py-1.5 text-xs lg:text-sm font-extrabold text-emerald-800 dark:text-emerald-300">
            {isRtl ? "عضو موثّق بالكمبوند" : "Verified Compound Resident"}
          </span>
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400" style={{ fontFamily: "var(--font-mono)" }}>
            {isRtl ? "صلاحيات كاملة بحسب الدور" : "Granular RBAC Access"}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
