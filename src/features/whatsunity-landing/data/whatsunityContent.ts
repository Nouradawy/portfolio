export type Locale = "ar" | "en";

export interface WhatsunityContent {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    badge: string;
  };
  nav: {
    caseStudy: string;
    architecture: string;
    catalog: string;
    backToPortfolio: string;
  };
  hero: {
    kicker: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    ctaDemo: string;
    ctaCatalog: string;
    ctaPresentation: string;
    metrics: {
      label: string;
      value: string;
      sub: string;
    }[];
    commercialHighlights: {
      tag: string;
      title: string;
      desc: string;
    }[];
    cinematic: {
      eyebrow: string;
      scrollHint: string;
      dockTitle: string;
      scenes: {
        id: string;
        stageNumber: string;
        tag: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        iconName: "Smartphone" | "Users" | "ShieldCheck" | "Zap" | "QrCode";
        videoSrc: string;
        posterSrc: string;
        accentColor: string;
        glowColor: string;
        keyStats: { value: string; label: string; sub: string }[];
        bulletPoints: { title: string; desc: string }[];
        dockLabel: string;
        dockSub: string;
      }[];
    };
  };
  caseStudy: {
    badge: string;
    title: string;
    subtitle: string;
    sections: {
      problem: {
        tag: string;
        title: string;
        desc: string;
        items: { title: string; desc: string; icon: string }[];
        contrast: {
          whatsappTitle: string;
          whatsappPoints: string[];
          whatsunityTitle: string;
          whatsunityPoints: string[];
        };
      };
      roles: {
        tag: string;
        title: string;
        desc: string;
        list: {
          id: string;
          name: string;
          subtitle: string;
          icon: string;
          responsibility: string;
          features: string[];
          offlineCapability: string;
          shotKey: string;
        }[];
      };
      architecture: {
        tag: string;
        title: string;
        desc: string;
        principles: { title: string; desc: string }[];
        diagramTabs: {
          id: string;
          label: string;
          title: string;
          desc: string;
        }[];
        messagingDualEngine: {
          title: string;
          desc: string;
          telegramTitle: string;
          telegramDesc: string;
          appwriteTitle: string;
          appwriteDesc: string;
        };
        storagePipeline: {
          title: string;
          desc: string;
        };
      };
      maintenance: {
        tag: string;
        title: string;
        desc: string;
        steps: {
          step: string;
          actor: string;
          title: string;
          desc: string;
          sla: string;
        }[];
        chiefHubFeatures: { title: string; desc: string }[];
      };
      security: {
        tag: string;
        title: string;
        desc: string;
        pillars: { title: string; desc: string; icon: string }[];
      };
      benchmarks: {
        tag: string;
        title: string;
        desc: string;
        metrics: { metric: string; before: string; after: string; delta: string }[];
      };
    };
  };
  interactiveHub: {
    tag: string;
    title: string;
    subtitle: string;
    catalogCard: {
      title: string;
      desc: string;
      btn: string;
      screensCount: string;
    };
    deckCard: {
      title: string;
      desc: string;
      btn: string;
    };
  };
  aeo: {
    tag: string;
    title: string;
    subtitle: string;
    copyPromptBtn: string;
    copiedText: string;
    openLlmsTxt: string;
    openMarkdown: string;
    specsTitle: string;
    specs: { key: string; value: string }[];
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    primaryBtn: string;
    secondaryBtn: string;
    portfolioBtn: string;
  };
}

