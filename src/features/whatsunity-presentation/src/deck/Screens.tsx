import { motion } from "motion/react";

const logoImg = "/assets/projects/Whatsunity/logo.png";
const G = "#00e28a";

/* ---- Real WhatsUnity app screenshots (reference catalog) ---- */
const BASE = "/assets/projects/Whatsunity/catalog/";
export const SHOTS = {
  home: BASE + "Home_screen_community.png",
  chatting: BASE + "chatting.png",
  votting: BASE + "community_-_votting.png",
  newReport: BASE + "creatting-new_report.png",
  qr: BASE + "gatekeeper_pass_verification_qr.png",
  overstayed: BASE + "gatekeeper_overstayed_stream.png",
  logbook: BASE + "gatekeeper_activity_logbook.png",
  supervisorHome: BASE + "supervisor_portal_home.png",
  controlRoom: BASE + "supervisor_incident_control_room.png",
  shiftRoster: BASE + "supervisor_shift_roster_live.png",
  technicianOrders: BASE + "technician_portal_assigned_orders.png",
  patrolHub: BASE + "patrol%20hub%20ar%20(4).png",
  chiefTeams: BASE + "chief_engineer_teams_capacity_workload.png",
} as const;

/** Displays a real portrait app screenshot filling the phone screen. */
export function AppShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full bg-[#05070a] overflow-hidden flex items-center justify-center" dir="ltr">
      <img
        src={src}
        alt={alt}
        className="block h-full w-full object-cover object-top select-none pointer-events-none"
        loading="eager"
      />
    </div>
  );
}

function StatusBar({ tint = "#eef2f6" }: { tint?: string }) {
  return (
    <div
      dir="ltr"
      className="flex items-center justify-between px-5 pt-2 text-[9px] font-medium"
      style={{ color: tint, fontFamily: "var(--font-mono)" }}
    >
      <span>9:41</span>
      <span className="tracking-widest">WHATSUNITY</span>
      <span>5G ▮▮▮</span>
    </div>
  );
}

/* Slide 1 — Branded splash (Arabic) */
export function TitleScreen() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-[#05070a] p-6 text-center" dir="rtl">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: `radial-gradient(circle at 50% 30%, ${G}22, transparent 60%)` }}
      />
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        className="relative flex h-20 w-20 items-center justify-center rounded-2xl overflow-hidden p-2"
        style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(0, 226, 138, 0.3)", boxShadow: `0 0 40px ${G}44` }}
      >
        <img src={logoImg} alt="WhatsUnity" className="h-full w-full object-contain" />
      </motion.div>
      <p dir="ltr" className="relative mt-5 text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
        Whats<span style={{ color: "#00e28a" }}>Unity</span>
      </p>
      <p className="relative mt-1 text-[10px] tracking-[0.25em] text-white/50" style={{ fontFamily: "var(--font-mono)" }}>
        COMPOUND OS
      </p>
    </div>
  );
}

/* COLD OPEN — a lifeless "operations only" app that keeps auto-tapping */
export function BoringOpsScreen() {
  const rows = ["أمر عمل #4471", "سجل الأصول · مضخة 3", "نموذج امتثال", "فاتورة مورّد", "قراءة عدّاد", "قائمة تدقيق"];
  return (
    <div className="flex h-full w-full flex-col bg-[#161a1e] grayscale" dir="rtl">
      <div className="flex items-center justify-between border-b border-white/5 px-4 pt-6 pb-3">
        <span className="text-[11px] font-semibold text-white/50">وحدة تحكم المرافق</span>
        <span dir="ltr" className="text-[9px] text-white/25" style={{ fontFamily: "var(--font-mono)" }}>
          v2.1
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1 px-3 py-3">
        {["الأصول", "الأوامر", "التقارير", "الموردون", "العدّادات", "السجلات"].map((t) => (
          <div key={t} className="rounded bg-white/[0.04] py-3 text-center text-[8px] text-white/40">
            {t}
          </div>
        ))}
      </div>
      <div className="relative flex-1 space-y-[6px] px-3">
        {rows.map((r) => (
          <div
            key={r}
            className="flex items-center justify-between rounded bg-white/[0.03] px-3 py-2 text-[9px] text-white/40"
          >
            <span>{r}</span>
            <span className="text-white/20">‹</span>
          </div>
        ))}
        {/* Auto-tapping cursor drifting over the dull rows */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute z-30 h-4 w-4 rounded-full bg-white/80 shadow-lg"
          animate={{ top: ["12%", "40%", "20%", "58%", "12%"], left: ["30%", "60%", "45%", "35%", "30%"], scale: [1, 0.7, 1, 0.7, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="px-4 py-2 text-center text-[8px] text-white/25">لا إشعارات · لا نشاط</div>
    </div>
  );
}

/* THE JOKE — catastrophic old WhatsApp group chat (Arabic) */
export function PainScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0a1014]" dir="rtl">
      <StatusBar tint="#8aa0a8" />
      <div className="border-b border-white/5 px-4 py-2 text-[11px] font-semibold text-white/80">
        مجموعة الكمبوند · 428 عضو
      </div>
      <div className="flex-1 space-y-2 overflow-hidden px-3 py-3">
        {["تكييف بيسرّب في عمارة 34 شقة 2 🔧", "الحارس منسجّلش الزائر…", "@admin التذكرة راحت فين تاني؟", "تطبيق البوابة وقع تاني 😤"].map(
          (t, idx) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + idx * 0.12 }}
              className="max-w-[82%] rounded-2xl rounded-tr-sm bg-[#12303a] px-3 py-2 text-[10px] leading-snug text-white/80"
            >
              {t}
            </motion.div>
          ),
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="mx-auto mt-3 rounded-lg border border-[#ff4d5e]/40 bg-[#ff4d5e]/10 px-3 py-2 text-center text-[9px] font-semibold text-[#ff8a94]"
        >
          ⚠ انقطع الاتصال — لم يتم إرسال الرسالة
        </motion.div>
      </div>
    </div>
  );
}

