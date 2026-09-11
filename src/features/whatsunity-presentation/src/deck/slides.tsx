import type { ReactNode } from "react";
import logoImg from "../assets/logo.png";
import {
  TitleScreen,
  PainScreen,
  ScalingScreen,
  FinanceScreen,
  BoringOpsScreen,
  AppShot,
  SHOTS,
} from "./Screens";
import {
  ArchitectureDiagram,
  OfflineSyncDiagram,
  EncryptionDiagram,
  TenancyDiagram,
} from "./ArchScreens";

export type Slide = {
  id: string;
  kicker: string;
  title: ReactNode;
  /** Narration — revealed word-by-word like natural speech. */
  lead: string;
  points: { label: string; value?: string; danger?: boolean }[];
  screen: ReactNode;
  glow: string;
  align: "left" | "right";
  /** px width the phone morphs to on this slide. */
  phoneWidth?: number;
  /** Two-phone comparison slide, or a full-stage diagram. */
  variant?: "single" | "split" | "stage";
  screenB?: ReactNode;
  labelA?: string;
  labelB?: string;
  /** Descriptions flanking each phone: A=left, B=right. Activates center-phones layout. */
  splitTextA?: ReactNode;
  splitTextB?: ReactNode;
  /** Swap left/right phone order in split layout. */
  swapPhones?: boolean;
  /** Full-stage animated diagram (no phone frame). Set variant to "stage". */
  render?: ReactNode;
};

const G = "#00e28a";

