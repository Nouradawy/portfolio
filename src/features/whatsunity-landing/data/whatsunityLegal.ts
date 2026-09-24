export type LegalDocType = "privacy" | "terms";
export type LegalLocale = "ar" | "en";

export interface LegalSection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    subtitle: string;
    points: string[];
  }[];
  tableData?: {
    service: string;
    purpose: string;
    linkText: string;
    url: string;
  }[];
}

export interface LegalDocument {
  type: LegalDocType;
  title: string;
  badge: string;
  effectiveDate: string;
  serviceProvider: string;
  supportEmail: string;
  summary: string;
  rawMarkdown: string;
  sections: LegalSection[];
}

export interface LegalData {
  privacy: Record<LegalLocale, LegalDocument>;
  terms: Record<LegalLocale, LegalDocument>;
  ui: Record<
    LegalLocale,
    {
      legalCenterTitle: string;
      legalCenterSubtitle: string;
      privacyTab: string;
      termsTab: string;
      effectiveDateLabel: string;
      lastUpdated: string;
      quickJump: string;
      searchPlaceholder: string;
      noResults: string;
      printDoc: string;
      copyMarkdown: string;
      copied: string;
      downloadRaw: string;
      close: string;
      officialNotice: string;
      subprocessorsTitle: string;
      footerPrivacy: string;
      footerTerms: string;
      compliancePill: string;
      securityNotice: string;
    }
  >;
}