/* White-label editions */
export function ScalingScreen() {
  const brands = [
    ["مُدن", "#00e28a"],
    ["جنّة", "#8b7cff"],
    ["بالم هيلز", "#ff9f43"],
    ["سوديك", "#4dd0ff"],
  ];
  return (
    <div className="flex h-full w-full flex-col bg-[#05070a]" dir="rtl">
      <StatusBar />
      <p className="px-4 pt-3 text-[11px] font-semibold text-white/70">مشاريع بعلامتها الخاصة</p>
      <div className="grid flex-1 grid-cols-2 gap-2 p-3">
        {brands.map(([name, c], idx) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + idx * 0.12 }}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] py-4"
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl text-[13px] font-bold"
              style={{ background: `${c}22`, color: c as string, fontFamily: "var(--font-display)" }}
            >
              {(name as string)[0]}
            </div>
            <span className="text-[9px] font-medium text-white/70">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* Launch plan & pricing */
/* Launch plan & pricing */
export function FinanceScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#05070a]" dir="rtl">
      <StatusBar />
      <div className="flex flex-1 flex-col justify-center gap-2.5 px-3 py-2">
        {/* Tier Cards */}
        <div className="space-y-2">
          {/* Community Standard */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-xl border p-2.5"
            style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-white/90" style={{ fontFamily: "var(--font-display)" }}>
                باقة الكمبوند المتكاملة
              </span>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[8px] font-mono text-white/70">
                Community
              </span>
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-base font-extrabold text-emerald-400" style={{ fontFamily: "var(--font-display)" }}>
                اشتراك سنوي شامل
              </span>
              <span className="text-[8px] text-white/50">/ للوحدة السكنية</span>
            </div>
            <ul className="mt-1.5 space-y-1 text-[8px] text-white/60">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>عائلتك بالكامل مشمولة دون رسوم إضافية</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>بوابات QR أوفلاين 100% وأجهزة الحراس</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>حوكمة الصيانة وإدارة الأدوار التشغيلية التسعة</span>
              </li>
            </ul>
          </motion.div>

          {/* Enterprise White-Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="relative rounded-xl border p-2.5"
            style={{ borderColor: `${G}66`, background: `${G}0f` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                باقة المطور والعلامة البيضاء
              </span>
              <span className="rounded-full px-2 py-0.5 text-[8px] font-bold" style={{ background: G, color: "#04140c" }}>
                Enterprise
              </span>
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-base font-extrabold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Custom Brand & Scale
              </span>
            </div>
            <ul className="mt-1.5 space-y-1 text-[8px] text-white/70">
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>تطبيق مخصص بالكامل باسم وهوية المطور</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>نشر رسمي على متاجر App Store و Google Play</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>لوحة تحكم مركزية لإدارة مجمعات متعددة</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 14-day Pilot Guarantee */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.65 }}
          className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2 text-center"
        >
          <span className="text-[9px] font-bold text-emerald-300 block" style={{ fontFamily: "var(--font-display)" }}>
            ⚡ 14 يومًا تجربة تشغيلية حية مجانًا
          </span>
          <p className="mt-0.5 text-[7.5px] text-white/50">
            اختبار ميداني كامل للبوابات وتطبيق السكان قبل أي التزام مالي
          </p>
        </motion.div>
      </div>
    </div>
  );
}
