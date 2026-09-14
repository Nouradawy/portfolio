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
      skipStory: string;
      mobileScrollCue: string;
      dockTitle: string;
      scenes: {
        id: string;
        stageNumber: string;
        tag: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        mobileTitle?: string;
        mobileSubtitle?: string;
        iconName: "Smartphone" | "Users" | "ShieldCheck" | "Zap" | "QrCode" | "Wrench";
        videoSrc: string;
        videoMobileSrc: string;
        posterSrc: string;
        posterMobileSrc: string;
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
      title: "WhatsUnity — منزل واحد. اشتراك واحد. عائلتك بالكامل مشمولة | نظام تشغيل الكمبوندات",
      description:
        "يحوّل WhatsUnity كمبوندك السكني إلى مجتمع مترابط، آمن، ومُدار رقمياً بالكامل. منزل واحد، اشتراك واحد، وكل أفراد أسرتك مشمولون — استبدل فوضى مجموعات الواتساب بنظام سكني موثق، وبوابات أمنية تعمل دون إنترنت بنسبة 100%، ودورة صيانة هندسية لـ 9 أدوار تشغيلية.",
      ogTitle: "WhatsUnity — منزل واحد. اشتراك واحد. عائلتك بالكامل مشمولة",
      ogDescription:
        "يحوّل WhatsUnity كمبوندك إلى مجتمع مترابط، آمن، ومُدار رقمياً بالكامل: تصاريح زوار مشفرة أوفلاين 100%، ومحرك مراسلة مزدوج موفر للتكاليف، وحوكمة صيانة شاملة.",
      badge: "منزل واحد · اشتراك واحد · عائلتك بالكامل مشمولة · B2B Compound OS v2.4",
    },
    nav: {
      caseStudy: "دراسة الحالة",
      architecture: "المعمارية",
      catalog: "الكتالوج (20+ شاشة)",
      backToPortfolio: "معرض الأعمال",
    },
    hero: {
      kicker: "منزل واحد · اشتراك واحد · عائلتك بالكامل مشمولة",
      titleLine1: "منزل واحد. اشتراك واحد.",
      titleHighlight: "عائلتك بالكامل مشمولة.",
      subtitle:
        "يحوّل WhatsUnity كمبوندك السكني إلى مجتمع مترابط، آمن، ومُدار رقمياً بالكامل. استبدل فوضى مجموعات الواتساب، وأعطال البوابات الأمنية، وفقدان طلبات الصيانة بنظام تشغيل عقاري متكامل. مبني بأعلى معايير Flutter و Clean Architecture، مع تشغيل أوفلاين 100%، وإدارة صيانة خماسية الأدوار، ودليل سكني موثق بالوحدات — جاهز للتطبيق في كمبوندك خلال 48 ساعة.",
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
          tag: "اشتراك عائلي شامل",
          title: "منزل واحد.. اشتراك واحد",
          desc: "ترخيص يغطي الوحدة السكنية كاملة بكافة أفرادها بدون أي رسوم إضافية على كل حساب.",
        },
        {
          tag: "مجتمع موثق وآمن",
          title: "مجتمع مترابط بخصوصية تامة",
          desc: "دليل سكني موثق بالوحدات يمنع فوضى الواتساب ويحمي خصوصية أرقام الهواتف بنسبة 100%.",
        },
        {
          tag: "100% أمان أوفلاين",
          title: "بوابات لا تتوقف أبداً",
          desc: "فحص تصاريح الزوار المشفرة محلياً على أجهزة الحراس دون أي تأثر بانقطاع الإنترنت.",
        },
        {
          tag: "إدارة رقمية متكاملة",
          title: "حوكمة تشغيلية لـ 9 أدوار",
          desc: "منظومة تربط السكان، وحراس البوابات، والدوريات، والفنيين، وكبار المهندسين في منصة واحدة.",
        },
      ],
      cinematic: {
        eyebrow: "استعراض سينمائي تفاعلي لجوهر المنظومة",
        scrollHint: "مرر للأسفل لاستكشاف رحلة المنظومة",
        skipStory: "تخطي إلى تفاصيل المنظومة",
        mobileScrollCue: "مرر للاستكشاف",
        dockTitle: "الركائز التشغيلية والتقنية",
        scenes: [
          {
            id: "offline-first",
            stageNumber: "01",
            tag: "مجتمع مترابط وتشغيل فوري · Connected & Instant OS",
            title: "يحوّل كمبوندك إلى مجتمع مترابط رقمياً.",
            titleHighlight: "استجابة فورية بلا أي تأخير.",
            mobileTitle: "مجتمع مترابط رقمياً",
            mobileSubtitle: "بنية SQLite محلية فائقة الاستجابة تعمل بلا انقطاع",
            subtitle:
              "WhatsUnity يحوّل الكمبوند إلى بيئة رقمية متكاملة تربط السكان، والأمن، والصيانة في منظومة واحدة. بفضل بنية SQLite Local Master، تتفاعل كل شاشة بلمح البصر دون أي انتظار للسيرفر مع طوابير مزامنة ذكية وتجربة استخدام خالية من أي بطء.",
            iconName: "Smartphone",
            videoSrc: "/assets/whatsunity/phone.mp4",
            videoMobileSrc: "/assets/whatsunity/phone-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-phone.webp",
            posterMobileSrc: "/assets/whatsunity/poster-phone-mobile.webp",
            accentColor: "#00e28a",
            glowColor: "rgba(0, 226, 138, 0.35)",
            keyStats: [
              { value: "0ms", label: "زمن استجابة الواجهة", sub: "قاعدة بيانات محلية فورية" },
              { value: "100%", label: "جاهزية تشغيل أوفلاين", sub: "بلا اعتمادية على الشبكة" },
              { value: "Sub-50ms", label: "سرعة فض التعارضات", sub: "خوارزمية LWW الذكية" },
            ],
            bulletPoints: [
              { title: "مجتمع مترابط واستجابة لحظية", desc: "استجابة فائقة السرعة لكافة العمليات وحفظ فوري محلياً دون شاشات تحميل." },
              { title: "مزامنة ذكية ثنائية الاتجاه", desc: "رفع التعديلات فور عودة الاتصال بمرونة وموثوقية تامة." },
            ],
            dockLabel: "مجتمع مترابط وفوري",
            dockSub: "Instant Local Master",
          },
          {
            id: "community-hub",
            stageNumber: "02",
            tag: "منزل واحد · اشتراك واحد · عائلتك بالكامل مشمولة",
            title: "منزل واحد. اشتراك واحد.",
            titleHighlight: "كل أفراد أسرتك مشمولون.",
            mobileTitle: "منزل واحد. اشتراك واحد.",
            mobileSubtitle: "عائلتك بالكامل مشمولة دون رسوم إضافية لكل حساب",
            subtitle:
              "اشتراك واحد يغطي الوحدة السكنية بالكامل دون رسوم إضافية لكل حساب. دليل موثق بالوحدات والعمارات يحمي خصوصية أرقام هواتف الملاك ويستبدل فوضى مجموعات الواتساب بقنوات رسمية وتصويتات معتمدة.",
            iconName: "Users",
            videoSrc: "/assets/whatsunity/community.mp4",
            videoMobileSrc: "/assets/whatsunity/community-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-community.webp",
            posterMobileSrc: "/assets/whatsunity/poster-community-mobile.webp",
            accentColor: "#3b82f6",
            glowColor: "rgba(59, 130, 246, 0.35)",
            keyStats: [
              { value: "100%", label: "حماية خصوصية الهواتف", sub: "عزل كامل لأرقام السكان" },
              { value: "0", label: "رسائل عشوائية وإعلانات", sub: "قنوات رسمية موثقة" },
              { value: "48 ساعة", label: "استيراد دليل الكمبوند", sub: "توليد الحسابات بالـ CSV" },
            ],
            bulletPoints: [
              { title: "ترخيص شامل لكافة أفراد الأسرة", desc: "اشتراك واحد للمنزل يتيح للجميع الاستخدام والتفاعل بحرية." },
              { title: "دليل موثق وقنوات رسمية", desc: "تواصل منظم بين الجيران وتصويتات رسمية دون كشف أرقام الهواتف." },
            ],
            dockLabel: "اشتراك المنزل والأسرة",
            dockSub: "Whole Household",
          },
          {
            id: "qr-security",
            stageNumber: "03",
            tag: "بوابات أمنية وإدارة رقمية محكمة · Secure & Managed",
            title: "مجتمع آمن ومُدار رقمياً بالكامل.",
            titleHighlight: "فحص تصاريح QR مشفرة 100% دون إنترنت.",
            mobileTitle: "أمان وبوابات أوفلاين 100%",
            mobileSubtitle: "فحص تصاريح QR مشفرة في 0.04 ثانية دون الحاجة لشبكة",
            subtitle:
              "بوابات أمنية محصنة لا تتوقف حتى في الانقطاع التام لشبكة 4G. تصاريح زوار مشفرة بطابع زمني ورقم الوحدة تُفحص محلياً على أجهزة الحراس في أقل من 0.04 ثانية، مع سجل زوار CRM ودورة صيانة هندسية خماسية الأدوار.",
            iconName: "ShieldCheck",
            videoSrc: "/assets/whatsunity/qr-security.mp4",
            videoMobileSrc: "/assets/whatsunity/qr-security-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-qr-security.webp",
            posterMobileSrc: "/assets/whatsunity/poster-qr-security-mobile.webp",
            accentColor: "#10b981",
            glowColor: "rgba(16, 185, 129, 0.35)",
            keyStats: [
              { value: "0.04s", label: "سرعة التحقق من التصريح", sub: "مطابقة التوقيع الرقمي محلياً" },
              { value: "0%", label: "توقف عند انقطاع 4G", sub: "تشغيل أمني مستمر 24/7" },
              { value: "3 ثوانٍ", label: "زمن عبور الزائر المتردد", sub: "سجل Guest CRM الذكي" },
            ],
            bulletPoints: [
              { title: "تصاريح مشفرة غير قابلة للتزوير", desc: "توقيع رقمي موثوق مع طابع زمني دقيق للزيارة." },
              { title: "إدارة رقمية متكاملة للعمليات", desc: "رقابة أمنية وحوكمة صيانة خماسية الأدوار بإشراف كبار المهندسين." },
            ],
            dockLabel: "أمان وإدارة رقمية",
            dockSub: "100% Offline QR Gate",
          },
          {
            id: "maintenance-ops",
            stageNumber: "04",
            tag: "الهندسة والصيانة والتشغيل · Facility & Maintenance Engineering",
            title: "حوكمة هندسية شاملة لمرافق الكمبوند.",
            titleHighlight: "إدارة متكاملة لبلاغات الأعطال وأوامر العمل عبر التطبيق.",
            mobileTitle: "حوكمة الصيانة وبلاغات المرافق",
            mobileSubtitle: "دورة صيانة رقمية عبر التطبيق تخفض زمن الإصلاح وتمنع الهدر",
            subtitle:
              "إدارة رقمية متكاملة لدورة الصيانة تربط منسق الصيانة، والفنيين، وكبير المهندسين في تطبيق واحد. إرسال بلاغات مصورة بضغطة واحدة، وتوجيه آلي للأوامر الهندسية، مع متابعة لحظية تخفض زمن إنجاز الأعطال بنسبة 78% وتمنع الهدر المالي.",
            iconName: "Wrench",
            videoSrc: "/assets/whatsunity/maintenance.mp4",
            videoMobileSrc: "/assets/whatsunity/maintenance-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-maintenance.webp",
            posterMobileSrc: "/assets/whatsunity/poster-maintenance-mobile.webp",
            accentColor: "#f59e0b",
            glowColor: "rgba(245, 158, 11, 0.35)",
            keyStats: [
              { value: "-78%", label: "انخفاض زمن الإصلاح", sub: "من 72 إلى أقل من 6 ساعات" },
              { value: "0", label: "فقدان لبلاغات الصيانة", sub: "أوامر عمل مرقمة وموثقة" },
              { value: "5 أدوار", label: "حوكمة الدورة الهندسية", sub: "من البلاغ حتى اعتماد الاستشاري" },
            ],
            bulletPoints: [
              { title: "بلاغات مصورة وتعيين تلقائي", desc: "إرسال صورة العطل أو المقطع بضغطة زر وتوجيه أمر العمل للفني المختص عبر التطبيق." },
              { title: "اعتماد كبير المهندسين وخزينة الميزانية", desc: "إغلاق التذكرة بتوقيع رقمي ومطابقة ميزانية الوديعة مع تقارير الجودة." },
            ],
            dockLabel: "حوكمة وهندسة الصيانة",
            dockSub: "Digital Work Orders",
          },
        ],
      },
    },
    caseStudy: {
      badge: "دراسة حالة تجارية وهندسية شاملة",
      title: "لماذا يختار المطورون العقاريون منظومة WhatsUnity؟",
      subtitle:
        "تحليل استراتيجي لكيفية تحويل الكمبوند إلى مجتمع مترابط، آمن، ومُدار رقمياً: باشتراك واحد يغطي كافة أفراد الأسرة لكل وحدة، وبوابات أوفلاين 100%، وخفض تكاليف الصيانة بنسبة 78% مع التخلص التام من رسوم الخوادم الشهرية المرهقة.",
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
              "رسوم اشتراك مجحفة لكل حساب تزيد من الأعباء المالية",
              "طلبات الصيانة تضيع وسط مئات الرسائل العشوائية والجدل اليومي",
              "انطباع سلبي للملاك والزوار يقلل من القيمة الاستثمارية للكمبوند",
            ],
            whatsunityTitle: "الحل مع WhatsUnity: مجتمع مترابط، آمن، ومُدار رقمياً",
            whatsunityPoints: [
              "منزل واحد. اشتراك واحد. كل أفراد الأسرة مشمولون دون أي تكلفة إضافية",
              "دليل سكني موثق بالوحدات والعمارات مع خصوصية مطلقة لأرقام الهواتف",
              "فحص وتوثيق تصاريح الزوار QR محلياً 100% في أقل من 0.05 ثانية",
              "دورة صيانة هندسية آلية من الإبلاغ حتى مراجعة واعتماد مهندس الموقع",
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
          q: "ماذا يعني «منزل واحد. اشتراك واحد. عائلتك بالكامل مشمولة»؟",
          a: "يعتمد WhatsUnity نموذج تسعير عادلاً ومريحاً لكل وحدة سكنية (Per-Home) وليس لكل مستخدم (Per-User). يغطي الاشتراك الواحد الشقة أو الفيلا بالكامل، ويستطيع المالك دعوة جميع أفراد الأسرة مجاناً لاستخدام التطبيق، وإصدار تصاريح الزوار، والتواصل مع الجيران، وطلب خدمات الصيانة دون أي مصاريف إضافية.",
        },
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
      title: "جاهز لتحويل كمبوندك إلى مجتمع مترابط، آمن، ومُدار رقمياً؟",
      subtitle:
        "منزل واحد. اشتراك واحد. عائلتك بالكامل مشمولة. تخلص من صداع مجموعات الواتساب، وأوقف الاختراقات الأمنية عند البوابات، واضبط عمليات الصيانة بدقة هندسية متناهية. تواصل الآن لحجز جلسة استعراض حي وبحث متطلبات كمبوندك.",
      primaryBtn: "احجز جلسة استعراض حي (Schedule Live Demo)",
      secondaryBtn: "تصفح كتالوج الشاشات الكامل",
      portfolioBtn: "معرض أعمال المهندس نور العدوي",
    },
  },
  en: {
    meta: {
      title: "WhatsUnity — One Home. One Subscription. Your Entire Household Included | Compound OS",
      description:
        "WhatsUnity turns your compound into a connected, secure, digitally managed community. One home. One subscription. Your entire household included — with 100% offline QR gate security, unit-verified resident directories, and automated 9-role maintenance workflows.",
      ogTitle: "WhatsUnity — One Home. One Subscription. Your Entire Household Included",
      ogDescription:
        "WhatsUnity turns your compound into a connected, secure, digitally managed community. Turnkey property OS: 100% offline QR gate passes, dual-engine messaging, and household-inclusive licensing.",
      badge: "One Home · One Subscription · Whole Household Included · Compound OS v2.4",
    },
    nav: {
      caseStudy: "Case Study",
      architecture: "Architecture",
      catalog: "Catalog (20+ Screens)",
      backToPortfolio: "Portfolio",
    },
    hero: {
      kicker: "ONE HOME · ONE SUBSCRIPTION · YOUR ENTIRE HOUSEHOLD INCLUDED",
      titleLine1: "One home. One subscription.",
      titleHighlight: "Your entire household included.",
      subtitle:
        "WhatsUnity turns your compound into a connected, secure, digitally managed community. Replace noisy WhatsApp groups, vulnerable gate security, and chaotic paper logs with an offline-first operating system engineered in Flutter Clean Architecture — ready to deploy to your community in 48 hours.",
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
          tag: "Household License",
          title: "One Home, Whole Family",
          desc: "One transparent subscription covers the entire home. Add all family members at zero extra cost.",
        },
        {
          tag: "Connected Community",
          title: "Connected & Private Hub",
          desc: "Unit-verified resident directory eliminates WhatsApp chaos while keeping phone numbers 100% private.",
        },
        {
          tag: "100% Offline Security",
          title: "Zero Gatekeeper Downtime",
          desc: "Cryptographic QR pass verification runs locally in sub-50ms with zero dependence on cellular connectivity.",
        },
        {
          tag: "Digitally Managed",
          title: "9-Role Operational Governance",
          desc: "Unifies residents, security guards, technicians, and chief engineers into one synchronized platform.",
        },
      ],
      cinematic: {
        eyebrow: "Immersive Cinematic Showcase",
        scrollHint: "Scroll down to navigate the platform story",
        skipStory: "Skip to Case Study",
        mobileScrollCue: "Scroll to explore",
        dockTitle: "Core Architectural Pillars",
        scenes: [
          {
            id: "offline-first",
            stageNumber: "01",
            tag: "Connected & Instant OS · Offline-First Engine",
            title: "Turns your compound into a connected community.",
            titleHighlight: "Instant Zero-Delay Operations.",
            mobileTitle: "Connected & Instant OS",
            mobileSubtitle: "Zero-latency local SQLite master with optimistic sync",
            subtitle:
              "WhatsUnity turns your compound into a connected, secure, digitally managed community. Every screen mutation executes instantaneously without blocking for server round-trips via SQLite Local Master architecture with optimistic sync queues.",
            iconName: "Smartphone",
            videoSrc: "/assets/whatsunity/phone.mp4",
            videoMobileSrc: "/assets/whatsunity/phone-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-phone.webp",
            posterMobileSrc: "/assets/whatsunity/poster-phone-mobile.webp",
            accentColor: "#00e28a",
            glowColor: "rgba(0, 226, 138, 0.35)",
            keyStats: [
              { value: "0ms", label: "UI Mutation Latency", sub: "Instant Local Database" },
              { value: "100%", label: "Offline Availability", sub: "Zero Cellular Dependency" },
              { value: "Sub-50ms", label: "Conflict Resolution", sub: "Deterministic LWW Sync" },
            ],
            bulletPoints: [
              { title: "Instant response with zero loading spinners", desc: "Instant mutations for all actions with immediate local state save." },
              { title: "Resilient bi-directional sync engine", desc: "Queues and uploads changes automatically upon connection restore." },
            ],
            dockLabel: "Connected & Instant OS",
            dockSub: "Instant Local Master",
          },
          {
            id: "community-hub",
            stageNumber: "02",
            tag: "One Home · One Subscription · Whole Household Included",
            title: "One home. One subscription.",
            titleHighlight: "Your entire household included.",
            mobileTitle: "One Home. One Subscription.",
            mobileSubtitle: "Your entire household included on one plan",
            subtitle:
              "One transparent subscription covers your entire unit without per-person add-on fees. Unit-verified resident directories protect homeowner phone numbers and replace noisy WhatsApp groups with official broadcasts and HOA polls.",
            iconName: "Users",
            videoSrc: "/assets/whatsunity/community.mp4",
            videoMobileSrc: "/assets/whatsunity/community-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-community.webp",
            posterMobileSrc: "/assets/whatsunity/poster-community-mobile.webp",
            accentColor: "#3b82f6",
            glowColor: "rgba(59, 130, 246, 0.35)",
            keyStats: [
              { value: "100%", label: "Phone Number Privacy", sub: "Zero PII Exposure" },
              { value: "0", label: "Spam & Ad Harassment", sub: "Official Moderated Feeds" },
              { value: "48h", label: "Directory Provisioning", sub: "Batch CSV Onboarding" },
            ],
            bulletPoints: [
              { title: "Whole household included on one plan", desc: "One unit subscription covers all family members with verified individual logins." },
              { title: "Official announcements & HOA polls", desc: "Binding community voting and official management notifications." },
            ],
            dockLabel: "Whole Household Hub",
            dockSub: "Whole Household",
          },
          {
            id: "qr-security",
            stageNumber: "03",
            tag: "Perimeter Defense & Digitally Managed Ops",
            title: "A secure, digitally managed community.",
            titleHighlight: "100% Offline Cryptographic QR Gate.",
            mobileTitle: "100% Offline Gate Security",
            mobileSubtitle: "Signed QR visitor passes verified locally in sub-50ms",
            subtitle:
              "Fail-safe gate security operational even during complete network blackouts. Cryptographically signed QR visitor passes validate locally in sub-50ms with frequent visitor CRM and automated 5-step maintenance governance.",
            iconName: "ShieldCheck",
            videoSrc: "/assets/whatsunity/qr-security.mp4",
            videoMobileSrc: "/assets/whatsunity/qr-security-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-qr-security.webp",
            posterMobileSrc: "/assets/whatsunity/poster-qr-security-mobile.webp",
            accentColor: "#10b981",
            glowColor: "rgba(16, 185, 129, 0.35)",
            keyStats: [
              { value: "0.04s", label: "QR Validation Speed", sub: "Local Signature Matching" },
              { value: "0%", label: "Downtime on 4G Loss", sub: "24/7 Fail-Safe Access" },
              { value: "3 sec", label: "Frequent Visitor Check", sub: "Smart Guest CRM" },
            ],
            bulletPoints: [
              { title: "Tamper-proof signed passes", desc: "Cryptographic resident signatures with strict time-bounded validity." },
              { title: "Digitally managed operations", desc: "5-role maintenance lifecycle with stopwatch timers and Chief Engineer sign-offs." },
            ],
            dockLabel: "Secure & Managed Ops",
            dockSub: "100% Offline Gatekeeper",
          },
          {
            id: "maintenance-ops",
            stageNumber: "04",
            tag: "Facility & Maintenance Engineering · Compound OS",
            title: "Comprehensive engineering governance for compound facilities.",
            titleHighlight: "One-tap tickets & automated digital work orders via app.",
            mobileTitle: "Automated Facility Maintenance",
            mobileSubtitle: "App-driven workflows cutting repair times by 78%",
            subtitle:
              "A unified digital maintenance ecosystem managing 3 operational tiers: Maintenance Coordinator, Field Technicians, and Chief Engineer through the app. Report issues with media in one tap, route automated work orders, and track repairs in real-time, cutting turnaround time by 78% while eliminating budget leakage.",
            iconName: "Wrench",
            videoSrc: "/assets/whatsunity/maintenance.mp4",
            videoMobileSrc: "/assets/whatsunity/maintenance-mobile.mp4",
            posterSrc: "/assets/whatsunity/poster-maintenance.webp",
            posterMobileSrc: "/assets/whatsunity/poster-maintenance-mobile.webp",
            accentColor: "#f59e0b",
            glowColor: "rgba(245, 158, 11, 0.35)",
            keyStats: [
              { value: "-78%", label: "Turnaround Time Drop", sub: "From 72h to <6h average" },
              { value: "0", label: "Lost Maintenance Requests", sub: "Numbered audited work orders" },
              { value: "5 Roles", label: "Engineering Governance", sub: "Issue to consultant sign-off" },
            ],
            bulletPoints: [
              { title: "One-Tap Media Tickets", desc: "Instant photo/video fault reporting with automated technician assignment through the app." },
              { title: "Chief Engineer Sign-off & Reserve Fund", desc: "Digital sign-off with audit-ready expense logging against reserve funds." },
            ],
            dockLabel: "Facility Maintenance",
            dockSub: "Digital Work Orders",
          },
        ],
      },
    },
    caseStudy: {
      badge: "Commercial & Engineering Case Study",
      title: "Why Property Developers & HOAs Choose WhatsUnity",
      subtitle:
        "A strategic teardown of how WhatsUnity turns residential compounds into connected, secure, digitally managed communities with a single subscription covering the entire household, 100% offline gatekeeping, and 78% faster maintenance.",
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
              "Unfair per-account pricing ballooning recurring operational expenses",
              "Maintenance requests lost in hundreds of unmoderated group chats",
              "Negative resident sentiment eroding compound prestige and rental values",
            ],
            whatsunityTitle: "The WhatsUnity Advantage: Connected, Secure & Digitally Managed",
            whatsunityPoints: [
              "One home, one subscription: your entire household included with zero per-user licensing fees",
              "Unit-verified resident directory with complete phone number privacy",
              "100% offline cryptographic QR visitor verification in under 0.05 seconds",
              "5-role automated maintenance workflow with photographic before/after audits",
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
          q: "What does 'One home. One subscription. Your entire household included' mean?",
          a: "WhatsUnity licenses per residential unit rather than charging individual per-user fees. A single subscription covers the entire household, allowing the homeowner to invite family members at zero extra cost — everyone gets their own verified access, QR guest passes, maintenance filing, and community features under one plan.",
        },
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
      title: "Ready to Turn Your Compound into a Connected, Secure, Digitally Managed Community?",
      subtitle:
        "One home. One subscription. Your entire household included. Eliminate WhatsApp chaos, fortify your gate perimeter, and run facility maintenance with military precision. Contact Noureldin directly to schedule a live demonstration.",
      primaryBtn: "Schedule a Live Demo & Consultation",
      secondaryBtn: "Explore 20+ Screen Production Catalog",
      portfolioBtn: "Return to Noureldin's Portfolio",
    },
  },
};