export const whatsunityLegalData: LegalData = {
  ui: {
    ar: {
      legalCenterTitle: "مركز السياسات والحوكمة القانونية",
      legalCenterSubtitle:
        "الوثائق الرسمية لسياسة الخصوصية والشروط والأحكام الخاصة بمنظومة WhatsUnity السكنية.",
      privacyTab: "سياسة الخصوصية (Privacy Policy)",
      termsTab: "الشروط والأحكام (Terms & Conditions)",
      effectiveDateLabel: "تاريخ السريان والنفاذ",
      lastUpdated: "30 أبريل 2026",
      quickJump: "الانتقال السريع للبنود",
      searchPlaceholder: "ابحث في بنود الوثيقة (مثل: Appwrite، الملكية، Google Play)...",
      noResults: "لم يتم العثور على بنود تطابق بحثك",
      printDoc: "طباعة الوثيقة الرسمية",
      copyMarkdown: "نسخ نص Markdown",
      copied: "تم النسخ بنجاح!",
      downloadRaw: "تحميل الملف الأصلي",
      close: "إغلاق النافذة",
      officialNotice:
        "تخضع هذه السياسة لأحكام حماية البيانات والشفافية. للاستفسارات القانونية: support@whatsunity.work.gd",
      subprocessorsTitle: "مزودو الخدمات ومعالجو البيانات الخارجيون (Third-Party Subprocessors)",
      footerPrivacy: "سياسة الخصوصية",
      footerTerms: "الشروط والأحكام",
      compliancePill: "حماية بيانات معتمدة · تخزين مشفر · بدون إعلانات",
      securityNotice: "تخزين المستندات مشفر في حاوية Appwrite Storage مقيدة مع ضوابط وصول صارمة.",
    },
    en: {
      legalCenterTitle: "Legal & Privacy Governance Center",
      legalCenterSubtitle:
        "Official Privacy Policy and Terms & Conditions documentation for WhatsUnity Compound OS.",
      privacyTab: "Privacy Policy",
      termsTab: "Terms & Conditions",
      effectiveDateLabel: "Effective Date",
      lastUpdated: "April 30, 2026",
      quickJump: "Jump to Clause",
      searchPlaceholder: "Search clauses (e.g., Appwrite, Residency, Google Play)...",
      noResults: "No clauses found matching your search",
      printDoc: "Print Legal Copy",
      copyMarkdown: "Copy Markdown Text",
      copied: "Copied to Clipboard!",
      downloadRaw: "Download Raw File",
      close: "Close Window",
      officialNotice:
        "Subject to privacy protection regulations. Direct legal inquiry: support@whatsunity.work.gd",
      subprocessorsTitle: "Authorized Third-Party Service Providers & Subprocessors",
      footerPrivacy: "Privacy Policy",
      footerTerms: "Terms & Conditions",
      compliancePill: "Verified Privacy · Zero Ads · Encrypted Vault",
      securityNotice:
        "All verification records are encrypted and stored in restricted Appwrite Storage buckets.",
    },
  },
  privacy: {
    en: {
      type: "privacy",
      title: "Privacy Policy",
      badge: "Compliance & Data Governance v2.0",
      effectiveDate: "2026-04-30",
      serviceProvider: "Nour Adawy",
      supportEmail: "support@whatsunity.work.gd",
      summary:
        "This Privacy Policy explains how WhatsUnity ('the Application'), developed by Nour Adawy ('the Service Provider'), collects, uses, and protects your information across Appwrite Cloud, SQLite, Cloudflare R2, Gumlet, and Firebase.",
      rawMarkdown: `# Privacy Policy

**Effective Date: 2026-04-30**

This Privacy Policy explains how WhatsUnity ("the Application"), developed by Nour Adawy ("the Service Provider"), collects, uses, and protects your information.

## 1. Information Collection and Use
We collect information necessary to provide a secure and efficient community management experience:
*   **Personal Identity:** Full Name, Username, Phone Number, Email Address.
*   **Residency Details:** Owner/Tenant status, Apartment Number, Building Number, and Compound ID.
*   **Media Assets:** The app requires frequent access to your device's photo and video gallery (via \`READ_MEDIA_IMAGES\` and \`READ_MEDIA_VIDEO\` permissions) to enable core features like sharing multiple media files in community chat, uploading videos/photos for maintenance tickets, and setting profile pictures.
*   **Device Data:** IP address, operating system, and unique device identifiers for push notifications.
*   **Billing & Subscriptions:** For premium community plans and in-app purchases, transactions are processed securely through Google Play Billing. We do not collect or store your raw credit card information. We only store purchase verification tokens provided by Google Play to grant access to premium features.

## 2. Residency Verification
To maintain community security, we may request **Proof of Ownership** (utility bills, contracts, or deeds).
*   **Storage:** These documents are stored in a restricted **Appwrite Storage** bucket with strict access controls.
*   **Access:** Only authorized community administrators and system auditors can view these files.
*   **Purpose:** Exclusively used to resolve residency conflicts and verify unit occupancy.

## 3. Data Storage & Third-Party Services
WhatsUnity utilizes a multi-layered storage strategy to ensure high performance and offline availability:
*   **Appwrite Cloud:** Our primary backend for authentication, databases, and realtime sync.
*   **SQLite (Local):** Your data is cached locally on your device to support offline functionality.
*   **Cloudflare R2:** Used for hosting static files (images, PDFs, documents).
*   **Gumlet:** Used for processing and streaming high-quality voice notes and video messages.
*   **Firebase/FCM:** Used for delivering push notifications to Android and iOS devices.

## 4. Location Data
The Application may collect device location data to provide compound-specific recommendations and verify community proximity. You can manage location permissions through your device settings.

## 5. User Content Rights
You retain ownership of all content you upload. By using the Application, you grant us a license to store, process, and display this content within your specific community context. We do not sell your personal data to third-party advertisers.

## 6. Security
We implement industry-standard encryption and procedural safeguards to protect your data. This includes SSL/TLS for data in transit and AES encryption for sensitive documents stored in our cloud buckets.

## 7. Contact Us
If you have questions regarding your privacy or wish to request data deletion, please contact us at:
**Email:** support@whatsunity.work.gd`,
      sections: [
        {
          id: "scope",
          title: "1. Scope & Service Provider",
          content: [
            'This Privacy Policy explains how WhatsUnity ("the Application"), developed by Nour Adawy ("the Service Provider"), collects, uses, and protects your information.',
          ],
        },
        {
          id: "collection",
          title: "2. Information Collection and Use",
          content: [
            "We collect information necessary to provide a secure and efficient community management experience:",
          ],
          subsections: [
            {
              subtitle: "Data Categories & Device Permissions",
              points: [
                "Personal Identity: Full Name, Username, Phone Number, Email Address.",
                "Residency Details: Owner/Tenant status, Apartment Number, Building Number, and Compound ID.",
                "Media Assets: The app requires frequent access to your device's photo and video gallery (via READ_MEDIA_IMAGES and READ_MEDIA_VIDEO permissions) to enable core features like sharing multiple media files in community chat, uploading videos/photos for maintenance tickets, and setting profile pictures.",
                "Device Data: IP address, operating system, and unique device identifiers for push notifications.",
                "Billing & Subscriptions: For premium community plans and in-app purchases, transactions are processed securely through Google Play Billing. We do not collect or store your raw credit card information. We only store purchase verification tokens provided by Google Play to grant access to premium features.",
              ],
            },
          ],
        },
        {
          id: "verification",
          title: "3. Residency Verification",
          content: [
            "To maintain community security, we may request Proof of Ownership (utility bills, contracts, or deeds).",
          ],
          subsections: [
            {
              subtitle: "Appwrite Storage & Strict Access Controls",
              points: [
                "Storage: These documents are stored in a restricted Appwrite Storage bucket with strict access controls.",
                "Access: Only authorized community administrators and system auditors can view these files.",
                "Purpose: Exclusively used to resolve residency conflicts and verify unit occupancy.",
              ],
            },
          ],
        },
        {
          id: "storage-third-parties",
          title: "4. Data Storage & Third-Party Services",
          content: [
            "WhatsUnity utilizes a multi-layered storage strategy to ensure high performance and offline availability:",
          ],
          tableData: [
            {
              service: "Appwrite Cloud",
              purpose: "Primary backend for authentication, databases, and realtime sync.",
              linkText: "appwrite.io/privacy",
              url: "https://appwrite.io/privacy",
            },
            {
              service: "SQLite (Local)",
              purpose: "Local device caching enabling 100% offline QR gate verification and work orders.",
              linkText: "sqlite.org",
              url: "https://www.sqlite.org/copyright.html",
            },
            {
              service: "Cloudflare R2",
              purpose: "Hosting static files, documents, floorplans, and PDFs with global edge distribution.",
              linkText: "cloudflare.com/privacypolicy",
              url: "https://www.cloudflare.com/privacypolicy/",
            },
            {
              service: "Gumlet",
              purpose: "Processing, compressing, and streaming high-quality voice notes and video messages.",
              linkText: "gumlet.com/privacy-policy",
              url: "https://www.gumlet.com/privacy-policy/",
            },
            {
              service: "Firebase / FCM",
              purpose: "Delivering reliable push notifications to Android and iOS devices.",
              linkText: "firebase.google.com/support/privacy",
              url: "https://firebase.google.com/support/privacy",
            },
            {
              service: "Google Play Billing",
              purpose: "Secure tokenized transactions for community subscriptions and premium features.",
              linkText: "policies.google.com/privacy",
              url: "https://policies.google.com/privacy",
            },
          ],
        },
        {
          id: "location",
          title: "5. Location Data",
          content: [
            "The Application may collect device location data to provide compound-specific recommendations and verify community proximity. You can manage location permissions through your device settings.",
          ],
        },
        {
          id: "user-rights",
          title: "6. User Content Rights",
          content: [
            "You retain ownership of all content you upload.",
            "By using the Application, you grant us a license to store, process, and display this content within your specific community context.",
            "We do not sell your personal data to third-party advertisers.",
          ],
        },
        {
          id: "security",
          title: "7. Security Safeguards",
          content: [
            "We implement industry-standard encryption and procedural safeguards to protect your data.",
            "This includes SSL/TLS for data in transit and AES encryption for sensitive documents stored in our cloud buckets.",
          ],
        },
        {
          id: "contact",
          title: "8. Contact Us",
          content: [
            "If you have questions regarding your privacy or wish to request data deletion, please contact us at:",
            "Email: support@whatsunity.work.gd",
          ],
        },
      ],
    },
    ar: {
      type: "privacy",
      title: "سياسة الخصوصية",
      badge: "الحوكمة وحماية البيانات v2.0",
      effectiveDate: "2026-04-30",
      serviceProvider: "نور عدوي (Nour Adawy)",
      supportEmail: "support@whatsunity.work.gd",
      summary:
        "توضح سياسة الخصوصية هذه كيفية قيام WhatsUnity، الذي طوره نور عدوي، بجمع معلوماتك واستخدامها وحمايتها عبر Appwrite Cloud و SQLite و Cloudflare R2 و Gumlet و Firebase.",
      rawMarkdown: `# سياسة الخصوصية

**تاريخ النفاذ: 30 أبريل 2026**

توضح سياسة الخصوصية هذه كيفية قيام WhatsUnity ("التطبيق")، الذي طوره نور عدوي ("مقدم الخدمة")، بجمع معلوماتك واستخدامها وحمايتها.

## 1. جمع المعلومات واستخدامها
نقوم بجمع المعلومات اللازمة لتوفير تجربة آمنة وفعالة لإدارة المجتمع:
*   **الهوية الشخصية:** الاسم الكامل، اسم المستخدم، رقم الهاتف، وعنوان البريد الإلكتروني.
*   **تفاصيل الإقامة:** حالة المالك/المستأجر، رقم الشقة، رقم المبنى، ومعرف المجمع السكني (Compound ID).
*   **الوسائط:** يتطلب التطبيق وصولاً متكرراً ومستمراً إلى معرض الصور ومقاطع الفيديو على جهازك (عبر أذونات \`READ_MEDIA_IMAGES\` و \`READ_MEDIA_VIDEO\`) لتمكين الميزات الأساسية مثل مشاركة ملفات وسائط متعددة في دردشة المجتمع، ورفع مقاطع الفيديو/الصور لتقارير الصيانة، وتعيين صور الملف الشخصي.
*   **بيانات الجهاز:** عنوان IP، نظام التشغيل، ومعرفات الجهاز الفريدة لإشعارات التنبيه.
*   **الفواتير والاشتراكات:** بالنسبة لخطط المجتمع المدفوعة والمشتريات داخل التطبيق، تتم معالجة المعاملات بشكل آمن عبر Google Play Billing. نحن لا نجمع أو نخزن معلومات بطاقة الائتمان الخاصة بك. نحن نقوم فقط بتخزين رموز التحقق من الشراء المقدمة من Google Play لمنح الوصول إلى الميزات المدفوعة.

## 2. التحقق من الإقامة
للحفاظ على أمن المجتمع، قد نطلب **إثبات الملكية** (فواتير المرافق، العقود، أو سندات الملكية).
*   **التخزين:** يتم تخزين هذه المستندات في حاوية **Appwrite Storage** مقيدة مع ضوابط وصول صارمة.
*   **الوصول:** يمكن فقط لمسؤولي المجتمع المعتمدين ومدققي النظام عرض هذه الملفات.
*   **الغرض:** تستخدم حصريًا لحل نزاعات الإقامة والتحقق من إشغال الوحدات.

## 3. تخزين البيانات وخدمات الطرف الثالث
يستخدم WhatsUnity استراتيجية تخزين متعددة الطبقات لضمان الأداء العالي والتوفر في وضع عدم الاتصال:
*   **Appwrite Cloud:** الواجهة الخلفية الأساسية للمصادقة وقواعد البيانات والمزامنة في الوقت الفعلي.
*   **SQLite (محلي):** يتم تخزين بياناتك مؤقتًا على جهازك لدعم العمل دون اتصال بالإنترنت.
*   **Cloudflare R2:** يستخدم لاستضافة الملفات الثابتة (الصور، ملفات PDF، والمستندات).
*   **Gumlet:** يستخدم لمعالجة وبث الملاحظات الصوتية ورسائل الفيديو عالية الجودة.
*   **Firebase/FCM:** يستخدم لتوصيل إشعارات التنبيه لأجهزة Android و iOS.

## 4. بيانات الموقع
قد يجمع التطبيق بيانات موقع الجهاز لتقديم توصيات خاصة بالمجمع السكني والتحقق من القرب من المجتمع. يمكنك إدارة أذونات الموقع من خلال إعدادات جهازك.

## 5. حقوق محتوى المستخدم
أنت تحتفظ بملكية جميع المحتويات التي ترفعها. باستخدام التطبيق، فإنك تمنحنا ترخيصًا لتخزين هذا المحتوى ومعالجته وعرضه ضمن سياق مجتمعك المحدد. نحن لا نبيع بياناتك الشخصية لمعلنين من جهات خارجية.

## 6. الأمان
نحن نطبق تشفيرًا متوافقًا مع معايير الصناعة وضمانات إجرائية لحماية بياناتك. يتضمن ذلك SSL/TLS للبيانات المتنقلة وتشفير AES للمستندات الحساسة المخزنة في سحابتنا.

## 7. اتصل بنا
إذا كانت لديك أسئلة بخصوص خصوصيتك أو ترغب في طلب حذف البيانات، يرجى الاتصال بنا على:
**البريد الإلكتروني:** support@whatsunity.work.gd`,
      sections: [
        {
          id: "scope",
          title: "1. النطاق ومقدم الخدمة",
          content: [
            'توضح سياسة الخصوصية هذه كيفية قيام WhatsUnity ("التطبيق")، الذي طوره نور عدوي ("مقدم الخدمة")، بجمع معلوماتك واستخدامها وحمايتها.',
          ],
        },
        {
          id: "collection",
          title: "2. جمع المعلومات واستخدامها",
          content: [
            "نقوم بجمع المعلومات اللازمة لتوفير تجربة آمنة وفعالة لإدارة المجتمع:",
          ],
          subsections: [
            {
              subtitle: "فئات البيانات وأذونات الجهاز",
              points: [
                "الهوية الشخصية: الاسم الكامل، اسم المستخدم، رقم الهاتف، وعنوان البريد الإلكتروني.",
                "تفاصيل الإقامة: حالة المالك/المستأجر، رقم الشقة، رقم المبنى، ومعرف المجمع السكني (Compound ID).",
                "الوسائط: يتطلب التطبيق وصولاً متكرراً ومستمراً إلى معرض الصور ومقاطع الفيديو على جهازك (عبر أذونات READ_MEDIA_IMAGES و READ_MEDIA_VIDEO) لتمكين الميزات الأساسية مثل مشاركة ملفات وسائط متعددة في دردشة المجتمع، ورفع مقاطع الفيديو/الصور لتقارير الصيانة، وتعيين صور الملف الشخصي.",
                "بيانات الجهاز: عنوان IP، نظام التشغيل، ومعرفات الجهاز الفريدة لإشعارات التنبيه.",
                "الفواتير والاشتراكات: بالنسبة لخطط المجتمع المدفوعة والمشتريات داخل التطبيق، تتم معالجة المعاملات بشكل آمن عبر Google Play Billing. نحن لا نجمع أو نخزن معلومات بطاقة الائتمان الخاصة بك. نحن نقوم فقط بتخزين رموز التحقق من الشراء المقدمة من Google Play لمنح الوصول إلى الميزات المدفوعة.",
              ],
            },
          ],
        },
        {
          id: "verification",
          title: "3. التحقق من الإقامة",
          content: [
            "للحفاظ على أمن المجتمع، قد نطلب إثبات الملكية (فواتير المرافق، العقود، أو سندات الملكية).",
          ],
          subsections: [
            {
              subtitle: "حاوية Appwrite Storage وضوابط الوصول المشددة",
              points: [
                "التخزين: يتم تخزين هذه المستندات في حاوية Appwrite Storage مقيدة مع ضوابط وصول صارمة.",
                "الوصول: يمكن فقط لمسؤولي المجتمع المعتمدين ومدققي النظام عرض هذه الملفات.",
                "الغرض: تستخدم حصريًا لحل نزاعات الإقامة والتحقق من إشغال الوحدات.",
              ],
            },
          ],
        },
        {
          id: "storage-third-parties",
          title: "4. تخزين البيانات وخدمات الطرف الثالث",
          content: [
            "يستخدم WhatsUnity استراتيجية تخزين متعددة الطبقات لضمان الأداء العالي والتوفر في وضع عدم الاتصال:",
          ],
          tableData: [
            {
              service: "Appwrite Cloud",
              purpose: "الواجهة الخلفية الأساسية للمصادقة وقواعد البيانات والمزامنة في الوقت الفعلي.",
              linkText: "appwrite.io/privacy",
              url: "https://appwrite.io/privacy",
            },
            {
              service: "SQLite (محلي)",
              purpose: "تخزين البيانات محلياً على الجهاز لدعم العمل دون اتصال بالإنترنت لبوابات QR وسجلات الصيانة.",
              linkText: "sqlite.org",
              url: "https://www.sqlite.org/copyright.html",
            },
            {
              service: "Cloudflare R2",
              purpose: "استضافة الملفات الثابتة والوثائق والمخططات الهندسية وملفات PDF بكفاءة وسرعة فائقة.",
              linkText: "cloudflare.com/privacypolicy",
              url: "https://www.cloudflare.com/privacypolicy/",
            },
            {
              service: "Gumlet",
              purpose: "معالجة وبث الملاحظات الصوتية ورسائل الفيديو عالية الجودة بأقل استهلاك للبيانات.",
              linkText: "gumlet.com/privacy-policy",
              url: "https://www.gumlet.com/privacy-policy/",
            },
            {
              service: "Firebase / FCM",
              purpose: "توصيل إشعارات التنبيه اللحظية لأجهزة Android و iOS.",
              linkText: "firebase.google.com/support/privacy",
              url: "https://firebase.google.com/support/privacy",
            },
            {
              service: "Google Play Billing",
              purpose: "معالجة الاشتراكات الرقمية داخل التطبيق عبر واجهات جوجل المشفرة.",
              linkText: "policies.google.com/privacy",
              url: "https://policies.google.com/privacy",
            },
          ],
        },
        {
          id: "location",
          title: "5. بيانات الموقع",
          content: [
            "قد يجمع التطبيق بيانات موقع الجهاز لتقديم توصيات خاصة بالمجمع السكني والتحقق من القرب من المجتمع. يمكنك إدارة أذونات الموقع من خلال إعدادات جهازك.",
          ],
        },
        {
          id: "user-rights",
          title: "6. حقوق محتوى المستخدم",
          content: [
            "أنت تحتفظ بملكية جميع المحتويات التي ترفعها.",
            "باستخدام التطبيق، فإنك تمنحنا ترخيصًا لتخزين هذا المحتوى ومعالجته وعرضه ضمن سياق مجتمعك المحدد.",
            "نحن لا نبيع بياناتك الشخصية لمعلنين من جهات خارجية.",
          ],
        },
        {
          id: "security",
          title: "7. الأمان والضمانات التقنية",
          content: [
            "نحن نطبق تشفيرًا متوافقًا مع معايير الصناعة وضمانات إجرائية لحماية بياناتك.",
            "يتضمن ذلك SSL/TLS للبيانات المتنقلة وتشفير AES للمستندات الحساسة المخزنة في سحابتنا.",
          ],
        },
        {
          id: "contact",
          title: "8. اتصل بنا",
          content: [
            "إذا كانت لديك أسئلة بخصوص خصوصيتك أو ترغب في طلب حذف البيانات، يرجى الاتصال بنا على:",
            "البريد الإلكتروني: support@whatsunity.work.gd",
          ],
        },
      ],
    },
  },
  terms: {
    en: {
      type: "terms",
      title: "Terms & Conditions",
      badge: "User Agreement & Service Terms v2.0",
      effectiveDate: "2026-04-30",
      serviceProvider: "Nour Adawy",
      supportEmail: "support@whatsunity.work.gd",
      summary:
        "By downloading or using WhatsUnity ('the Application'), you agree to these Terms & Conditions covering scope of service, residency verification, acceptable conduct, and liability limits.",
      rawMarkdown: `# Terms & Conditions

**Effective Date: 2026-04-30**

By downloading or using WhatsUnity ("the Application"), you agree to the following terms. Please read them carefully.

## 1. Scope of Service
WhatsUnity provides a platform for residents, managers, and administrators to collaborate within community contexts. The service is provided "AS IS" and is subject to availability.

## 2. User Accounts and Verification
*   **Accuracy:** You agree to provide accurate residency and contact information.
*   **Verification:** Submitting forged or fraudulent proof of ownership documents will result in immediate and permanent account termination.
*   **Security:** You are responsible for maintaining the confidentiality of your account credentials.

## 3. Acceptable Use
You agree NOT to use the Application to:
*   Post illegal, harmful, or offensive content.
*   Impersonate other residents or community administrators.
*   Engage in any form of harassment or bullying within chat channels.
*   Attempt to reverse-engineer or extract the Application's source code.

## 4. User-Generated Content
You retain all ownership rights to the content you post. However, you grant WhatsUnity a worldwide, non-exclusive license to host, store, and display your content to other members of your verified community.

## 5. Connectivity and Charges
The Application requires an internet connection for cloud synchronization. You are responsible for any data charges incurred from your mobile provider. WhatsUnity features a robust offline mode, but initial verification and remote sync require active connectivity.

## 6. Limitation of Liability
The Service Provider is not liable for:
*   Direct or indirect losses resulting from reliance on Application features.
*   Disputes between residents or between residents and community management.
*   Failures in third-party services (Appwrite, R2, Gumlet, Firebase).

## 7. Financial Transactions
Any voluntary donations made within the Application are processed by secure third-party providers (e.g., Instapay). Donations are final and non-refundable.

## 8. Modifications to Terms
We may update these Terms from time to time. Continued use of the Application after changes are posted constitutes your acceptance of the new Terms.

## 9. Contact Us
For any inquiries regarding these Terms, please contact:
**Email:** support@whatsunity.work.gd`,
      sections: [
        {
          id: "scope",
          title: "1. Scope of Service",
          content: [
            'WhatsUnity provides a platform for residents, managers, and administrators to collaborate within community contexts. The service is provided "AS IS" and is subject to availability.',
          ],
        },
        {
          id: "verification",
          title: "2. User Accounts and Verification",
          content: [
            "Account creation and community verification requirements:",
          ],
          subsections: [
            {
              subtitle: "Account Responsibilities & Fraud Prevention",
              points: [
                "Accuracy: You agree to provide accurate residency and contact information.",
                "Verification: Submitting forged or fraudulent proof of ownership documents will result in immediate and permanent account termination.",
                "Security: You are responsible for maintaining the confidentiality of your account credentials.",
              ],
            },
          ],
        },
        {
          id: "acceptable-use",
          title: "3. Acceptable Use",
          content: ["You agree NOT to use the Application to:"],
          subsections: [
            {
              subtitle: "Prohibited Actions",
              points: [
                "Post illegal, harmful, or offensive content.",
                "Impersonate other residents or community administrators.",
                "Engage in any form of harassment or bullying within chat channels.",
                "Attempt to reverse-engineer or extract the Application's source code.",
              ],
            },
          ],
        },
        {
          id: "ugc",
          title: "4. User-Generated Content",
          content: [
            "You retain all ownership rights to the content you post.",
            "However, you grant WhatsUnity a worldwide, non-exclusive license to host, store, and display your content to other members of your verified community.",
          ],
        },
        {
          id: "connectivity",
          title: "5. Connectivity and Charges",
          content: [
            "The Application requires an internet connection for cloud synchronization.",
            "You are responsible for any data charges incurred from your mobile provider.",
            "WhatsUnity features a robust offline mode, but initial verification and remote sync require active connectivity.",
          ],
        },
        {
          id: "liability",
          title: "6. Limitation of Liability",
          content: [
            "The Service Provider is not liable for:",
          ],
          subsections: [
            {
              subtitle: "Exclusions",
              points: [
                "Direct or indirect losses resulting from reliance on Application features.",
                "Disputes between residents or between residents and community management.",
                "Failures in third-party services (Appwrite, R2, Gumlet, Firebase).",
              ],
            },
          ],
        },
        {
          id: "transactions",
          title: "7. Financial Transactions",
          content: [
            "Any voluntary donations made within the Application are processed by secure third-party providers (e.g., Instapay).",
            "Donations are final and non-refundable.",
          ],
        },
        {
          id: "modifications",
          title: "8. Modifications to Terms",
          content: [
            "We may update these Terms from time to time. Continued use of the Application after changes are posted constitutes your acceptance of the new Terms.",
          ],
        },
        {
          id: "contact",
          title: "9. Contact Us",
          content: [
            "For any inquiries regarding these Terms, please contact:",
            "Email: support@whatsunity.work.gd",
          ],
        },
      ],
    },
    ar: {
      type: "terms",
      title: "الشروط والأحكام",
      badge: "اتفاقية الاستخدام وشروط الخدمة v2.0",
      effectiveDate: "2026-04-30",
      serviceProvider: "نور عدوي (Nour Adawy)",
      supportEmail: "support@whatsunity.work.gd",
      summary:
        "بتحميل أو استخدام تطبيق WhatsUnity، فإنك توافق على هذه الشروط والأحكام التي تحكم نطاق الخدمة، والتحقق من الحسابات، وقواعد الاستخدام المقبول، وتحديد المسؤولية.",
      rawMarkdown: `# الشروط والأحكام

**تاريخ النفاذ: 30 أبريل 2026**

بتحميل أو استخدام تطبيق WhatsUnity ("التطبيق")، فإنك توافق على الشروط التالية. يرجى قراءتها بعناية.

## 1. نطاق الخدمة
يوفر WhatsUnity منصة للسكان والمديرين والمسؤولين للتعاون ضمن سياقات المجتمع السكني. يتم تقديم الخدمة "كما هي" وتخضع للتوافر.

## 2. حسابات المستخدمين والتحقق
*   **الدقة:** توافق على تقديم معلومات دقيقة عن الإقامة وبيانات الاتصال.
*   **التحقق:** سيؤدي تقديم مستندات إثبات ملكية مزورة أو احتيالية إلى إنهاء الحساب فورًا ونهائيًا.
*   **الأمان:** أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك.

## 3. الاستخدام المقبول
توافق على عدم استخدام التطبيق لـ:
*   نشر محتوى غير قانوني أو ضار أو مسيء.
*   انتحال شخصية سكان آخرين أو مسؤولي المجتمع.
*   المشاركة في أي شكل من أشكال المضايقة أو التنمر داخل قنوات الدردشة.
*   محاولة الهندسة العكسية أو استخراج الكود المصدري للتطبيق.

## 4. محتوى المستخدم
تحتفظ بجميع حقوق الملكية للمحتوى الذي تنشره. ومع ذلك، فإنك تمنح WhatsUnity ترخيصًا عالميًا غير حصري لاستضافة وتخزين وعرض المحتوى الخاص بك للأعضاء الآخرين في مجتمعك المعتمد.

## 5. الاتصال والرسوم
يتطلب التطبيق اتصالاً بالإنترنت للمزامنة السحابية. أنت مسؤول عن أي رسوم بيانات تفرضها شركة المحمول الخاصة بك. يتميز WhatsUnity بوضع عدم اتصال قوي، ولكن التحقق الأولي والمزامنة عن بُعد تتطلب اتصالاً نشطاً.

## 6. تحديد المسؤولية
مقدم الخدمة غير مسؤول عن:
*   الخسائر المباشرة أو غير المباشرة الناتجة عن الاعتماد على ميزات التطبيق.
*   النزاعات بين السكان أو بين السكان وإدارة المجتمع.
*   الأعطال في خدمات الطرف الثالث (Appwrite, R2, Gumlet, Firebase).

## 7. المعاملات المالية
تتم معالجة أي تبرعات طوعية تتم داخل التطبيق بواسطة مزودي طرف ثالث آمنين (مثل Instapay). التبرعات نهائية وغير قابلة للاسترداد.

## 8. تعديل الشروط
قد نقوم بتحديث هذه الشروط من وقت لآخر. استمرارك في استخدام التطبيق بعد نشر التغييرات يعني قبولك للشروط الجديدة.

## 9. اتصل بنا
لأي استفسارات بخصوص هذه الشروط، يرجى الاتصال بنا على:
**البريد الإلكتروني:** support@whatsunity.work.gd`,
      sections: [
        {
          id: "scope",
          title: "1. نطاق الخدمة",
          content: [
            'يوفر WhatsUnity منصة للسكان والمديرين والمسؤولين للتعاون ضمن سياقات المجتمع السكني. يتم تقديم الخدمة "كما هي" وتخضع للتوافر.',
          ],
        },
        {
          id: "verification",
          title: "2. حسابات المستخدمين والتحقق",
          content: ["متطلبات إنشاء الحسابات وإثبات الهوية السكنية:"],
          subsections: [
            {
              subtitle: "مسؤوليات الحساب ومكافحة التزوير",
              points: [
                "الدقة: توافق على تقديم معلومات دقيقة عن الإقامة وبيانات الاتصال.",
                "التحقق: سيؤدي تقديم مستندات إثبات ملكية مزورة أو احتيالية إلى إنهاء الحساب فورًا ونهائيًا.",
                "الأمان: أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك.",
              ],
            },
          ],
        },
        {
          id: "acceptable-use",
          title: "3. الاستخدام المقبول",
          content: ["توافق على عدم استخدام التطبيق لـ:"],
          subsections: [
            {
              subtitle: "المحظورات الصريحة",
              points: [
                "نشر محتوى غير قانوني أو ضار أو مسيء.",
                "انتحال شخصية سكان آخرين أو مسؤولي المجتمع.",
                "المشاركة في أي شكل من أشكال المضايقة أو التنمر داخل قنوات الدردشة.",
                "محاولة الهندسة العكسية أو استخراج الكود المصدري للتطبيق.",
              ],
            },
          ],
        },
        {
          id: "ugc",
          title: "4. محتوى المستخدم",
          content: [
            "تحتفظ بجميع حقوق الملكية للمحتوى الذي تنشره.",
            "ومع ذلك، فإنك تمنح WhatsUnity ترخيصًا عالميًا غير حصري لاستضافة وتخزين وعرض المحتوى الخاص بك للأعضاء الآخرين في مجتمعك المعتمد.",
          ],
        },
        {
          id: "connectivity",
          title: "5. الاتصال والرسوم",
          content: [
            "يتطلب التطبيق اتصالاً بالإنترنت للمزامنة السحابية.",
            "أنت مسؤول عن أي رسوم بيانات تفرضها شركة المحمول الخاصة بك.",
            "يتميز WhatsUnity بوضع عدم اتصال قوي، ولكن التحقق الأولي والمزامنة عن بُعد تتطلب اتصالاً نشطاً.",
          ],
        },
        {
          id: "liability",
          title: "6. تحديد المسؤولية",
          content: ["مقدم الخدمة غير مسؤول عن:"],
          subsections: [
            {
              subtitle: "استثناءات المسؤولية",
              points: [
                "الخسائر المباشرة أو غير المباشرة الناتجة عن الاعتماد على ميزات التطبيق.",
                "النزاعات بين السكان أو بين السكان وإدارة المجتمع.",
                "الأعطال في خدمات الطرف الثالث (Appwrite, R2, Gumlet, Firebase).",
              ],
            },
          ],
        },
        {
          id: "transactions",
          title: "7. المعاملات المالية",
          content: [
            "تتم معالجة أي تبرعات طوعية تتم داخل التطبيق بواسطة مزودي طرف ثالث آمنين (مثل Instapay).",
            "التبرعات نهائية وغير قابلة للاسترداد.",
          ],
        },
        {
          id: "modifications",
          title: "8. تعديل الشروط",
          content: [
            "قد نقوم بتحديث هذه الشروط من وقت لآخر. استمرارك في استخدام التطبيق بعد نشر التغييرات يعني قبولك للشروط الجديدة.",
          ],
        },
        {
          id: "contact",
          title: "9. اتصل بنا",
          content: [
            "لأي استفسارات بخصوص هذه الشروط، يرجى الاتصال بنا على:",
            "البريد الإلكتروني: support@whatsunity.work.gd",
          ],
        },
      ],
    },
  },
};