export const whatsunityContent: Record<Locale, WhatsunityContent> = {
  ar: {
    meta: {
      title: "WhatsUnity — نظام تشغيل الكمبوندات السكنية ومنصة الجيران الموثقة",
      description:
        "منصة B2B متكاملة لإدارة المجمعات السكنية واتحادات الشاغلين. استبدل فوضى مجموعات واتساب بنظام سكني موثق، وبوابات أمنية تعمل دون إنترنت بنسبة 100%، ودورة صيانة هندسية متكاملة لـ 9 أدوار تشغيلية — جاهز للتطبيق الفوري.",
      ogTitle: "WhatsUnity — نظام تشغيل الكمبوندات وإدارة المجمعات السكنية",
      ogDescription:
        "منظومة عقارية تجارية جاهزة للتسليم: تصاريح زوار مشفرة أوفلاين، محرك مراسلة مزدوج موفر للتكاليف، وحوكمة صيانة شاملة.",
      badge: "منظومة تجارية متكاملة جاهزة للتسليم · B2B Compound OS v2.4",
    },
    nav: {
      caseStudy: "دراسة الحالة",
      architecture: "المعمارية",
      catalog: "الكتالوج (20+ شاشة)",
      backToPortfolio: "معرض الأعمال",
    },
    hero: {
      kicker: "منظومة تشغيل B2B للمطورين العقاريين واتحادات الشاغلين · جاهزة للنشر",
      titleLine1: "حوّل كمبوندك إلى مجتمع ذكي متكامل.",
      titleHighlight: "الأمان، والتشغيل، ورضا السكان في منصة واحدة.",
      subtitle:
        "استبدل فوضى مجموعات الواتساب، وأعطال البوابات الأمنية، وفقدان طلبات الصيانة بنظام تشغيل عقاري متكامل. مبني بأعلى معايير Flutter و Clean Architecture، مع تشغيل أوفلاين 100%، وإدارة صيانة خماسية الأدوار، ودليل سكني موثق بالوحدات — جاهز للتطبيق في كمبوندك خلال 48 ساعة.",
      ctaDemo: "احجز جلسة استعراض حي (Demo) ←",
      ctaCatalog: "تصفح كتالوج الشاشات (20+ شاشة)",
      ctaPresentation: "العرض التقديمي التفاعلي",
      metrics: [
        { label: "وفورات تكلفة الخوادم", value: "0$", sub: "باقة تيليجرام الاقتصادية" },
        { label: "جاهزية البوابات أوفلاين", value: "100%", sub: "حماية تامة من انقطاع الشبكة" },
        { label: "سرعة التسليم والتشغيل", value: "48 ساعة", sub: "جاهز للتخصيص White-label" },
        { label: "شاشات إنتاجية مكتملة", value: "34+ شاشة", sub: "تطبيق متكامل لـ 9 أدوار" },
      ],
      commercialHighlights: [
        {
          tag: "White-Label جاهز",
          title: "إطلاق بهوية كمبوندك",
          desc: "تخصيص الألوان، الشعار، واسم التطبيق على App Store و Google Play خلال 48 ساعة فقط.",
        },
        {
          tag: "0$ تكاليف خوادم",
          title: "محرك تيليجرام الاقتصادي",
          desc: "تخلص تماماً من اشتراكات قواعد البيانات والمحادثات الشهرية بفضل ربط Telegram MTProto.",
        },
        {
          tag: "100% أمان أوفلاين",
          title: "بوابات لا تتوقف أبداً",
          desc: "فحص تصاريح الزوار المشفرة محلياً على أجهزة الحراس دون أي تأثر بانقطاع الإنترنت.",
        },
        {
          tag: "ملكية فكرية كاملة",
          title: "شراء الكود أو ترخيص مرن",
          desc: "متاح للاستحواذ الكامل على الكود المصدري أو الترخيص التشغيلي للمطورين العقاريين.",
        },
      ],
      cinematic: {
        eyebrow: "استعراض سينمائي تفاعلي لجوهر المنظومة",
        scrollHint: "مرر للأسفل لاستكشاف رحلة المنظومة",
        dockTitle: "الركائز التشغيلية والتقنية",
        scenes: [
          {
            id: "offline-first",
            stageNumber: "01",
            tag: "المعمارية والأداء الفائق · Offline-First Architecture",
            title: "استجابة فورية 0ms بلا أي تأخير.",
            titleHighlight: "بنية SQLite Local Master تعمل دائماً.",
            subtitle:
              "كل شاشة تتفاعل بلمح البصر دون انتظار استجابة السيرفر. تكتب جميع العمليات محلياً مع طوابير مزامنة ذكية وتوقيع رقمي موثوق، مما يضمن أداءً فائقاً وتجربة استخدام خالية من أي بطء حتى في الأماكن المنعزلة وأكشاك البوابات.",
            iconName: "Smartphone",
            videoSrc: "/assets/whatsunity/phone.mp4",
            posterSrc: "/assets/whatsunity/poster-phone.webp",
            accentColor: "#00e28a",
            glowColor: "rgba(0, 226, 138, 0.35)",
            keyStats: [
              { value: "0ms", label: "زمن استجابة الواجهة", sub: "قاعدة بيانات محلية فورية" },
              { value: "100%", label: "جاهزية تشغيل أوفلاين", sub: "بلا اعتمادية على الشبكة" },
              { value: "Sub-50ms", label: "سرعة فض التعارضات", sub: "خوارزمية LWW الذكية" },
            ],
            bulletPoints: [
              { title: "تفاعل لحظي دون شاشات تحميل", desc: "استجابة 0ms لكافة العمليات وحفظ فوري محلياً." },
              { title: "مزامنة ذكية ثنائية الاتجاه", desc: "رفع التعديلات فور عودة الاتصال بمرونة تامة." },
            ],
            dockLabel: "تشغيل أوفلاين فوري",
            dockSub: "0ms Local Master",
          },
          {
            id: "community-hub",
            stageNumber: "02",
            tag: "مجتمع الجيران الموثق · Verified Resident Hub",
            title: "مجتمع سكني راقٍ بخصوصية تامة.",
            titleHighlight: "استبدل فوضى مجموعات الواتساب.",
            subtitle:
              "دليل سكني موثق بالوحدات والعمارات يمنع كشف أرقام هواتف الملاك. يتيح نشر الإعلانات الرسمية للكمبوند، واستطلاعات الرأي التفاعلية، والنقاشات المحكومة دون أي إزعاج أو تسويق عشوائي.",
            iconName: "Users",
            videoSrc: "/assets/whatsunity/community.mp4",
            posterSrc: "/assets/whatsunity/poster-community.webp",
            accentColor: "#3b82f6",
            glowColor: "rgba(59, 130, 246, 0.35)",
            keyStats: [
              { value: "100%", label: "حماية خصوصية الهواتف", sub: "عزل كامل لأرقام السكان" },
              { value: "0", label: "رسائل عشوائية وإعلانات", sub: "قنوات رسمية موثقة" },
              { value: "48 ساعة", label: "استيراد دليل الكمبوند", sub: "توليد الحسابات بالـ CSV" },
            ],
            bulletPoints: [
              { title: "دليل موثق بالوحدات والعمارات", desc: "تواصل منظم بين الجيران دون كشف أرقام الهواتف." },
              { title: "قنوات إعلانات وتصويتات رسمية", desc: "قرارات اتحاد الشاغلين وإشعارات الإدارة المعتمدة." },
            ],
            dockLabel: "مجتمع الجيران الموثق",
            dockSub: "Unit-Verified Hub",
          },
          {
            id: "qr-security",
            stageNumber: "03",
            tag: "الأمان والبوابات الذكية · Gatekeeper QR",
            title: "بوابات أمنية محصنة لا تتوقف.",
            titleHighlight: "فحص تصاريح QR مشفرة 100% دون إنترنت.",
            subtitle:
              "تصاريح زوار رقمية مشفرة بطابع زمني ورقم الوحدة تُفحص محلياً على أجهزة الحراس في أقل من 0.05 ثانية. سجل زوار CRM لتسهيل دخول المترددين المنتظمين، وتنبيهات القائمة السوداء الفورية حتى أثناء انقطاع الإنترنت التام.",
            iconName: "ShieldCheck",
            videoSrc: "/assets/whatsunity/qr-security.mp4",
            posterSrc: "/assets/whatsunity/poster-qr-security.webp",
            accentColor: "#10b981",
            glowColor: "rgba(16, 185, 129, 0.35)",
            keyStats: [
              { value: "0.04s", label: "سرعة التحقق من التصريح", sub: "مطابقة التوقيع الرقمي محلياً" },
              { value: "0%", label: "توقف عند انقطاع 4G", sub: "تشغيل أمني مستمر 24/7" },
              { value: "3 ثوانٍ", label: "زمن عبور الزائر المتردد", sub: "سجل Guest CRM الذكي" },
            ],
            bulletPoints: [
              { title: "تصاريح مشفرة غير قابلة للتزوير", desc: "توقيع رقمي موثوق مع طابع زمني دقيق للزيارة." },
              { title: "حماية متواصلة في النقاط العمياء", desc: "فحص فوري في أكشاك الحراسة وجراجات السرداب." },
            ],
            dockLabel: "أمن البوابات المشفرة",
            dockSub: "100% Offline QR Gate",
          },
        ],
      },
    },
    caseStudy: {
      badge: "دراسة حالة تجارية وهندسية شاملة",
      title: "لماذا يختار المطورون العقاريون منظومة WhatsUnity؟",
      subtitle:
        "تحليل استراتيجي لكيفية حماية أمان الكمبوند، ورفع قيمة العقار، وتخفيض تكاليف الصيانة بنسبة 78% مع التخلص التام من رسوم الخوادم الشهرية المرهقة.",
      sections: {
        problem: {
          tag: "المخاطر التشغيلية والمالية",
          title: "التكلفة الخفية لفوضى الواتساب والأنظمة السحابية التقليدية",
          desc: "تعتمد غالبية المجمعات السكنية على حلول ترقيعية تعرض المجتمع لمخاطر أمنية وقانونية وخسائر تشغيلية فادحة:",
          items: [
            {
              title: "المسؤولية القانونية وانتهاك الخصوصية",
              desc: "كشف أرقام هواتف الملاك في مجموعات الواتساب العامة يعرض إدارة الكمبوند للمساءلة القانونية ومضايقات التسويق العشوائي.",
              icon: "MessageSquareOff",
            },
            {
              title: "الشلل الأمني عند انقطاع الشبكة",
              desc: "فقدان إشارة الـ 4G في أكشاك الحراسة أو انقطاع كابلات الألياف يشل الأنظمة السحابية تماماً ويوقف دخول السكان والزوار.",
              icon: "WifiOff",
            },
            {
              title: "استنزاف ميزانية اتحاد الشاغلين",
              desc: "تفرض برامج إدارة العقارات التقليدية رسوماً شهرية باهظة عن كل باب سكني (Per-Door)، مما يلتهم ميزانية الصيانة والأمن.",
              icon: "BadgePercent",
            },
            {
              title: "هدر أموال الصيانة وغياب المساءلة",
              desc: "تسجيل الأعطال هاتفياً يؤدي إلى تكرار صرف قطع الغيار واختفاء أوامر الشغل دون توثيق صور قبل وبعد أو تتبع ساعات العمل.",
              icon: "FileWarning",
            },
          ],
          contrast: {
            whatsappTitle: "الوضع التقليدي: فوضى وسمعة متراجعة للمشروع",
            whatsappPoints: [
              "أرقام هواتف السكان مكشوفة للجميع دون خصوصية أو تصنيف وحدات",
              "توقف حركة البوابات واحتجاز الضيوف عند بطء أو انقطاع الإنترنت",
              "طلبات الصيانة تضيع وسط مئات الرسائل العشوائية والجدل اليومي",
              "غياب أي آلية لمساءلة الفنيين أو معرفة زمن الإصلاح الحقيقي",
              "انطباع سلبي للملاك والزوار يقلل من القيمة الاستثمارية للكمبوند",
            ],
            whatsunityTitle: "الحل مع WhatsUnity: مجتمع راقٍ وقيمة عقارية مضاعفة",
            whatsunityPoints: [
              "دليل سكني موثق بالوحدات والعمارات مع خصوصية مطلقة لأرقام الهواتف",
              "فحص وتوثيق تصاريح الزوار QR محلياً 100% في أقل من 0.05 ثانية",
              "دورة صيانة هندسية آلية من الإبلاغ حتى مراجعة واعتماد مهندس الموقع",
              "مؤقت زمني دقيق لكل فني مع توثيق إلزامي لصور قبل وبعد الإصلاح",
              "تطبيق مخصص يحمل الهوية البصرية للكمبوند يرفع رضا السكان وقيمة العقار",
            ],
          },
        },
        roles: {
          tag: "إدارة متكاملة بـ 9 أدوار",
          title: "منظومة تشغيل متحدة تربط كافة فرق العمل في منصة واحدة",
          desc: "صممت WhatsUnity واجهات متخصصة لكل رتبة إدارية وميدانية لضمان انضباط العمل ومساءلة كل فرد بدقة متناهية:",
          list: [
            {
              id: "resident",
              name: "الساكن / المالك",
              subtitle: "تجربة سكنية فاخرة وخدمات بلمسة زر",
              icon: "Home",
              responsibility: "إصدار تصاريح الزوار المشفرة، طلب خدمات الصيانة بالميديا، والتواصل في خلاصة الجيران الآمنة.",
              features: ["تصاريح QR رقمية لحظية", "بلاغات صيانة صوتية ومصورة", "دليل الجيران الموثق", "تصويتات الكمبوند الرسمية"],
              offlineCapability: "إصدار ومراجعة التصاريح وعرض الدليل من قاعدة البيانات المحلية دون الحاجة لاتصال بالإنترنت.",
              shotKey: "home",
            },
            {
              id: "gatekeeper",
              name: "حارس البوابة الأمنية",
              subtitle: "بوابات أمنية محصنة لا تتوقف",
              icon: "ShieldCheck",
              responsibility: "مسح تصاريح QR للزوار وسيارات النقل في أجزاء من الثانية، وتسجيل اللوحات، ورصد الممنوعين.",
              features: ["قارئ QR مشفر أوفلاين", "سجل الزوار المترددين CRM", "تنبيه القائمة السوداء الفوري", "تسجيل أرقام اللوحات"],
              offlineCapability: "مطابقة التوقيع الرقمي للتصريح وفحصه محلياً في 0ms حتى في حال الانقطاع التام لشبكة 4G.",
              shotKey: "qr",
            },
            {
              id: "supervisor",
              name: "مشرف الأمن والعمليات",
              subtitle: "التحكم الميداني وانضباط الأفراد",
              icon: "Eye",
              responsibility: "تنسيق ورديات الحراسة، ومتابعة مسارات الدوريات، وإدارة غرفة التحكم في الطوارئ والحوادث.",
              features: ["جدول الورديات الحي", "مركز التحكم بالحوادث الطارئة", "موافقة طلبات تبديل الورديات", "تحليلات الحضور والأمن"],
              offlineCapability: "الاطلاع على الجدول الأمني وتسجيل الملاحظات الميدانية محلياً مع المزامنة التلقائية فور توفر النت.",
              shotKey: "controlRoom",
            },
            {
              id: "patrol",
              name: "فرد الدورية الميدانية",
              subtitle: "تأمين الأسوار وحماية الأصول",
              icon: "Compass",
              responsibility: "تأكيد فحص المحيط عبر نقاط NFC، وتوثيق المفقودات بعلامة مائية، ورصد أي ثغرات بالأسوار.",
              features: ["نقاط تفتيش NFC الذكية", "سجل المفقودات والموجودات", "تسجيل أدلة الحوادث المصورة", "تنبيهات الاستجابة السريعة"],
              offlineCapability: "تسجيل فحص المحيط وتخزين الصور محلياً مع طابع زمني معتمد دون الحاجة لأي تغطية خلوية.",
              shotKey: "patrolHub",
            },
            {
              id: "technician",
              name: "الفني المتخصص",
              subtitle: "تنفيذ البلاغات والتوثيق المصور",
              icon: "Wrench",
              responsibility: "استلام أوامر الشغل الموجهة لتخصصه، وتشغيل مؤقت العمل، وتوثيق حالة العطل قبل وبعد الإصلاح.",
              features: ["قائمة مهام العمل حسب التخصص", "مؤقت زمني دقيق لكل طلب", "توثيق صور قبل وبعد", "طلب صرف قطع الغيار"],
              offlineCapability: "تحديث حالة العمل وتسجيل قطع الغيار في السرداب أو غرفة المحركات أوفلاين مع الحفظ المحلي.",
              shotKey: "technicianOrders",
            },
            {
              id: "chief",
              name: "كبير مهندسي الصيانة",
              subtitle: "القيادة التشغيلية واعتماد الجودة",
              icon: "Gauge",
              responsibility: "مراقبة مؤشرات الأداء الحية، وتوزيع أحمال الفنيين، والاعتماد النهائي أو طلب إعادة العمل.",
              features: ["شريط مؤشرات KPI اللحظي", "مقياس أحمال الفنيين (متاح/مثالي/مضغوط)", "تقويم الإجازات وأيام العمل", "اعتماد فواتير قطع الغيار"],
              offlineCapability: "مراجعة أرشيف البلاغات والتقارير الفنية محلياً مع إمكانية التقييم والتسجيل دون تأخير.",
              shotKey: "chiefTeams",
            },
          ],
        },
        architecture: {
          tag: "هندسة برمجية من الطراز الأول",
          title: "بنية هندسية تضمن استمرارية التشغيل وتوفير الميزانيات",
          desc: "صممت المنظومة على معمارية Clean Architecture بدون أي مكتبات توليد كود خارجية، مما يوفر سرعة استجابة مذهلة وأعلى درجات الاستقرار:",
          principles: [
            {
              title: "سرعة فائقة (0ms استجابة فورية)",
              desc: "تكتب جميع العمليات فوراً في قاعدة SQLite المحلية، مما يجعل الشاشات تتفاعل بلمح البصر دون أي دوائر تحميل مزعجة.",
            },
            {
              title: "عزل كامل لبيانات كل كمبوند (Multi-Tenancy)",
              desc: "قاعدة بيانات مستقلة ومحمية لكل كمبوند لضمان الخصوصية وسرية السجلات والتقارير المالية.",
            },
            {
              title: "رفع مباشر للوسائط عبر Cloudflare R2",
              desc: "رفع الصور والملاحظات الصوتية مباشرة من هاتف العميل إلى خوادم الحافة لتفادي استهلاك موارد الخادم وضمان سرعة العرض.",
            },
          ],
          diagramTabs: [
            {
              id: "arch",
              label: "خريطة النظام متعدد المستأجرين",
              title: "عزل بيانات الكمبوندات (Multi-Tenancy Topology)",
              desc: "قاعدة مركزية لإدارة الحسابات المشتركة، مع قواعد بيانات منفصلة بالكامل لكل كمبوند لضمان السرية التامة واستقلالية التشغيل.",
            },
            {
              id: "sync",
              label: "محرك المزامنة الأوفلاين (Sync Engine)",
              title: "المزامنة ثنائية الاتجاه وحل التعارضات (LWW)",
              desc: "يكتب المستخدم في قاعدة SQLite المحلية فوراً. يقوم محرك الخلفية برفع التعديلات مع فض التعارضات بقاعدة الكتابة الأخيرة للأحدث.",
            },
            {
              id: "encryption",
              label: "التشفير والتحقق الرقمي",
              title: "تصاريح زوار مشفرة بتوقيع رقمي موثوق",
              desc: "تشفير تصريح الزائر بطابع زمني ورقم الوحدة وهوية الساكن، مما يتيح لحارس البوابة التحقق من صحة الكود محلياً دون سؤال السيرفر.",
            },
            {
              id: "tenancy",
              label: "توزيع السحابة والوسائط R2",
              title: "مسار رفع الوسائط المباشر عبر Cloudflare R2",
              desc: "رفع الصور والمذكرات الصوتية مباشرة من الهاتف إلى Cloudflare R2 عبر روابط موقعة لتفادي اختناق الخوادم.",
            },
          ],
          messagingDualEngine: {
            title: "محرك المراسلة المزدوج: وفر هائل في تكاليف الخوادم",
            desc: "فصل كامل لواجهة الدردشة عن بروتوكول النقل عبر واجهة ChatRepository المجردة، مما يوفر خيارين لكل مجتمع:",
            telegramTitle: "محرك التيليجرام (Telegram Engine) — الباقة الاقتصادية (0$ خوادم)",
            telegramDesc:
              "يربط إعلانات الكمبوند ونقاشات المبنى عبر بوتات منصة Telegram MTProto مجاناً بدون أي تكاليف قواعد بيانات أو استهلاك باندويث للمجتمعات السكنية.",
            appwriteTitle: "محرك Appwrite Realtime — الباقة المتقدمة",
            appwriteDesc:
              "مراسلة فائقة السرعة عبر بروتوكول WebSocket المباشر مع دعم مؤشرات الكتابة الحية، وحالة التواجد (Presence)، وإيصالات القراءة الموثقة.",
          },
          storagePipeline: {
            title: "مسار تخزين الوسائط المباشر (Direct Edge Storage)",
            desc: "طلب رابط رفع موقع مسبقاً من دوال Appwrite الحافة، ثم رفع الصور والملفات الصوتية مباشرة إلى Cloudflare R2 عبر HTTP/3 دون إرهاق ذاكرة الخادم.",
          },
        },
        maintenance: {
          tag: "دورة الصيانة الخماسية المعتمدة",
          title: "حوكمة هندسية تخفض تكاليف الصيانة بنسبة 78%",
          desc: "مسار صيانة محكم يغلق باب الهدر والشكاوى العشوائية ويضمن توثيق كل جنيه يُنفق على مرافق الكمبوند:",
          steps: [
            {
              step: "01",
              actor: "الساكن",
              title: "تقديم البلاغ والميديا",
              desc: "يحدد الساكن موقع العطل وفئته، مع إرفاق رسالة صوتية أو صور حية مباشرة من كاميرا التطبيق.",
              sla: "فوري (0ms محلياً)",
            },
            {
              step: "02",
              actor: "منسق الصيانة",
              title: "الفرز والترقيم والتوجيه",
              desc: "توليد كود رسمي تلقائي (#MNT-1042)، وتصنيف العطل بين 9 تخصصات، وتوجيهه للفني المناسب.",
              sla: "خلال 15 دقيقة",
            },
            {
              step: "03",
              actor: "كبير المهندسين",
              title: "موازنة الأحمال والتدخل",
              desc: "مراقبة حية لتواجد المنسق، ومتابعة مقياس أحمال الفنيين لمنع تكليف أي فني بأكثر من طاقته.",
              sla: "تحديث لحظي",
            },
            {
              step: "04",
              actor: "الفني المتخصص",
              title: "بدء العمل وتشغيل المؤقت",
              desc: "تشغيل مؤقت زمني دقيق أثناء الإصلاح، وتوثيق صور قبل/بعد وطلب قطع الغيار اللازمة.",
              sla: "حسب أولوية البلاغ",
            },
            {
              step: "05",
              actor: "كبير المهندسين",
              title: "فحص الجودة والاعتماد النهائي",
              desc: "فحص صور الإصلاح وملاحظات الفني وقطع الغيار المستهلكة، ثم الإغلاق النهائي أو طلب إعادة العمل مع ملاحظات.",
              sla: "إغلاق موثق",
            },
          ],
          chiefHubFeatures: [
            { title: "شريط مؤشرات KPI الفوري", desc: "تتبع لحظي للبلاغات المفتوحة والحرجة المصعدة للمهندس." },
            { title: "مؤشر حضور المنسق", desc: "تنبيه ذكي للمهندس لتولي الفرز الفوري إذا كان المنسق غير متصل." },
            { title: "تقويم الإجازات وأيام العمل", desc: "تحديد أيام عمل الطواقم بضغطة واحدة لمنع تكليف فنيين في عطلاتهم." },
            { title: "سجل قطع الغيار المعتمدة", desc: "مطابقة فواتير وأسعار قطع الغيار الموردة قبل الصرف للوحدات." },
          ],
        },
        security: {
          tag: "الأمن والبوابات",
          title: "بوابات أمنية محصنة تعمل 100% دون خوادم",
          desc: "منظومة أمنية تضمن عدم توقف حركة الدخول والخروج حتى لو انقطعت كابلات الألياف الضوئية وشبكات 4G بالكامل:",
          pillars: [
            {
              title: "تصاريح زوار مشفرة رقمياً",
              desc: "توليد كود QR يحتوي على هوية الزائر، ورقم الوحدة، ووقت الصلاحية مع توقيع رقمي يتم التحقق منه محلياً.",
              icon: "QrCode",
            },
            {
              title: "سجل الزوار المترددين (Guest CRM)",
              desc: "حفظ بيانات السائقين، وعمال التوصيل، والمترددين المنتظمين لتقليص زمن الفحص عند البوابة إلى 3 ثوانٍ فقط.",
              icon: "Users",
            },
            {
              title: "نقاط تفتيش الدوريات عبر NFC",
              desc: "تثبيت شرائح NFC في أركان ومحيط الكمبوند تلزم أفراد الأمن بالمرور الفعلي ومسح الشريحة لتوثيق الجولة.",
              icon: "Radio",
            },
            {
              title: "تنبيهات القائمة السوداء الفورية",
              desc: "مطابقة فورية لأي زائر أو سيارة مع قائمة الممنوعين من الدخول المخزنة محلياً عند الحارس دون انتظار السحابة.",
              icon: "ShieldAlert",
            },
          ],
        },
        benchmarks: {
          tag: "العائد على الاستثمار ومؤشرات الأداء",
          title: "أرقام تثبت تفوق المنظومة على كافة البدائل المتاحة",
          desc: "نتائج تجريبية وميدانية توضح الفارق في سرعة الاستجابة، وتكاليف التشغيل، وانضباط الفرق:",
          metrics: [
            { metric: "سرعة استجابة واجهة المستخدم", before: "420ms (انتظار السحابة)", after: "0ms (قاعدة SQLite محلية)", delta: "فوري 100%" },
            { metric: "جاهزية البوابات أثناء انقطاع النت", before: "0% (توقف البوابات)", after: "100% (فحص مشفر أوفلاين)", delta: "تشغيل متواصل" },
            { metric: "زمن إنجاز بلاغات الصيانة", before: "48 - 72 ساعة", after: "أقل من 6 ساعات", delta: "-78% انخفاض" },
            { metric: "تكلفة خوادم الدردشة (باقة تيليجرام)", before: "$120 / شهر لكل كمبوند", after: "$0 (بدون تكاليف خوادم)", delta: "وفر 100%" },
            { metric: "دقة حضور وانضباط الدوريات الأمنية", before: "42% (سجلات ورقية)", after: "98.5% (تحقق NFC مشفر)", delta: "+134% زيادة" },
          ],
        },
      },
    },
    interactiveHub: {
      tag: "الاستكشاف العملي والشاشات",
      title: "تصفح كتالوج الشاشات والعرض التقديمي للمنظومة",
      subtitle: "جرب بنفسك شاشات المنظومة الـ 34 المكتملة، أو استعرض العرض التقديمي التفاعلي الموجه لمجالس الإدارة.",
      catalogCard: {
        title: "كتالوج الشاشات التفاعلي",
        desc: "استعرض أكثر من 20 شاشة إنتاجية حية تغطي أدوار السكان، والبوابات، والفنيين، وغرف التحكم.",
        btn: "افتح الكتالوج الكامل للشاشات",
        screensCount: "20+ شاشة حية",
      },
      deckCard: {
        title: "العرض التقديمي (Pitch Deck)",
        desc: "عرض الشرائح السينمائي التفاعلي المصمم لإقناع مجالس إدارة الكمبوندات والمستثمرين بالمنظومة.",
        btn: "تشغيل العرض التقديمي",
      },
    },
    aeo: {
      tag: "للمهندسين ونماذج الذكاء الاصطناعي (AEO)",
      title: "دليل المواصفات الفنية لأنظمة الذكاء الاصطناعي ومسؤولي التقنية",
      subtitle:
        "بيانات ومواصفات معمارية مهيكلة لتمكين أدوات البحث الذكي ومساعدي البرمجة (ChatGPT, Cursor, Gemini) من قراءة وفهم بنية المنظومة.",
      copyPromptBtn: "نسخ الملخص المعماري لمحركات الذكاء الاصطناعي",
      copiedText: "تم النسخ بنجاح للحافظة!",
      openLlmsTxt: "تصفح ملف /llms.txt",
      openMarkdown: "قراءة الوثيقة الكاملة /whatsunity.md",
      specsTitle: "جدول المواصفات التقنية الرسمية للمنظومة",
      specs: [
        { key: "المنصة والأنظمة المدعومة", value: "Flutter 3.x (iOS, Android, Web & Windows Multiplatform)" },
        { key: "لغة البرمجة والبناء", value: "Dart 3 (Sealed Classes, Records, Pattern Matching, Zero Code-Gen)" },
        { key: "النمط المعماري المعتمد", value: "Clean Architecture (Domain, Data, Presentation) Unidirectional Flow" },
        { key: "إدارة الحالة (State Management)", value: "Dart 3 Cubits / Blocs مع فئات نتائج محكمة Result<T, Failure>" },
        { key: "قاعدة البيانات الأولية للعميل", value: "SQLite Local Master (0ms Instant Mutations & Reactive Streams)" },
        { key: "محرك المراسلة اللحظي (Premium)", value: "Appwrite Realtime WebSocket (Presence, Read Receipts, Typing)" },
        { key: "محرك المراسلة الاقتصادي (Free)", value: "Telegram MTProto Bot API (انعدام تكاليف قواعد البيانات السحابية)" },
        { key: "تخزين الوسائط وسحابية الحافة", value: "Cloudflare R2 Direct Edge Pipeline عبر روابط HTTP/3 موقعة" },
        { key: "أمان البوابات بدون اتصال", value: "تصاريح QR مشفرة بتواقيع رقمية وطابع زمني تُفحص محلياً 100%" },
        { key: "مصفوفة الأدوار التشغيلية", value: "9 أدوار متكاملة (سكان، حراس، دوريات، منسق، فنيين، كبار مهندسين، إدارة)" },
      ],
    },
    faq: {
      tag: "الأسئلة الأكثر شيوعاً للمشترين والمطورين",
      title: "كل ما يهمك حول تطبيق وتشغيل WhatsUnity في كمبوندك",
      subtitle: "إجابات مفصلة حول سرعة النشر، والتخصيص، والتكلفة، وحماية أمن المجتمع السكني.",
      items: [
        {
          q: "كم يستغرق نشر وتطبيق المنظومة في كمبوند جديد؟",
          a: "يمكن تهيئة المنظومة بالكامل وإطلاقها لكمبوند سكني متكامل في أقل من 48 ساعة. يتم استيراد بيانات الوحدات السكنية عبر ملفات Excel/CSV، وتخصيص أسماء البوابات، وتهيئة حسابات حراس الأمن والفنيين فوراً.",
        },
        {
          q: "هل يمكن تخصيص التطبيق بهوية وشعار الكمبوند الخاص بنا (White-Label)؟",
          a: "نعم بالتأكيد. تتيح المنظومة خيار White-Labeling الكامل للمطورين العقاريين وشركات إدارة الممتلكات، بما يشمل ألوان الهوية البصرية، واسم التطبيق على متجري App Store و Google Play، والروابط السحابية المخصصة.",
        },
        {
          q: "كيف تحل المنظومة مشكلة ضعف شبكات 4G عند البوابات ومواقف السيارات؟",
          a: "تعتمد WhatsUnity على نموذج SQLite Local Master المعماري. يتم فحص تصاريح الزوار QR والتحقق من التوقيع الرقمي وصلاحية الزيارة محلياً على جهاز الحارس في أقل من 0.05 ثانية دون الحاجة لوجود إنترنت إطلاقاً، وتتم مزامنة سجلات الدخول تلقائياً عند عودة الاتصال.",
        },
        {
          q: "كيف تخفض المنظومة تكلفة اشتراكات البرامج الشهرية إلى 0$؟",
          a: "بفضل محرك المراسلة المزدوج الحصري (Dual-Engine)، يمكن للمجمعات الاقتصادية تفعيل باقة التيليجرام التي توجه إعلانات ونقاشات الكمبوند عبر واجهات Telegram MTProto المجانية دون دفع سنت واحد في خوادم قواعد البيانات السحابية، مع الاحتفاظ بكافة مميزات أمن البوابات والصيانة.",
        },
        {
          q: "كيف تساعد المنظومة في حوكمة أعمال الصيانة ومنع الهدر المالي؟",
          a: "تطبق المنظومة دورة صيانة هندسية خماسية: من الساكن، ثم الفرز والترقيم لدى المنسق، ثم توجيه الفني المناسب، وتشغيل مؤقت زمني أثناء الإصلاح مع صور إلزامية قبل وبعد، وأخيراً فحص الجودة واعتماد فواتير قطع الغيار من قبل كبير المهندسين قبل إغلاق التذكرة.",
        },
      ],
    },
    cta: {
      title: "جاهز لنقل مجتمعك السكني إلى منظومة تشغيل حديثة؟",
      subtitle:
        "تخلص من صداع مجموعات الواتساب، وأوقف الاختراقات الأمنية عند البوابات، واضبط عمليات الصيانة بدقة هندسية متناهية. تواصل الآن لحجز جلسة استعراض حي وبحث متطلبات كمبوندك.",
      primaryBtn: "احجز جلسة استعراض حي (Schedule Live Demo)",
      secondaryBtn: "تصفح كتالوج الشاشات الكامل",
      portfolioBtn: "معرض أعمال المهندس نور العدوي",
    },
  },
  en: {
    meta: {
      title: "WhatsUnity — Enterprise B2B Compound OS & Gated Community Platform",
      description:
        "Production-ready residential operating system built with Flutter and Clean Architecture. Replace noisy WhatsApp groups with unit-verified directories, 100% offline gate security, and automated 9-role maintenance workflows. Ready to deploy in 48 hours.",
      ogTitle: "WhatsUnity — Enterprise Compound OS & Gated Community Platform",
      ogDescription:
        "Turnkey property management platform: 100% offline cryptographic QR gate passes, dual-engine messaging ($0 server fees), and end-to-end 9-role facility lifecycle.",
      badge: "Turnkey Commercial Compound OS v2.4 · Flutter Clean Architecture",
    },
    nav: {
      caseStudy: "Case Study",
      architecture: "Architecture",
      catalog: "Catalog (20+ Screens)",
      backToPortfolio: "Portfolio",
    },
    hero: {
      kicker: "ENTERPRISE B2B COMPOUND OPERATING SYSTEM · PRODUCTION READY",
      titleLine1: "The Modern Operating System for Gated Communities.",
      titleHighlight: "Built to Protect, Automate, and Scale.",
      subtitle:
        "WhatsUnity replaces noisy WhatsApp groups, vulnerable gate security, and chaotic paper logs with a turnkey residential OS. Built with Flutter Clean Architecture, it delivers 100% offline gatekeeping, automated 9-role facility maintenance, and bank-grade resident verification — ready to deploy to your community in 48 hours.",
      ctaDemo: "Schedule a Live 15-Min Demo →",
      ctaCatalog: "Explore 20+ Screen Production Catalog",
      ctaPresentation: "Interactive Pitch Deck",
      metrics: [
        { label: "Messaging Server Cost", value: "$0", sub: "Telegram MTProto Free Tier" },
        { label: "Gate Offline Resilience", value: "100%", sub: "Zero Downtime Guarantee" },
        { label: "Turnkey Deployment", value: "48 Hours", sub: "White-Label Ready Platform" },
        { label: "Production Screens", value: "34+ Screens", sub: "9 Tailored Operational Roles" },
      ],
      commercialHighlights: [
        {
          tag: "Turnkey White-Label",
          title: "Branded in 48 Hours",
          desc: "Custom logos, theme colors, domain, and native iOS & Android App Store publishing.",
        },
        {
          tag: "$0 Cloud Server Bills",
          title: "Zero-Cost Chat Engine",
          desc: "Exclusive Telegram MTProto integration eliminates recurring monthly cloud database & chat costs.",
        },
        {
          tag: "100% Offline Security",
          title: "Zero Gatekeeper Downtime",
          desc: "Cryptographic QR pass verification runs locally in sub-50ms with zero dependence on cellular connectivity.",
        },
        {
          tag: "Full IP Acquisition",
          title: "Source Code or SaaS License",
          desc: "Available for full intellectual property buyout or flexible enterprise licensing for property operators.",
        },
      ],
      cinematic: {
        eyebrow: "Immersive Cinematic Showcase",
        scrollHint: "Scroll down to navigate the platform story",
        dockTitle: "Core Architectural Pillars",
        scenes: [
          {
            id: "offline-first",
            stageNumber: "01",
            tag: "Architecture & Performance · Offline-First Engine",
            title: "0ms Instant Operations.",
            titleHighlight: "SQLite Local Master Built to Never Lag.",
            subtitle:
              "Every screen mutation and action executes instantly without blocking for server round-trips. Features SQLite Local Master architecture with optimistic mutations, background sync queues, and local cryptographic verification.",
            iconName: "Smartphone",
            videoSrc: "/assets/whatsunity/phone.mp4",
            posterSrc: "/assets/whatsunity/poster-phone.webp",
            accentColor: "#00e28a",
            glowColor: "rgba(0, 226, 138, 0.35)",
            keyStats: [
              { value: "0ms", label: "UI Mutation Latency", sub: "Instant Local Database" },
              { value: "100%", label: "Offline Availability", sub: "Zero Cellular Dependency" },
              { value: "Sub-50ms", label: "Conflict Resolution", sub: "Deterministic LWW Sync" },
            ],
            bulletPoints: [
              { title: "Instant response with zero loading spinners", desc: "0ms mutations for all actions with immediate local state save." },
              { title: "Resilient bi-directional sync engine", desc: "Queues and uploads changes automatically upon connection restore." },
            ],
            dockLabel: "Offline-First Engine",
            dockSub: "0ms Local Master",
          },
          {
            id: "community-hub",
            stageNumber: "02",
            tag: "Verified Resident Network · Community Hub",
            title: "Unit-Verified Neighbor Privacy.",
            titleHighlight: "Eliminate WhatsApp Group Chaos.",
            subtitle:
              "Unit-verified resident directory shields homeowner phone numbers against spam and legal liabilities. Enables official compound broadcasts, interactive HOA voting, and moderated discussions in a prestigious environment.",
            iconName: "Users",
            videoSrc: "/assets/whatsunity/community.mp4",
            posterSrc: "/assets/whatsunity/poster-community.webp",
            accentColor: "#3b82f6",
            glowColor: "rgba(59, 130, 246, 0.35)",
            keyStats: [
              { value: "100%", label: "Phone Number Privacy", sub: "Zero PII Exposure" },
              { value: "0", label: "Spam & Ad Harassment", sub: "Official Moderated Feeds" },
              { value: "48h", label: "Directory Provisioning", sub: "Batch CSV Onboarding" },
            ],
            bulletPoints: [
              { title: "Unit-linked verified phonebook", desc: "Structured neighbor communication without exposing private phone numbers." },
              { title: "Official announcements & HOA polls", desc: "Binding community voting and official management notifications." },
            ],
            dockLabel: "Verified Community Hub",
            dockSub: "Unit-Verified Network",
          },
          {
            id: "qr-security",
            stageNumber: "03",
            tag: "Perimeter Defense & Gatekeeper QR",
            title: "100% Offline Gate Security.",
            titleHighlight: "Cryptographic Passes Validated in Sub-50ms.",
            subtitle:
              "Cryptographically signed QR visitor passes containing unit IDs and expiration timestamps validate locally on guard tablets in sub-50ms. Frequent visitor CRM cuts courier gate times to 3 seconds, with instant blacklist alarms during total blackouts.",
            iconName: "ShieldCheck",
            videoSrc: "/assets/whatsunity/qr-security.mp4",
            posterSrc: "/assets/whatsunity/poster-qr-security.webp",
            accentColor: "#10b981",
            glowColor: "rgba(16, 185, 129, 0.35)",
            keyStats: [
              { value: "0.04s", label: "QR Validation Speed", sub: "Local Signature Matching" },
              { value: "0%", label: "Downtime on 4G Loss", sub: "24/7 Fail-Safe Access" },
              { value: "3 sec", label: "Frequent Visitor Check", sub: "Smart Guest CRM" },
            ],
            bulletPoints: [
              { title: "Tamper-proof signed passes", desc: "Cryptographic resident signatures with strict time-bounded validity." },
              { title: "Uninterrupted perimeter protection", desc: "Instant offline scanning at remote entrance booths and basement ramps." },
            ],
            dockLabel: "Cryptographic QR Security",
            dockSub: "100% Offline Gatekeeper",
          },
        ],
      },
    },
    caseStudy: {
      badge: "Commercial & Engineering Case Study",
      title: "Why Property Developers & HOAs Choose WhatsUnity",
      subtitle:
        "A strategic teardown of how modern compounds eliminate WhatsApp group liability, fortify perimeter security, drop facility maintenance turnaround by 78%, and eliminate monthly cloud server bills.",
      sections: {
        problem: {
          tag: "Operational & Legal Liabilities",
          title: "The True Cost of WhatsApp Groups and Fragile Cloud Software",
          desc: "Residential compounds and luxury towers face critical liabilities when relying on generic messaging apps and paper logbooks:",
          items: [
            {
              title: "Legal Liability & Privacy Leaks",
              desc: "WhatsApp groups expose resident phone numbers to strangers, opening compound management to privacy lawsuits and unsolicited marketing harassment.",
              icon: "MessageSquareOff",
            },
            {
              title: "Gate Lockouts in Offline Dead Zones",
              desc: "Guard booths and underground gates frequently lose 4G connectivity. Traditional cloud-dependent apps fail completely, stranding visitors and residents.",
              icon: "WifiOff",
            },
            {
              title: "Aggressive Per-Door Monthly SaaS Fees",
              desc: "Legacy property management software charges high monthly per-unit licensing fees, devouring compound maintenance reserves.",
              icon: "BadgePercent",
            },
            {
              title: "Unaccounted Maintenance & Parts Waste",
              desc: "Verbal and phone repair requests lead to duplicate spare parts invoices, unverified contractor hours, and zero accountability.",
              icon: "FileWarning",
            },
          ],
          contrast: {
            whatsappTitle: "The Status Quo: Community Chaos & Brand Degradation",
            whatsappPoints: [
              "Resident phone numbers exposed to all members without verification",
              "Gate access paralyzed when booth 4G signal drops or Wi-Fi lags",
              "Maintenance requests lost in hundreds of unmoderated group chats",
              "Zero contractor stopwatch timers or photographic proof of repair",
              "Negative resident sentiment eroding compound prestige and rental values",
            ],
            whatsunityTitle: "The WhatsUnity Advantage: Elevated Living & Financial Precision",
            whatsunityPoints: [
              "Unit-verified resident directory with complete phone number privacy",
              "100% offline cryptographic QR visitor verification in under 0.05 seconds",
              "5-role automated maintenance workflow with photographic before/after audits",
              "Active job timers and spare parts reconciliation signed off by Chief Engineers",
              "Premium white-label application boosting community value and resident loyalty",
            ],
          },
        },
        roles: {
          tag: "The 9-Role Persona Matrix",
          title: "A Unified Platform Harmonizing Every Compound Department",
          desc: "WhatsUnity provides bespoke UI workflows and permission boundaries tailored for each operational tier:",
          list: [
            {
              id: "resident",
              name: "Resident / Owner",
              subtitle: "Premium Living & Verified Neighbor Privacy",
              icon: "Home",
              responsibility: "Issue digital visitor QR passes, file maintenance reports with audio/photo proof, and engage in moderated community feeds.",
              features: ["Instant QR Passes", "Voice & Photo Issue Filing", "Verified Phonebook", "Official Community Polls"],
              offlineCapability: "Issue passes and browse directory from local SQLite cache with zero internet dependency.",
              shotKey: "home",
            },
            {
              id: "gatekeeper",
              name: "Gatekeeper / Security Guard",
              subtitle: "Fail-Safe Perimeter Security",
              icon: "ShieldCheck",
              responsibility: "Scan visitor QR codes, inspect license plates, maintain frequent visitor CRM, and log incidents.",
              features: ["100% Offline QR Scanner", "Guest CRM Directory", "Instant Blacklist Alert", "Plate Number Logging"],
              offlineCapability: "Validates cryptographic pass signatures locally in sub-50ms during total cellular blackouts.",
              shotKey: "qr",
            },
            {
              id: "supervisor",
              name: "Security & Ops Supervisor",
              subtitle: "Field Coordination & Shift Rosters",
              icon: "Eye",
              responsibility: "Manage security guard rosters, schedule NFC checkpoints, approve shift swap requests, and handle escalations.",
              features: ["Live Shift Roster", "Incident Control Room", "Shift Swap Approvals", "Security KPI Analytics"],
              offlineCapability: "Inspect rosters and record incident field notes with automatic synchronization upon reconnect.",
              shotKey: "controlRoom",
            },
            {
              id: "patrol",
              name: "Mobile Patrol Guard",
              subtitle: "Perimeter Safety & Physical Checkpoints",
              icon: "Compass",
              responsibility: "Conduct boundary inspections, scan NFC checkpoint tags, catalog Lost & Found items with RTL watermarks.",
              features: ["NFC Checkpoint Validation", "Lost & Found Catalog", "Photo Evidence Capture", "Emergency Dispatch"],
              offlineCapability: "Store patrol stamps and photos with trusted local timestamps even in deep basement garages.",
              shotKey: "patrolHub",
            },
            {
              id: "technician",
              name: "Maintenance Technician",
              subtitle: "Field Execution & Stopwatch Accountability",
              icon: "Wrench",
              responsibility: "Execute assigned work orders, run live job stopwatch timers, capture before/after photos, and request parts.",
              features: ["Trade-Filtered Work Orders", "Job Stopwatch Timer", "Before/After Photos", "Spare Parts Requisition"],
              offlineCapability: "Update job status and log parts inside elevator shafts and boiler rooms with zero network lag.",
              shotKey: "technicianOrders",
            },
            {
              id: "chief",
              name: "Chief Maintenance Engineer",
              subtitle: "Engineering Oversight & Quality Sign-Off",
              icon: "Gauge",
              responsibility: "Monitor active telemetry ribbons, balance technician workloads, approve parts requisitions, and sign off tickets.",
              features: ["Single-Row KPI Telemetry", "Technician Workload Meters", "Workdays & Holiday Calendar", "Final QA Approvals"],
              offlineCapability: "Review historical work orders and audit technician performance metrics directly from local cache.",
              shotKey: "chiefTeams",
            },
          ],
        },
        architecture: {
          tag: "Enterprise Engineering",
          title: "Clean Architecture Engineered for High Performance and Low Overhead",
          desc: "Engineered across three rigid layers with unidirectional data flow, completely eliminating code-generation in favor of native Dart 3 features:",
          principles: [
            {
              title: "0ms Instant UI Reaction",
              desc: "Mutations write immediately to the client's local SQLite database, delivering instantaneous UI responsiveness without network spinners.",
            },
            {
              title: "Strict Multi-Tenant Isolation",
              desc: "Dedicated databases per residential compound guarantee complete data segregation, enterprise privacy, and compliance.",
            },
            {
              title: "Direct Cloudflare R2 Edge Storage",
              desc: "Media attachments stream directly from device to edge storage over HTTP/3 via pre-signed URLs, bypassing backend CPU load.",
            },
          ],
          diagramTabs: [
            {
              id: "arch",
              label: "Multi-Tenant Topology",
              title: "Multi-Database Compound Isolation",
              desc: "Central system database for cross-compound user authentication paired with isolated databases per residential estate for strict data privacy.",
            },
            {
              id: "sync",
              label: "Offline Sync Engine",
              title: "Bidirectional Sync with Last-Write-Wins (LWW)",
              desc: "Mutations write locally with sync_state = dirty. A background worker batches changes and resolves conflicts deterministically.",
            },
            {
              id: "encryption",
              label: "Cryptographic Gate Pass",
              title: "Cryptographic QR Offline Validation",
              desc: "Guest passes carry tamper-proof cryptographic signatures validated on the gatekeeper's device without touching remote servers.",
            },
            {
              id: "tenancy",
              label: "Cloudflare R2 Direct Edge",
              title: "Direct Edge Storage Pipeline",
              desc: "Media attachments upload directly from client to Cloudflare R2 via HTTP/3 pre-signed PUT URLs, bypassing backend proxy bottlenecks.",
            },
          ],
          messagingDualEngine: {
            title: "Dual-Engine Messaging: Slash Cloud Infrastructure Costs to Zero",
            desc: "The messaging UI is fully decoupled from the transport protocol through an abstract ChatRepository interface:",
            telegramTitle: "Telegram MTProto Engine (Free Tier · $0 Cloud Bills)",
            telegramDesc:
              "Routes compound news and building groups via Telegram Bot & MTProto APIs, completely eliminating cloud database storage fees for budget communities.",
            appwriteTitle: "Appwrite Realtime Engine (Premium Tier)",
            appwriteDesc:
              "Sub-second WebSocket messaging with native typing indicators, presence tracking, and verified read receipts for luxury compounds.",
          },
          storagePipeline: {
            title: "Direct Edge Storage Pipeline",
            desc: "Client requests pre-signed PUT URLs from Appwrite Edge Functions, streaming photos and voice notes directly to Cloudflare R2 over HTTP/3.",
          },
        },
        maintenance: {
          tag: "Facility Governance",
          title: "A 5-Step Accountable State Machine Cutting Repair Cycles by 78%",
          desc: "Eliminates lost tickets, enforces technician transparency, and guarantees quality sign-off with photographic evidence:",
          steps: [
            {
              step: "01",
              actor: "Resident",
              title: "Ticket Submission & Media",
              desc: "Resident specifies location, category, and attaches voice notes or photos directly from the app camera.",
              sla: "Instant (0ms local)",
            },
            {
              step: "02",
              actor: "Coordinator",
              title: "Inbox Triage & Assignment",
              desc: "Automated report code generation (#MNT-1042), classification across 9 trades, and technician dispatch.",
              sla: "< 15 minutes",
            },
            {
              step: "03",
              actor: "Chief Engineer",
              title: "Workload Balancing & Telemetry",
              desc: "Inspect live coordinator status and balance technician workload meters (Green: Available, Blue: Optimal, Red: Loaded).",
              sla: "Live telemetry",
            },
            {
              step: "04",
              actor: "Technician",
              title: "Field Execution & Stopwatch",
              desc: "Technician clocks into work order, activates job timer, uploads before/after repair photos, and logs parts.",
              sla: "Priority-based SLA",
            },
            {
              step: "05",
              actor: "Chief Engineer",
              title: "Quality Review & Sign-Off",
              desc: "Chief inspects repair photos and parts requisitions, then gives final approval or orders rework with technical notes.",
              sla: "Formal closure",
            },
          ],
          chiefHubFeatures: [
            { title: "Single-Row KPI Telemetry", desc: "Real-time count of active tickets and urgent escalations." },
            { title: "Coordinator Operator Monitor", desc: "Alerts Chief Engineer to take over triage if coordinator is off-duty." },
            { title: "Interactive Workdays Calendar", desc: "Toggle compound workdays and holiday off-days to prevent mis-scheduling." },
            { title: "Spare Parts Audit Workflow", desc: "Verify supplier parts prices before charging residential accounts." },
          ],
        },
        security: {
          tag: "Security & Gatekeeping",
          title: "Perimeter Security Operational Even During Total Internet Outages",
          desc: "A fail-safe security ecosystem ensuring gated access never halts when fiber lines or cellular towers go down:",
          pillars: [
            {
              title: "Cryptographic Offline QR Passes",
              desc: "Passes contain unit IDs, expiration timestamps, and resident cryptographic signatures validated locally by guards.",
              icon: "QrCode",
            },
            {
              title: "Frequent Visitor CRM",
              desc: "Auto-catalogs regular delivery couriers and contractors, dropping gate verification time to under 3 seconds.",
              icon: "Users",
            },
            {
              title: "NFC Guard Patrol Checkpoints",
              desc: "Physical NFC tags placed at boundary perimeter zones require guards to physically tap-in during patrol rounds.",
              icon: "Radio",
            },
            {
              title: "Instant Blacklist Alerts",
              desc: "Local cross-matching against restricted individuals and license plates triggers instant alarms without network calls.",
              icon: "ShieldAlert",
            },
          ],
        },
        benchmarks: {
          tag: "Measurable Business ROI",
          title: "Empirical Telemetry: WhatsUnity vs Legacy Property Management",
          desc: "Real-world telemetry metrics demonstrating the massive leap in responsiveness, reliability, and cost reduction:",
          metrics: [
            { metric: "Client UI Mutation Latency", before: "420ms (Cloud Round-Trip)", after: "0ms (Local SQLite Master)", delta: "100% Instant" },
            { metric: "Gate Scanner Offline Survival", before: "0% (System Down)", after: "100% (Offline QR Validation)", delta: "Zero Downtime" },
            { metric: "Maintenance Turnaround Time", before: "48 - 72 Hours", after: "< 6 Hours", delta: "-78% Faster" },
            { metric: "Chat Cloud Infrastructure Cost", before: "$120 / month / compound", after: "$0 (Telegram Engine)", delta: "100% Free Tier" },
            { metric: "Patrol Checkpoint Compliance", before: "42% (Paper Logs)", after: "98.5% (NFC Verification)", delta: "+134% Integrity" },
          ],
        },
      },
    },
    interactiveHub: {
      tag: "Live Product Experience",
      title: "Explore the 20+ Screen Production Catalog & Executive Deck",
      subtitle: "Experience the real Flutter production screens across all operational roles, or review the executive pitch deck.",
      catalogCard: {
        title: "20+ Screen Interactive Catalog",
        desc: "Explore live production screens spanning resident portals, offline gate scanning, work orders, and incident control rooms.",
        btn: "Open 20+ Screen Catalog",
        screensCount: "20+ Live Screens",
      },
      deckCard: {
        title: "Executive Pitch Deck",
        desc: "Interactive slide presentation showcasing the platform's commercial value proposition, role-based workflows, and tech stack.",
        btn: "Launch Pitch Deck",
      },
    },
    aeo: {
      tag: "Technical Due Diligence (AEO)",
      title: "Structured Specifications for AI Agents & Enterprise Architects",
      subtitle:
        "Machine-readable technical specifications engineered for rapid architectural review, AI indexers (ChatGPT, Cursor, Gemini), and technical due diligence.",
      copyPromptBtn: "Copy Technical Prompt for AI Agents",
      copiedText: "Copied to clipboard successfully!",
      openLlmsTxt: "View /llms.txt File",
      openMarkdown: "Read Full /whatsunity.md Spec",
      specsTitle: "Enterprise Technical Specification Matrix",
      specs: [
        { key: "Target Platforms", value: "Flutter 3.x (iOS, Android, Web & Windows Multiplatform)" },
        { key: "Programming Language", value: "Dart 3 (Sealed Classes, Records, Pattern Matching, Zero Code-Gen)" },
        { key: "Architectural Pattern", value: "Clean Architecture (Domain, Data, Presentation) Unidirectional Flow" },
        { key: "State Management", value: "Dart 3 Cubits / BLoCs with sealed Result<T, Failure> types" },
        { key: "Client Primary Store", value: "SQLite Local Master (0ms Instant Mutations & Reactive Streams)" },
        { key: "Premium Realtime Messaging", value: "Appwrite Realtime WebSockets (Presence, Read Receipts, Typing)" },
        { key: "Free-Tier Messaging", value: "Telegram MTProto Bot API (Zero cloud database hosting fees)" },
        { key: "Edge Media Storage", value: "Cloudflare R2 Direct Edge Pipeline via pre-signed HTTP/3 PUT URLs" },
        { key: "Offline Security Verification", value: "Cryptographically signed QR passes with local timestamp verification" },
        { key: "Operational Roles", value: "9 Unified Personas (Residents, Guards, Patrol, Technicians, Supervisors, Chiefs, Admins)" },
      ],
    },
    faq: {
      tag: "Buyer & Property Developer FAQ",
      title: "Commercial & Technical Deployment Inquiries",
      subtitle: "Clear answers on turnaround times, white-labeling, hardware compatibility, and deployment pricing.",
      items: [
        {
          q: "How fast can WhatsUnity be deployed to our residential compound?",
          a: "A new compound can be fully provisioned, branded, and operational in under 48 hours. Resident unit directories can be batch-imported via CSV, gatekeeper devices provisioned with cryptographic keys, and maintenance staff onboarded instantly.",
        },
        {
          q: "Can the application be white-labeled with our property development branding?",
          a: "Yes. WhatsUnity is fully white-label ready. Property developers and management firms can deploy the application with their custom brand identity, app store listings, color palettes, and custom domain names.",
        },
        {
          q: "How does WhatsUnity solve offline dead zones at underground parking gates?",
          a: "WhatsUnity uses an offline-first SQLite Local Master architecture. Visitor QR codes carry tamper-proof cryptographic signatures with unit IDs and expiration timestamps that gatekeeper tablets validate locally in sub-50ms without connecting to any remote servers.",
        },
        {
          q: "How does the Telegram Dual-Engine eliminate cloud server bills?",
          a: "For budget-conscious HOAs, the Telegram MTProto Engine routes building announcements and community chat through Telegram's free global API infrastructure, eliminating cloud database storage and recurring bandwidth fees completely.",
        },
        {
          q: "How does the maintenance lifecycle eliminate contractor fraud and parts waste?",
          a: "WhatsUnity enforces a strict 5-tier state machine: tickets must include photo evidence, technicians must run an active stopwatch timer on-site, and spare parts requisitions require review and approval from the Chief Engineer before work orders can be signed off.",
        },
      ],
    },
    cta: {
      title: "Ready to Upgrade Your Residential Compound with WhatsUnity?",
      subtitle:
        "Eliminate WhatsApp chaos, fortify your gate perimeter, and run facility maintenance with military precision. Contact Noureldin directly to schedule a personalized demonstration, discuss white-labeling, or request a commercial quote.",
      primaryBtn: "Schedule a Live Demo & Consultation",
      secondaryBtn: "Explore 20+ Screen Production Catalog",
      portfolioBtn: "Return to Noureldin's Portfolio",
    },
  },
};