export const slides: Slide[] = [
  {
    id: "intro",
    kicker: "منصّة B2B · للمجتمعات السكنية المسوّرة",
    title: (
      <>
        <span dir="ltr" className="inline-block">WhatsUnity</span>
        <br />
        <span style={{ color: G }}>نظام تشغيل الكمبوند.</span>
      </>
    ),
    lead: "تخيّل مجمّعًا سكنيًا نابضًا بالحياة يُدار من تطبيق واحد. يجمع WhatsUnity المجتمع، والأمن والصلاحيات، والهندسة والصيانة، والحوكمة في مكان واحد — ويعمل حتى دون اتصال بالإنترنت.",
    points: [
      { label: "الكل في واحد", value: "مجتمع · أمن · تشغيل" },
      { label: "يعمل دون إنترنت", value: "بلا توقّف" },
      { label: "34 شاشة", value: "6 أدوار" },
    ],
    screen: <TitleScreen />,
    glow: G,
    align: "left",
    phoneWidth: 380,
  },
  {
    id: "coldopen",
    kicker: "الطريقة القديمة",
    title: (
      <>
        مجرّد إدارة.
        <br />
        <span className="text-muted-foreground">بلا حياة.</span>
      </>
    ),
    lead: "لنعُد خطوة إلى الوراء. قبل WhatsUnity، كان كل تطبيق للكمبوند مجرّد لوحة إدارة جافة — أوامر عمل وسجلات وتقارير. قويّ للفريق، لكن لم يفتحه أيّ ساكن مرّتين.",
    points: [
      { label: "إدارة بحتة", value: "لا روح ولا سبب للعودة" },
      { label: "للموظفين فقط", value: "السكان خارج الصورة" },
    ],
    screen: <BoringOpsScreen />,
    glow: "#5a6472",
    align: "right",
    phoneWidth: 320,
  },
  {
    id: "turn",
    kicker: "هنا يبدأ WhatsUnity",
    title: (
      <>
        فأعطينا الكمبوند
        <br />
        <span style={{ color: G }}>نبضًا حيًّا.</span>
      </>
    ),
    lead: "بدأنا من القلب: خلاصة اجتماعية حيّة. ينشر السكان، ويعلّقون، ويتابعون الأخبار، ويتفاعلون. وفجأة أصبح التطبيق مجتمعًا حقيقيًا أهدأ وأكثر ترابطًا — لا مجرّد أداة.",
    points: [
      { label: "خلاصة اجتماعية", value: "منشورات · تفاعلات · أخبار" },
      { label: "اختصارات الخدمات", value: "من أعلى الشاشة" },
      { label: "تفاعل يومي", value: "سبب لفتح التطبيق" },
    ],
    screen: <AppShot src={SHOTS.home} alt="الصفحة الرئيسية والمجتمع" />,
    glow: G,
    align: "left",
    phoneWidth: 440,
  },
  {
    id: "whatsapp",
    kicker: "…وبالطبع، هل تذكرون واتساب؟",
    title: (
      <>
        من فوضى المجموعة
        <br />
        <span style={{ color: G }}>إلى مجتمع منظّم.</span>
      </>
    ),
    lead: "",
    points: [],
    splitTextA: (
      <div dir="rtl" className="space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="h-6 w-6 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
              <path d="M4 11a8 8 0 1 1 3.2 6.4L4 18l.8-3A7.9 7.9 0 0 1 4 11Z" />
            </svg>
          </div>
          <span className="text-[17px] font-bold text-red-300/80 tracking-wide">مجموعة واتساب</span>
        </div>
        <ul className="space-y-3">
          {[
            "رسائل متداخلة لا تنتهي",
            "إشعارات مزعجة بلا توقّف",
            "القرارات تضيع بين الرسائل",
            "لا أحد يُنظّم ولا أحد يتابع",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-[19px] text-muted-foreground leading-relaxed">
              <span className="text-red-400 font-bold mt-0.5 shrink-0">✗</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
    splitTextB: (
      <div dir="rtl" className="space-y-4">
        <div className="flex items-center gap-2.5">
          <div
            className="h-6 w-6 rounded-lg flex items-center justify-center shrink-0 overflow-hidden p-0.5"
            style={{ background: "rgba(0, 226, 138, 0.15)", border: "1px solid rgba(0, 226, 138, 0.4)" }}
          >
            <img src={logoImg} alt="WhatsUnity" className="h-full w-full object-contain" />
          </div>
          <span className="text-[17px] font-bold tracking-wide" style={{ color: "#00e28a" }}>WhatsUnity</span>
        </div>
        <ul className="space-y-3">
          {[
            "واجهة أنيقة تعكس هوية الكمبوند",
            "شات عام للمجمّع بلا فوضى",
            "شات خاص لجيران العمارة",
            "كل نقاش في مكانه الصحيح",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-[19px] text-secondary-foreground leading-relaxed">
              <span className="font-bold mt-0.5 shrink-0" style={{ color: "#00e28a" }}>✓</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
    screen: <PainScreen />,
    screenB: <AppShot src={SHOTS.chatting} alt="الدردشة المجتمعية في واتس يونيتي" />,
    labelA: "مجموعة واتساب القديمة",
    labelB: "WhatsUnity",
    glow: G,
    align: "left",
    variant: "split",
    phoneWidth: 388,
  },
  {
    id: "votes",
    kicker: "قرارات المجتمع",
    title: (
      <>
        تصويت شفّاف.
        <br />
        <span style={{ color: G }}>قرار جماعي.</span>
      </>
    ),
    lead: "وحين يحين وقت القرار، لا فوضى. تصويت مجتمعي منفصل تمامًا عن الشات: تصوغ السؤال، وتضيف خياراتك، وتحدّد المهلة — وترى النتائج والنِّسَب لحظة بلحظة مع نقاش مصاحب لكل قرار.",
    points: [
      { label: "نتائج مباشرة", value: "نِسَب لحظية" },
      { label: "مهلة مرنة", value: "يوم · 3 · 7 أيام" },
      { label: "نقاش مصاحب", value: "تعليقات لكل قرار" },
    ],
    screen: <AppShot src={SHOTS.votting} alt="التصويت المجتمعي" />,
    glow: G,
    align: "right",
    phoneWidth: 440,
  },
  {
    id: "services",
    kicker: "الخدمات التشغيلية",
    title: (
      <>
        قائمة أنيقة
        <br />
        <span style={{ color: G }}>لكل ما تحتاجه.</span>
      </>
    ),
    lead: "وإذا نظرنا إلى الأعلى، نجد قائمة أنيقة للخدمات: أمن، وخدمات رعاية ونظافة، وصيانة. كل خدمة ببلاغ بضغطة واحدة — دون مكالمة هاتفية ولا مطاردة لأحد. تكتب المشكلة، فيتحرّك البلاغ من تلقاء نفسه.",
    points: [
      { label: "الأمن", value: "الإبلاغ عن الحوادث" },
      { label: "الرعاية", value: "نظافة وكونسيرج" },
      { label: "الصيانة", value: "تذكرة بضغطة" },
    ],
    screen: <AppShot src={SHOTS.newReport} alt="إنشاء بلاغ جديد" />,
    glow: G,
    align: "left",
    phoneWidth: 440,
  },
  {
    id: "concerns",
    kicker: "فصل الاهتمامات",
    title: (
      <>
        مشكلة واحدة.
        <br />
        <span style={{ color: G }}>منظوران مثاليّان.</span>
      </>
    ),
    lead: "",
    points: [],
    swapPhones: true,
    splitTextA: (
      <div dir="rtl" className="space-y-4">
        <div className="flex items-center gap-2.5">
          <div
            className="h-6 w-6 rounded-md flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(145deg,#00e28a,#00a866)" }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" stroke="#04140c" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-[17px] font-bold tracking-wide" style={{ color: "#00e28a" }}>فريق التشغيل</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          يريد نظامًا يُسيطر عليه، لا فوضى رسائل.
        </p>
        <ul className="space-y-3">
          {[
            "قائمة مرتّبة حسب الأولوية",
            "تتبّع كل مهمة لحظة بلحظة",
            "توزيع أوامر العمل بذكاء",
            "إدارة بلا بحث في رسائل",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-[19px] text-secondary-foreground leading-relaxed">
              <span className="font-bold mt-0.5 shrink-0" style={{ color: "#00e28a" }}>›</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
    splitTextB: (
      <div dir="rtl" className="space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="3.5" stroke="white" strokeWidth="1.8"/>
              <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-[17px] font-bold tracking-wide text-foreground/80">الساكن</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          يريد راحة البال، لا إجراءات معقّدة.
        </p>
        <ul className="space-y-3">
          {[
            "يرسل بلاغه بخطوتين فقط",
            "يتابع حالة الإصلاح مباشرة",
            "إشعار فوري عند الحل",
            "يقيّم الخدمة بعد الإنجاز",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-[19px] text-secondary-foreground leading-relaxed">
              <span className="text-white/40 font-bold mt-0.5 shrink-0">›</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
    screen: <AppShot src={SHOTS.newReport} alt="بلاغ الساكن" />,
    screenB: <AppShot src={SHOTS.technicianOrders} alt="أوامر العمل لدى الفني" />,
    labelA: "الساكن",
    labelB: "فريق التشغيل",
    glow: G,
    align: "left",
    variant: "split",
    phoneWidth: 388,
  },
  {
    id: "gate",
    kicker: "البوّاب الذي يعمل دون إنترنت",
    title: (
      <>
        دخول في ثانيتين.
        <br />
        <span style={{ color: G }}>حتى بلا شبكة.</span>
      </>
    ),
    lead: "لننتقل إلى البوابة. تصريح QR مشفّر يتحقّق محليًا من قاعدة بيانات على الجهاز نفسه في أقل من 5 مللي ثانية. انقطع الإنترنت؟ لا مشكلة — البوابة تعمل، والدخول موثوق، وخصوصية الساكن محفوظة بالكامل.",
    points: [
      { label: "دخول QR", value: "2.0 ثانية" },
      { label: "تحقّق محلي", value: "sqflite · <5ms" },
      { label: "خصوصية الساكن", value: "البيانات داخل الكمبوند" },
    ],
    screen: <AppShot src={SHOTS.qr} alt="التحقق من تصريح QR" />,
    glow: G,
    align: "right",
    phoneWidth: 440,
  },
  {
    id: "overstay",
    kicker: "لوحة العمليات المباشرة",
    title: (
      <>
        كل زائر متأخّر
        <br />
        <span style={{ color: "#ff6b78" }}>يُرصد تلقائيًا.</span>
      </>
    ),
    lead: "وعلى شاشة الحارس، يحسب النظام الوقت تلقائيًا. وبمجرّد أن يتجاوز زائرٌ مدّته، تظهر شارة «تجاوز المدة» حمراء ساطعة مع زر معالجة فوري — دون متابعة يدوية، ودون أن يفلت أحد بلا حساب.",
    points: [
      { label: "تجاوز المدة", value: "رصد وحساب تلقائي", danger: true },
      { label: "استعلام بالوحدة", value: "بمجرد كتابة الرقم" },
      { label: "معالجة فورية", value: "بزر واحد" },
    ],
    screen: <AppShot src={SHOTS.overstayed} alt="رصد الزوار المتجاوزين للمدة" />,
    glow: "#ff4d5e",
    align: "left",
    phoneWidth: 440,
  },
  {
    id: "patrol",
    kicker: "الدوريات ونقاط التفتيش",
    title: (
      <>
        دورية تعرف
        <br />
        <span style={{ color: G }}>وجهتها التالية.</span>
      </>
    ),
    lead: "مع الدورية الميدانية مسار نقاط التفتيش القريبة ونسبة إنجاز الجولة، وزرّ استغاثة يُطلق تنبيهًا فوريًا لغرفة العمليات ولجميع الحراس. ويُوجَّه أي بلاغ إلى أقرب دورية بضغطة، مع غرفة توجيه تكتيكي حيّة.",
    points: [
      { label: "مسار التفتيش", value: "نقاط ونسبة إنجاز" },
      { label: "استغاثة SOS", value: "تنبيه فوري للجميع" },
      { label: "توجيه تكتيكي", value: "L1 · L2 · L3" },
    ],
    screen: <AppShot src={SHOTS.patrolHub} alt="مركز عمليات الدورية ونقاط التفتيش" />,
    glow: G,
    align: "right",
    phoneWidth: 440,
  },
  {
    id: "shifts",
    kicker: "الإشراف وهندسة المناوبات",
    title: (
      <>
        فريق كامل،
        <br />
        <span style={{ color: G }}>منظّم كالساعة.</span>
      </>
    ),
    lead: "ومن الأعلى، يدير المشرف كل شيء: جدول انتشار مباشر للحراس على البوابات، وهندسة ثلاث مناوبات، وتقويم حراري شهري يكشف أي نقص في الكادر، وبثّ تعميمات تكتيكية بقوالب جاهزة.",
    points: [
      { label: "انتشار مباشر", value: "الحراس على البوابات" },
      { label: "3 مناوبات", value: "صباحي · مسائي · ليلي" },
      { label: "تقويم حراري", value: "كشف نقص التغطية" },
    ],
    screen: <AppShot src={SHOTS.shiftRoster} alt="جدول الورديات المباشر" />,
    glow: G,
    align: "left",
    phoneWidth: 440,
  },
  {
    id: "engineering",
    kicker: "الهندسة والصيانة والتشغيل",
    title: (
      <>
        كل عطل،
        <br />
        <span style={{ color: G }}>يجد طريقه للحل.</span>
      </>
    ),
    lead: "على مستوى الهندسة: مكتب فرز يوزّع البلاغات حسب التخصص، وأوامر عمل بقطع غيار وأولويات، ومؤشّر حمولة لكل فنّي لاختيار غير المُثقَل. وإذا غاب المنسّق، يتدخّل كبير المهندسين تلقائيًا.",
    points: [
      { label: "فرز بالتخصص", value: "سباكة · كهرباء · تكييف" },
      { label: "حمولة الفنّي", value: "1/6 Cap" },
      { label: "تدخّل تلقائي", value: "عند غياب المنسّق" },
    ],
    screen: <AppShot src={SHOTS.chiefTeams} alt="طاقة الفريق الهندسي وحمولة العمل" />,
    glow: G,
    align: "right",
    phoneWidth: 440,
  },
  {
    id: "governance",
    kicker: "الإدارة والحوكمة",
    title: (
      <>
        رؤية تنفيذية
        <br />
        <span style={{ color: G }}>كاملة للمجمّع.</span>
      </>
    ),
    lead: "ومدير المجمّع فوق الجميع: ملخّص عمليات يومي، ورصد لبلاغات الطوارئ SOS الحرجة، ولائحة مخالفات وغرامات معتمدة، وخزينة صيانة مركزية بميزانية وعوائد بنكية وكشوفات مدقّقة ومزامنة لحظية.",
    points: [
      { label: "طوارئ SOS", value: "رصد الحالات الحرجة" },
      { label: "مخالفات وغرامات", value: "لائحة معتمدة" },
      { label: "خزينة مركزية", value: "ميزانية شفّافة" },
    ],
    screen: <AppShot src={SHOTS.supervisorHome} alt="بوابة مدير المجمّع" />,
    glow: G,
    align: "left",
    phoneWidth: 440,
  },
  {
    id: "architecture",
    kicker: "المعمارية · لماذا نحن مختلفون",
    title: (
      <>
        قواعد بيانات تتكامل.
        <br />
        <span style={{ color: G }}>لا تتصادم.</span>
      </>
    ),
    lead: "سرّ WhatsUnity في معماريته: قاعدة بيانات مشتركة تجمع ما يجب أن يُشارَك، وقواعد مخصّصة معزولة لكل كمبوند — كلها تلتقي في عقدة واحدة. هذا الفصل النظيف يمنحنا سهولة وصول وقابلية صيانة نادرة، ويتيح إضافة أي ميزة دون خوف من التعارض أو ضعف الأداء.",
    points: [
      { label: "قاعدة مشتركة", value: "ما يُشارَك بأمان" },
      { label: "قواعد مخصّصة", value: "عزل لكل كمبوند" },
      { label: "الإطار", value: "Flutter · Appwrite" },
    ],
    screen: null,
    render: <ArchitectureDiagram />,
    variant: "stage",
    glow: G,
    align: "left",
  },
  {
    id: "offline",
    kicker: "الأوفلاين أولًا · محرّك المزامنة",
    title: (
      <>
        يعمل دون إنترنت.
        <br />
        <span style={{ color: "#4dd0ff" }}>ويُزامن بذكاء.</span>
      </>
    ),
    lead: "حين ينقطع الإنترنت، لا يتوقّف شيء. تُخزَّن الرسائل والإجراءات في قاعدة البيانات المحلية موسومةً كـ«غير مُزامَنة». وبمجرّد عودة الاتصال ينطلق محرّك المزامنة: يقرأ ما تغيّر منذ آخر اتصال، ويقارن الإصدارات، ويحلّ التعارضات — فلا تُفقد بيانة واحدة.",
    points: [
      { label: "تخزين محلي", value: "Hive · فوري" },
      { label: "وسم غير مُزامَن", value: "طابور نظيف" },
      { label: "مقارنة الإصدارات", value: "حلّ التعارض" },
    ],
    screen: null,
    render: <OfflineSyncDiagram />,
    variant: "stage",
    glow: "#4dd0ff",
    align: "right",
  },
  {
    id: "encryption",
    kicker: "التشفير · حماية البيانات الحسّاسة",
    title: (
      <>
        بياناتك مشفّرة.
        <br />
        <span style={{ color: "#8b7cff" }}>حتى لو سُرِقت.</span>
      </>
    ),
    lead: "نُشفّر البيانات الحسّاسة فقط — الأسماء وأرقام الهواتف وأسماء الزوّار — بمعيار AES-128 داخل Appwrite، ومفتاح التشفير محفوظ في مخزن آمن. عند الطلب تُفَكّ لأجزاء من الثانية، وتنتقل مشفّرة عبر HTTPS، ثم تُعاد تشفيرها داخل قاعدة Hive المحلية.",
    points: [
      { label: "AES-128", value: "حقول حسّاسة فقط" },
      { label: "أثناء النقل", value: "HTTPS · SSL" },
      { label: "على الجهاز", value: "Hive مقفلة" },
    ],
    screen: null,
    render: <EncryptionDiagram />,
    variant: "stage",
    glow: "#8b7cff",
    align: "left",
  },
  {
    id: "tenancy",
    kicker: "العزل والصلاحيات · تعدّد المستأجرين",
    title: (
      <>
        كل كمبوند جزيرة.
        <br />
        <span style={{ color: G }}>لا يرى سواه.</span>
      </>
    ),
    lead: "في Appwrite جعلنا كل كمبوند فريقًا مستقلًّا، فلا يرى أحدٌ بيانات كمبوند آخر — حتى على القاعدة المشتركة. وأي مستخدم جديد يبدأ بدور «زائر» فقط، ولا يُضاف إلى الفريق إلا بعد موافقة المسؤول. هكذا لا يستطيع أحد قراءة البيانات من الخارج.",
    points: [
      { label: "فريق لكل كمبوند", value: "عزل تام" },
      { label: "دور افتراضي", value: "زائر فقط" },
      { label: "بوابة القبول", value: "موافقة المسؤول" },
    ],
    screen: null,
    render: <TenancyDiagram />,
    variant: "stage",
    glow: G,
    align: "right",
  },
  {
    id: "scaling",
    kicker: "التوسّع المؤسسي والعلامة البيضاء",
    title: (
      <>
        علامتك أنت.
        <br />
        <span style={{ color: "#8b7cff" }}>في كل مشروع.</span>
      </>
    ),
    lead: "والأجمل للمطوّر العقاري: تطبيق بعلامته بالكامل — هوية مُدن، ومتجر تطبيقات مُدن — منشور عبر جميع مجتمعاته ومُدار من منصّة واحدة، على Google Play وتطبيق الويب، وقريبًا iOS.",
    points: [
      { label: "علامة مخصّصة", value: "لكل مطوّر" },
      { label: "إطلاق على المتاجر", value: "Google Play · PWA" },
      { label: "الإعداد لمرة واحدة", value: "150,000 ج.م" },
    ],
    screen: <ScalingScreen />,
    glow: "#8b7cff",
    align: "right",
    phoneWidth: 400,
  },
  {
    id: "finance",
    kicker: "جنّة 2 · خطة الإطلاق والأرقام",
    title: (
      <>
        جاهز للإطلاق.
        <br />
        <span style={{ color: G }}>وبلا مخاطرة.</span>
      </>
    ),
    lead: "وأخيرًا، أرقام جنّة 2: باقتنا القياسية 500 ج.م للوحدة سنويًا، ولجنّة 2 خصم حصري 30% — 350 ج.م فقط للوحدة، مع شهرين مجانًا. على 2,664 وحدة (111 عمارة × 24)، ينزل العقد السنوي من 1,332,000 إلى 932,400 ج.م — وتجربة كاملة 14 يومًا قبل أي التزام.",
    points: [
      { label: "سعر الوحدة", value: "350 ج.م / سنة · -30%" },
      { label: "العقد السنوي", value: "932,400 ج.م" },
      { label: "التجربة", value: "14 يومًا · مجانًا" },
    ],
    screen: <FinanceScreen />,
    glow: G,
    align: "left",
    phoneWidth: 400,
  },
];
