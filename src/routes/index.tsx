import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroHaram from "@/assets/hero-haram.jpg";
import aiCrowd from "@/assets/ai-crowd.jpg";
import minaImg from "@/assets/mina.jpg";

const translations = {
  ar: {
    nav: {
      problem: "المشكلة",
      solution: "الحل",
      dashboard: "لوحة التحكم",
      tech: "التقنية",
      team: "الفريق",
    },
    hero: {
      title: "ذكاء اصطناعي",
      subtitle: "لحج آمن",
      description: "نتنبأ باكتظاظ الحشود قبل حدوثه باستخدام الرؤية الحاسوبية والتعلم العميق، نحمي ملايين الحجاج من خلال الإنذار المبكر",
      earlyWarning: "5-15 دقيقة",
      viewArchitecture: "عرض البنية",
      exploreSolution: "استكشف الحل",
      pilgrimsYearly: "2-3M",
      pilgrimsLabel: "حاج سنوياً",
      earlyWarningLabel: "إنذار مبكر",
      monitoring: "24/7",
      monitoringLabel: "مراقبة مستمرة",
    },
    problem: {
      title: "الأنظمة التقليدية",
      subtitle: "تتفاعل. بحلول ذلك الوقت، يكون قد فات الأوان.",
      description: "كل عام، يتجمع ملايين الحجاج في مكة. أنظمة مراقبة الحشود الحالية تكتشف الكثافة الخطرة فقط بعد أن تصبح مرئية للمشغلين البشريين، وهو ما يكون غالباً متأخراً جداً للتدخل الفعال.",
    },
    solution: {
      title: "نظام ذكي يراقب",
      subtitle: "ويتنبأ بمخاطر الحشود.",
      description: "نراقب كاميرات الفيديو المباشرة، نفهم حركة الحشود، ونحذر السلطات قبل حدوث المواقف الخطرة.",
      steps: [
        { t: "راقب الكاميرات", d: "فيديو مباشر من المواقع المقدسة يراقب حركة الحشود" },
        { t: "معالجة الفيديو", d: "يحلل النظام كل إطار لفهم ما يحدث" },
        { t: "عد الأشخاص", d: "يقدر عدد الأشخاص في كل منطقة" },
        { t: "إنشاء خرائط", d: "يعرض كثافة الحشود كخرائط حرارية سهلة القراءة" },
        { t: "تتبع الأنماط", d: "يدرس كيف تتغير الحشود بمرور الوقت في كل منطقة" },
        { t: "التنبؤ بالمستقبل", d: "يتنبأ بمستويات الحشود 5-15 دقيقة مقدماً" },
        { t: "تقييم المخاطر", d: "صنف مستويات الخطر: آمن، مراقبة، تحذير، حرج" },
        { t: "إرسال تنبيهات", d: "يخطر السلطات فوراً عند ارتفاع المخاطر" },
      ],
    },
    liveDemo: {
      eyebrow: "عرض حي",
      title: "شاهد تفويج يفكّر،",
      title2: "قبل دقائق.",
      description: "محاكاة مفاهيمية للطواف حول الكعبة. تتصاعد الكثافة في قطاع واحد — يتنبأ تفويج بها ويوصي بإعادة التوجيه قبل أن يصبح القطاع حرجاً.",
      label: "الطواف — محاكاة مفاهيمية",
      live: "مباشر",
      nominal: "جميع المناطق طبيعية — مراقبة ٢٤ قطاعاً",
      watch: "ارتفاع الكثافة — القطاع ١٤ تحت المراقبة",
      forecast: "⚠ تنبؤ تفويج — القطاع ١٤ حرج خلال ~{s} ث · يُنصح بإعادة التوجيه عبر البوابة ب",
      critical: "القطاع ١٤ حرج — بدون التنبؤ، هنا يكتشف المشغّلون الخطر",
      intervene: "التدخل نشط — أُعيد توجيه التدفق عبر البوابة ب",
      stable: "استقرت المنطقة — وقت الاستباق أحدث الفرق",
      note: "محاكاة مفاهيمية — ليست بيانات ميدانية",
    },
    team: {
      title: "خمسة مهندسين.",
      subtitle: "مهمة واحدة.",
      description: "خمستنا طلاب هندسة ذكاء اصطناعي في المدرسة الوطنية العليا للذكاء الاصطناعي، ونصف نهائيّي إنجاز الجزائر — فريق يتنافس على التقنية والأعمال معاً.",
      roles: ["القيادة التقنية", "الأعمال", "المبيعات والتنسيق", "الاستراتيجية", "العمليات"],
    },
    stayTuned: {
      title: "ابقوا على اطلاع.",
      subtitle: "نحن للتو بدأنا.",
      description: "نعمل بجد لإحياء تفويج. تابعوا رحلتنا بينما نطور حلول أمان أكثر ذكاءً للحجاج حول العالم.",
    },
    problemStats: {
      pilgrims: "حجاج يتجمعون في مكة كل عام",
      lagTime: "وقت التأخير في الكشف التقليدي",
      density: "حد كثافة خطر الازدحام",
      reactive: "أنظمة تفاعلية، غير تنبؤية",
    },
    howAI: {
      title: "كيف يعمل الذكاء الاصطناعي",
      subtitle: "ستة نماذج متخصصة،",
      subtitle2: "نظام ذكي واحد.",
      description: "كل نظام فرعي مصمم لغرض معين ومقاس بشكل مستقل. ينتقل من البكسل الخام إلى درجة الخطر في أقل من ثانية.",
      cards: [
        { t: "الرؤية الحاسوبية", d: "تستخرج الشبكات العصبية العميقة ميزات الحشود من إطارات الفيديو في الوقت الفعلي.", tag: "OpenCV · PyTorch" },
        { t: "تقدير كثافة الحشود", d: "تتنبأ الشبكات بخرائط الكثافة لكل بكسل دون الحاجة للكشف عن الرؤوس.", tag: "CSRNet" },
        { t: "التنبؤ بالشبكات التكرارية", d: "تتنبأ الشبكات التكرارية بالكثافة 5-15 دقيقة مقدماً.", tag: "PyTorch · LSTM" },
        { t: "تصنيف المخاطر", d: "تقوم العتبات المتعلمة بتعيين التنبؤات إلى أربعة مستويات خطر لكل منطقة.", tag: "ML Classifier" },
        { t: "التنبيهات في الوقت الفعلي", d: "يستقبل مركز العمليات تنبيهات الدفع والرسائل القصيرة ولوحة التحكم عند ارتفاع الخطر.", tag: "FastAPI · WebSocket" },
        { t: "التعلم المستمر", d: "يعيد النظام التدريب من ملاحظات المشغلين ومقاطع الفيديو الجديدة.", tag: "MLOps" },
      ],
    },
    riskLevels: {
      title: "أربعة مستويات.",
      subtitle: "بدون غموض.",
      safe: "آمن",
      watch: "مراقبة",
      warning: "تحذير",
      critical: "حرج",
      density: "الكثافة",
      confidence: "الثقة",
      action: "الإجراء",
      safeAction: "مراقبة مستمرة",
      watchAction: "زيادة أخذ العينات من الكاميرات",
      warningAction: "إعادة توجيه التدفق · إخطار الفرق الأرضية",
      criticalAction: "استجابة فورية للتحكم في الحشود",
    },
    dashboard: {
      title: "لوحة تحكم العمليات الحية",
      subtitle: "غرفة تحكم",
      subtitle2: "للمواقع المقدسة.",
      online: "متصل",
      alerts: "تنبيهات",
      active: "نشط",
      zoneStatus: "حالة المنطقة",
      densityForecast: "تنبؤ الكثافة · Mataf",
      rolling: "30 دقيقة متداولة · تنبؤ 15 دقيقة",
      observed: "الملاحظ",
      predicted: "التنبؤ",
      now: "الآن",
      critical: "حرج 6.0/m²",
      liveCameras: "كاميرات مباشرة",
    },
    technology: {
      title: "مبني باستخدام",
      subtitle: "مكدس ذكاء اصطناعي حديث.",
      description: "مكونات مفتوحة المصدر مُجرَّبة، مُنظَّمة في خط استدلال مُخطَّط ليكون سريعاً وشفافاً وقابلاً للنشر.",
    },
    whyTafweej: {
      title: "لماذا تفويج؟",
      subtitle: "من الملاحظة إلى إنقاذ الأرواح.",
      observe: "راقب",
      observeDesc: "فيديو مستمر من كل منطقة.",
      predict: "تنبأ",
      predictDesc: "تنبأ بالكثافة 5-15 دقيقة مقدماً.",
      alert: "حذر",
      alertDesc: "يتم إخطار مركز العمليات قبل الوصول للحرج.",
      intervene: "تدخل",
      interveneDesc: "أعد توجيه التدفق، نشر الموارد.",
      saveLives: "أنقذ الأرواح",
      saveLivesDesc: "منع الازدحام قبل البدء.",
    },
    vision: {
      today: "اليوم،",
      predict: "نتنبأ بالحشود.",
      tomorrow: "غداً،",
      infrastructure: "بنية تحتية ذكاء اصطناعي كاملة",
      protecting: "تحمي كل حاج.",
      phase01: "المرحلة 01",
      phase01Title: "الكثافة التنبؤية",
      phase01Desc: "نشر CSRNet + LSTM عبر المناطق الأولية.",
      phase02: "المرحلة 02",
      phase02Title: "الاندماج متعدد الوسائط",
      phase02Desc: "مستشعرات IoT، إشارات الهاتف المحمول والتصوير الحراري.",
      phase03: "المرحلة 03",
      phase03Title: "الاستجابة المستقلة",
      phase03Desc: "اللافتحات المدعومة بالذكاء الاصطناعي، التوجيه، تخصيص الموارد.",
      phase04: "المرحلة 04",
      phase04Title: "النشر على مستوى الدولة",
      phase04Desc: "بنية تحتية للسلامة على مستوى المملكة متوافقة مع رؤية 2030.",
    },
  },
  en: {
    nav: {
      problem: "Problem",
      solution: "Solution",
      dashboard: "Dashboard",
      tech: "Tech",
      team: "Team",
    },
    hero: {
      title: "AI-Powered",
      subtitle: "Crowd Intelligence for Safer Hajj.",
      description: "Predicting crowd congestion before it happens using Computer Vision and Deep Learning, protecting millions of pilgrims through intelligent early warning",
      earlyWarning: "5–15 minutes",
      viewArchitecture: "View Architecture",
      exploreSolution: "Explore Solution",
      pilgrimsYearly: "2–3M",
      pilgrimsLabel: "Pilgrims yearly",
      earlyWarningLabel: "Min. early warning",
      monitoring: "24/7",
      monitoringLabel: "AI monitoring",
    },
    problem: {
      title: "Traditional systems react.",
      subtitle: "By then, it's already too late.",
      description: "Every year, millions of pilgrims converge on Makkah. Existing crowd monitoring only detects dangerous density after it becomes visible to human operators. This is often too late for meaningful intervention.",
    },
    solution: {
      title: "A smart system that watches",
      subtitle: "and predicts crowd risks.",
      description: "We watch live video cameras, understand crowd movement, and warn authorities before dangerous situations happen.",
      steps: [
        { t: "Watch Cameras", d: "Live video from holy sites monitors crowd movement" },
        { t: "Process Video", d: "System analyzes each frame to understand what's happening" },
        { t: "Count People", d: "Estimates how many people are in each area" },
        { t: "Create Maps", d: "Shows crowd density as easy-to-read heatmaps" },
        { t: "Track Patterns", d: "Studies how crowds change over time in each zone" },
        { t: "Predict Future", d: "Forecasts crowd levels 5–15 minutes ahead" },
        { t: "Assess Risk", d: "Classifies danger levels: Safe, Watch, Warning, Critical" },
        { t: "Send Alerts", d: "Notifies authorities immediately when risks rise" },
      ],
    },
    liveDemo: {
      eyebrow: "Live Demo",
      title: "Watch Tafweej think,",
      title2: "minutes ahead.",
      description: "A concept simulation of tawaf around the Kaaba. Density builds in one sector — Tafweej forecasts it and recommends a reroute before the zone turns critical.",
      label: "Tawaf — concept simulation",
      live: "Live",
      nominal: "ALL ZONES NOMINAL — MONITORING 24 SECTORS",
      watch: "DENSITY RISING — SECTOR 14 UNDER WATCH",
      forecast: "⚠ TAFWEEJ FORECAST — SECTOR 14 CRITICAL IN ~{s}s · RECOMMEND REROUTE VIA GATE B",
      critical: "SECTOR 14 CRITICAL — WITHOUT FORECAST, THIS IS WHERE OPERATORS FIND OUT",
      intervene: "INTERVENTION ACTIVE — FLOW REROUTED VIA GATE B",
      stable: "ZONE STABILIZED — LEAD TIME MADE THE DIFFERENCE",
      note: "Concept simulation — not field data.",
    },
    team: {
      title: "Five engineers.",
      subtitle: "One mission.",
      description: "All five are AI Engineering students at ENSIA and INJAZ Al Jazair semi-finalists — a team that competes on both the technology and the business.",
      roles: ["Technical Lead", "Business", "Sales & Coordination", "Strategy", "Operations"],
    },
    stayTuned: {
      title: "Stay tuned.",
      subtitle: "We're just getting started.",
      description: "We're working hard to bring Tafweej to life. Follow our journey as we develop smarter safety solutions for pilgrims around the world.",
    },
    problemStats: {
      pilgrims: "Pilgrims gather in Makkah every year",
      lagTime: "Traditional detection lag time",
      density: "Density threshold for crush risk",
      reactive: "Reactive systems, not predictive",
    },
    howAI: {
      title: "How the AI Works",
      subtitle: "Six specialized models,",
      subtitle2: "one intelligent system.",
      description: "Each subsystem is purpose-built and independently benchmarked. It goes from raw pixel to risk score in under a second.",
      cards: [
        { t: "Computer Vision", d: "Deep CNNs extract crowd features from video frames in real time.", tag: "OpenCV · PyTorch" },
        { t: "Crowd Density Estimation", d: "CSRNet regresses per-pixel density maps without head detection.", tag: "CSRNet" },
        { t: "LSTM Prediction", d: "Recurrent networks forecast density 5–15 minutes ahead of time.", tag: "PyTorch · LSTM" },
        { t: "Risk Classification", d: "Learned thresholds map forecasts to four risk tiers per zone.", tag: "ML Classifier" },
        { t: "Real-Time Alerts", d: "Ops center receives push, SMS and dashboard alerts as risk rises.", tag: "FastAPI · WebSocket" },
        { t: "Continuous Learning", d: "The system retrains from operator feedback and new footage.", tag: "MLOps" },
      ],
    },
    riskLevels: {
      title: "Four levels.",
      subtitle: "Zero ambiguity.",
      safe: "Safe",
      watch: "Watch",
      warning: "Warning",
      critical: "Critical",
      density: "Density",
      confidence: "Confidence",
      action: "Action",
      safeAction: "Continuous monitoring",
      watchAction: "Increase camera sampling",
      warningAction: "Reroute inflow · notify ground teams",
      criticalAction: "Immediate crowd control response",
    },
    dashboard: {
      title: "Live Operations Dashboard",
      subtitle: "A control room",
      subtitle2: "for the holy sites.",
      online: "ONLINE",
      alerts: "Alerts",
      active: "ACTIVE",
      zoneStatus: "Zone Status",
      densityForecast: "Density Forecast · Mataf",
      rolling: "Rolling 30 min · +15 min prediction",
      observed: "Observed",
      predicted: "Predicted",
      now: "NOW",
      critical: "CRITICAL 6.0/m²",
      liveCameras: "Live Cameras",
    },
    technology: {
      title: "Built with a modern",
      subtitle: "AI stack.",
      description: "Proven open-source components, composed into a planned inference pipeline designed to be fast, transparent, and deployable.",
    },
    whyTafweej: {
      title: "Why Tafweej?",
      subtitle: "From observation to saving lives.",
      observe: "Observe",
      observeDesc: "Continuous video from every zone.",
      predict: "Predict",
      predictDesc: "Forecast density 5–15 min ahead.",
      alert: "Alert",
      alertDesc: "Ops center notified before critical.",
      intervene: "Intervene",
      interveneDesc: "Reroute flow, deploy resources.",
      saveLives: "Save Lives",
      saveLivesDesc: "Prevent crushes before they start.",
    },
    vision: {
      today: "Today,",
      predict: "we predict crowds.",
      tomorrow: "Tomorrow,",
      infrastructure: "a complete AI infrastructure",
      protecting: "protecting every pilgrim.",
      phase01: "Phase 01",
      phase01Title: "Predictive Density",
      phase01Desc: "Deploy CSRNet + LSTM across primary zones.",
      phase02: "Phase 02",
      phase02Title: "Multi-Modal Fusion",
      phase02Desc: "IoT sensors, mobile signals & thermal imagery.",
      phase03: "Phase 03",
      phase03Title: "Autonomous Response",
      phase03Desc: "AI-driven signage, routing, resource allocation.",
      phase04: "Phase 04",
      phase04Title: "Nation-scale Deployment",
      phase04Desc: "Kingdom-wide safety infrastructure aligned with Vision 2030.",
    },
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--d6790153-4c6b-4867-b80e-1de546ee06da.lovable.app/og.jpg" },
    ],
  }),
  component: Landing,
});

/* ---------- Reveal on scroll ---------- */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.9s ease-out ${delay}ms, transform 0.9s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Counter ---------- */
function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.disconnect();
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

/* ---------- Nav ---------- */
function Nav({ lang, setLang, t }: { lang: "ar" | "en"; setLang: (lang: "ar" | "en") => void; t: typeof translations.en }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <Logo />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">Tafweej</span>
            <span className="font-arabic text-[11px] text-muted-foreground" dir="rtl">تفويج</span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            [t.nav.problem, "#problem"],
            [t.nav.solution, "#solution"],
            [t.nav.dashboard, "#dashboard"],
            [t.nav.tech, "#tech"],
            [t.nav.team, "#team"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:bg-white/5"
          >
            {lang === "ar" ? "EN" : "AR"}
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </button>
          <span className="hidden rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:inline-block">
            MCIT · 2026
          </span>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="relative grid h-9 w-9 place-items-center">
      <div className="absolute inset-0 rounded-lg bg-[var(--gradient-emerald)] opacity-90" />
      <div className="absolute inset-[3px] rounded-md bg-background/70 backdrop-blur" />
      <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-[color:var(--gold)]" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2 L22 12 L12 22 L2 12 Z" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    </div>
  );
}

/* ---------- Section title ---------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--emerald-glow)] animate-glow-pulse" />
      {children}
    </div>
  );
}

/* ============================================================ */
function Landing() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const t = translations[lang];
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero lang={lang} t={t} />
      <Problem lang={lang} t={t} />
      <Solution lang={lang} t={t} />
      <LiveDemo lang={lang} t={t} />
      <HowAI lang={lang} t={t} />
      <RiskLevels lang={lang} t={t} />
      <Dashboard lang={lang} t={t} />
      <Tech lang={lang} t={t} />
      <WhyTafweej lang={lang} t={t} />
      <Team lang={lang} t={t} />
      <Vision />
      <StayTuned lang={lang} t={t} />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ lang, t }: { lang: "ar" | "en"; t: typeof translations.en }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroHaram}
          alt="Aerial view of Masjid Al-Haram and the Kaaba"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Animated grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="oklch(0.62 0.16 155 / 0.15)" strokeWidth="0.5" />
            </pattern>
            <radialGradient id="gridFade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="black" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </radialGradient>
            <mask id="gridMask">
              <rect width="100%" height="100%" fill="url(#gridFade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
        </svg>
      </div>

      {/* Floating particles */}
      <Particles />

      {/* Flow lines */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-50" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flow" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.19 155)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.72 0.19 155)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.78 0.13 88)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <path
            key={i}
            d={`M -50 ${100 + i * 120} Q ${300 + i * 40} ${50 + i * 100} ${1200} ${80 + i * 110}`}
            stroke="url(#flow)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 6"
            style={{ animation: `flow-line ${8 + i}s linear infinite` }}
          />
        ))}
      </svg>

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[color:var(--gold)]/30 bg-white/[0.03] px-4 py-1.5 backdrop-blur">
              <span className="font-arabic text-xs text-[color:var(--gold)]" dir="rtl">تفويج</span>
              <span className="h-3 w-px bg-white/20" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                MCIT Hajj &amp; Umrah Tech Challenge · 2026
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-[clamp(2.5rem,6.2vw,5.5rem)] font-bold leading-[1.02] tracking-tight">
              {t.hero.title}<br />
              <span className="text-gradient-emerald">{t.hero.subtitle}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {t.hero.description} <span className="text-[color:var(--gold)]">{t.hero.earlyWarning}</span>
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#solution"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.06]"
              >
                {t.hero.viewArchitecture}
              </a>
              <a
                href="#dashboard"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.06]"
              >
                {t.hero.exploreSolution}
              </a>
            </div>
          </Reveal>

          <Reveal delay={520}>
            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/5 pt-8">
              {[
                [t.hero.pilgrimsYearly, t.hero.pilgrimsLabel],
                [t.hero.earlyWarning, t.hero.earlyWarningLabel],
                [t.hero.monitoring, t.hero.monitoringLabel],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold text-gradient-gold md:text-3xl">{v}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

function Particles() {
  const pts = [...Array(30)].map((_, i) => ({
    l: (i * 37) % 100,
    t: (i * 61) % 100,
    d: 4 + (i % 6),
    s: 1 + (i % 3),
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pts.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[color:var(--emerald-glow)]"
          style={{
            left: `${p.l}%`,
            top: `${p.t}%`,
            width: p.s,
            height: p.s,
            opacity: 0.4,
            boxShadow: "0 0 8px currentColor",
            animation: `float ${p.d}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}

function MiniChart() {
  const pts = [30, 42, 38, 55, 48, 62, 70, 65, 78, 72, 85, 90];
  const w = 240, h = 70;
  const path = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * w} ${h - (v / 100) * h}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-4 h-16 w-full">
      <defs>
        <linearGradient id="chart-g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.19 155)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(0.72 0.19 155)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="url(#chart-g)" />
      <path d={path} stroke="oklch(0.72 0.19 155)" strokeWidth="1.5" fill="none" />
      <circle cx={w} cy={h - (pts[pts.length - 1] / 100) * h} r="3" fill="oklch(0.78 0.13 88)" />
    </svg>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem({ lang, t }: { lang: "ar" | "en"; t: typeof translations.en }) {
  const stats = [
    { v: 3, s: "M+", l: t.problemStats.pilgrims },
    { v: 30, s: "s", l: t.problemStats.lagTime },
    { v: 6, s: "+/m²", l: t.problemStats.density },
    { v: 100, s: "%", l: t.problemStats.reactive },
  ];
  return (
    <section id="problem" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal><Eyebrow>{lang === "ar" ? "المشكلة" : "The Problem"}</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
                {t.problem.title} <span className="text-gradient-gold">{t.problem.subtitle}</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                {t.problem.description}
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.l} delay={300 + i * 80}>
                  <div className="glass rounded-2xl p-5">
                    <div className="font-display text-4xl font-bold text-gradient-emerald">
                      <Counter to={s.v} suffix={s.s} />
                    </div>
                    <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: timeline */}
          <Reveal delay={200}>
            <div className="relative">
              <div className="glass-strong relative overflow-hidden rounded-3xl p-8">
                <img
                  src={aiCrowd}
                  alt="AI visualization of crowd density"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/90" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Crowd density timeline · Mataf
                  </div>
                  <div className="mt-6 space-y-4">
                    {[
                      { label: "Normal", val: "2.1/m²", pct: 22, color: "var(--emerald-glow)" },
                      { label: "Congested", val: "4.6/m²", pct: 48, color: "oklch(0.82 0.16 90)" },
                      { label: "Danger", val: "6.3/m²", pct: 68, color: "oklch(0.72 0.19 55)" },
                      { label: "Critical", val: "8.1/m²", pct: 92, color: "oklch(0.62 0.22 25)" },
                    ].map((r) => (
                      <div key={r.label}>
                        <div className="flex items-baseline justify-between text-xs">
                          <span className="text-foreground/90">{r.label}</span>
                          <span className="font-mono text-muted-foreground">{r.val}</span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5">
                          <div
                            className="h-full animate-heat-pulse rounded-full"
                            style={{
                              width: `${r.pct}%`,
                              background: `linear-gradient(90deg, transparent, ${r.color})`,
                              boxShadow: `0 0 12px ${r.color}`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/5 p-4">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-red-500/20">
                      <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-red-400">Reaction Gap</div>
                      <div className="text-xs text-muted-foreground">
                        Human operators need minutes; crowd surges happen in seconds.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOLUTION ---------------- */
function Solution({ lang, t }: { lang: "ar" | "en"; t: typeof translations.en }) {
  const steps = t.solution.steps;
  return (
    <section id="solution" className="relative py-32">
      <div className="absolute inset-0 islamic-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>{lang === "ar" ? "حلنا" : "Our Solution"}</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              {t.solution.title}<br />
              and <span className="text-gradient-emerald">{t.solution.subtitle}</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-muted-foreground">
              {t.solution.description}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="group relative h-full">
                {/* connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-[color:var(--emerald-glow)]/40 to-transparent lg:block" />
                )}
                <div className="glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--emerald-glow)]/30">
                  <div className="mb-4 flex items-center justify-between">
                    <StepIcon name={s.icon} />
                    <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                  </div>
                  <div className="font-display text-lg font-semibold">{s.t}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--emerald-glow)]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    camera: <><path d="M4 8h3l2-2h6l2 2h3v10H4z"/><circle cx="12" cy="13" r="3"/></>,
    frame: <><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 9h16M4 15h16M9 4v16M15 4v16"/></>,
    cnn: <><circle cx="6" cy="7" r="1.5"/><circle cx="6" cy="17" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="7" r="1.5"/><circle cx="18" cy="17" r="1.5"/><path d="M7.5 7L10.5 12M7.5 17L10.5 12M13.5 12L16.5 7M13.5 12L16.5 17"/></>,
    map: <><path d="M4 6l6-2 4 2 6-2v14l-6 2-4-2-6 2z"/><path d="M10 4v16M14 6v16"/></>,
    series: <><path d="M3 17l4-6 4 3 5-8 5 4"/></>,
    lstm: <><rect x="3" y="8" width="4" height="8" rx="1"/><rect x="10" y="8" width="4" height="8" rx="1"/><rect x="17" y="8" width="4" height="8" rx="1"/><path d="M7 12h3M14 12h3"/></>,
    risk: <><path d="M12 2L2 22h20z"/><path d="M12 10v5M12 18v.5"/></>,
    bell: <><path d="M6 8a6 6 0 1 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9zM10 20a2 2 0 0 0 4 0"/></>,
  };
  return (
    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-emerald)]/10 ring-1 ring-[color:var(--emerald-glow)]/20">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-[color:var(--emerald-glow)]">
        {paths[name]}
      </svg>
    </div>
  );
}

/* ---------------- LIVE DEMO (tawaf simulation) ---------------- */
type Pilgrim = { a: number; r: number; hf: number; w: number; wob: number; c: number };

function LiveDemo({ lang, t }: { lang: "ar" | "en"; t: typeof translations.en }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  // keep the running loop pointed at the latest translations (for the AR/EN toggle)
  const strings = useRef(t.liveDemo);
  strings.current = t.liveDemo;

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0, CX = 0, CY = 0, S = 0, RMIN = 0, RMAX = 0, DPR = 1;
    let bgc: HTMLCanvasElement, fgc: HTMLCanvasElement;
    const HIJRA = -3 * Math.PI / 4, BA = Math.PI / 4;

    function buildLayers() {
      bgc = document.createElement("canvas");
      fgc = document.createElement("canvas");
      for (const c of [bgc, fgc]) { c.width = W * DPR; c.height = H * DPR; }
      const b = bgc.getContext("2d")!; b.setTransform(DPR, 0, 0, DPR, 0, 0);
      const f = fgc.getContext("2d")!; f.setTransform(DPR, 0, 0, DPR, 0, 0);
      // white marble plaza
      const mg = b.createRadialGradient(CX, CY, S, CX, CY, RMAX + 70);
      mg.addColorStop(0, "#f5f0e4"); mg.addColorStop(.72, "#e9e2d1"); mg.addColorStop(1, "#cdc5b1");
      b.fillStyle = mg; b.fillRect(0, 0, W, H);
      b.strokeStyle = "rgba(110,100,80,.13)"; b.lineWidth = 1;
      for (let r = S * 1.3; r <= RMAX; r += (RMAX - S * 1.3) / 5) { b.beginPath(); b.arc(CX, CY, r, 0, Math.PI * 2); b.stroke(); }
      b.strokeStyle = "rgba(110,100,80,.07)";
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 12) {
        b.beginPath(); b.moveTo(CX + Math.cos(a) * S * 1.3, CY + Math.sin(a) * S * 1.3);
        b.lineTo(CX + Math.cos(a) * RMAX, CY + Math.sin(a) * RMAX); b.stroke();
      }
      b.beginPath(); b.arc(CX, CY, RMAX + 34, 0, Math.PI * 2); // colonnade
      b.lineWidth = 26; b.strokeStyle = "#c9c0aa"; b.stroke();
      b.fillStyle = "#a89d83";
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 18) {
        b.beginPath(); b.arc(CX + Math.cos(a) * (RMAX + 34), CY + Math.sin(a) * (RMAX + 34), 2.6, 0, Math.PI * 2); b.fill();
      }
      const bx = CX + Math.cos(BA) * S * .71, by = CY + Math.sin(BA) * S * .71;
      b.strokeStyle = "rgba(90,80,60,.28)"; b.lineWidth = 1;
      b.beginPath(); b.moveTo(bx, by);
      b.lineTo(CX + Math.cos(BA) * (RMAX + 6), CY + Math.sin(BA) * (RMAX + 6)); b.stroke();
      // Hijr Ismail, Kaaba (kiswa + gold hizam + door), Maqam Ibrahim, Black Stone
      f.lineCap = "round";
      f.strokeStyle = "rgba(70,62,45,.28)"; f.lineWidth = 8;
      f.beginPath(); f.arc(CX + 2, CY + 3, S * .95, HIJRA - 1.0, HIJRA + 1.0); f.stroke();
      f.strokeStyle = "#faf6ec"; f.lineWidth = 5;
      f.beginPath(); f.arc(CX, CY, S * .95, HIJRA - 1.0, HIJRA + 1.0); f.stroke();
      f.fillStyle = "rgba(55,48,34,.38)";
      f.beginPath(); f.ellipse(CX + 6, CY + 9, S * .78, S * .68, 0, 0, Math.PI * 2); f.fill();
      const kg = f.createLinearGradient(CX - S / 2, CY - S / 2, CX + S / 2, CY + S / 2);
      kg.addColorStop(0, "#1b1b1f"); kg.addColorStop(.45, "#0a0a0c"); kg.addColorStop(1, "#151517");
      f.fillStyle = kg;
      f.beginPath(); f.roundRect(CX - S / 2, CY - S / 2, S, S, 3); f.fill();
      f.strokeStyle = "rgba(0,0,0,.65)"; f.lineWidth = 1; f.stroke();
      f.strokeStyle = "rgba(212,175,55,.85)"; f.lineWidth = 2;
      f.beginPath(); f.roundRect(CX - S / 2 + 5, CY - S / 2 + 5, S - 10, S - 10, 2); f.stroke();
      f.fillStyle = "rgba(212,175,55,.9)";
      f.fillRect(CX + S / 2 - 3.5, CY - S * .12, 3.5, S * .24);
      const mx = CX + Math.cos(BA - .35) * S * 1.55, my = CY + Math.sin(BA - .35) * S * 1.55;
      f.fillStyle = "#D4AF37";
      f.beginPath(); f.arc(mx, my, 4, 0, Math.PI * 2); f.fill();
      f.strokeStyle = "rgba(60,50,30,.5)"; f.lineWidth = 1; f.stroke();
      f.fillStyle = "#E4C566";
      f.beginPath(); f.arc(bx, by, 3, 0, Math.PI * 2); f.fill();
      f.strokeStyle = "rgba(60,50,30,.6)"; f.stroke();
    }

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 1.25);
      W = cv!.clientWidth; H = cv!.clientHeight;
      cv!.width = W * DPR; cv!.height = H * DPR; ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      CX = W / 2; CY = H / 2; S = Math.min(W, H) * .14; RMIN = S * .88; RMAX = Math.min(W, H) * .45;
      buildLayers();
    }

    const N = 1600;
    const P: Pilgrim[] = [];
    for (let i = 0; i < N; i++) {
      const c = Math.random();
      // home stored as a fraction of the ring; actual radius derived each frame (resize-safe)
      P.push({ a: Math.random() * Math.PI * 2, r: -1, hf: Math.pow(Math.random(), 1.7), w: .5 + Math.random() * .9, wob: Math.random() * Math.PI * 2, c: c < .55 ? 0 : c < .82 ? 1 : c < .94 ? 2 : 3 });
    }
    const CYCLE = 34000, T_BUILD = 6000, T_FORE = 9000, T_CRIT = 19000, T_INT = 22500, T_STAB = 30000;
    let start = performance.now();
    const surgeA = 0.4;
    const phase = (ms: number) => ms < T_BUILD ? "idle" : ms < T_CRIT ? "build" : ms < T_INT ? "crit" : ms < T_STAB ? "intervene" : "recover";
    const angDist = (a: number, b: number) => { let d = Math.abs(a - b) % (Math.PI * 2); return d > Math.PI ? Math.PI * 2 - d : d; };

    function setHud(ms: number) {
      const s = strings.current, p = phase(ms), lead = Math.max(0, Math.ceil((T_CRIT - ms) / 1000));
      let dot = "bg-emerald-400", border = "border-white/10", text = "text-muted-foreground", msg: string;
      if (p === "idle") msg = s.nominal;
      else if (p === "build" && ms >= T_FORE) { msg = s.forecast.replace("{s}", String(lead)); dot = "bg-amber-400"; border = "border-amber-400/40"; text = "text-amber-300"; }
      else if (p === "build") msg = s.watch;
      else if (p === "crit") { msg = s.critical; dot = "bg-red-500"; border = "border-red-500/40"; text = "text-red-400"; }
      else if (p === "intervene") { msg = s.intervene; dot = "bg-amber-400"; border = "border-amber-400/40"; text = "text-amber-300"; }
      else msg = s.stable;
      if (dotRef.current) dotRef.current.className = "h-2 w-2 shrink-0 rounded-full transition-colors " + dot;
      if (hudRef.current) hudRef.current.className = "mt-3 flex items-center gap-3 rounded-xl border bg-white/[0.03] px-4 py-3 text-xs font-medium transition-colors md:text-sm " + border + " " + text;
      if (textRef.current) textRef.current.textContent = msg;
    }

    let lastHud = 0, raf = 0;
    function tick(now: number) {
      const ms = (now - start) % CYCLE, p = phase(ms);
      if (now - lastHud > 250) { setHud(ms); lastHud = now; }
      ctx!.drawImage(bgc, 0, 0, W, H);
      if (p !== "idle") {
        const heat = p === "crit" ? 1 : (p === "build" ? Math.min(1, (ms - T_BUILD) / (T_CRIT - T_BUILD)) : Math.max(0, 1 - (ms - T_INT) / 6000));
        if (heat > 0.02) {
          const col = p === "crit" ? "239,68,68" : "245,158,11";
          ctx!.fillStyle = `rgba(${col},${.08 + .20 * heat})`;
          ctx!.beginPath(); ctx!.moveTo(CX, CY);
          ctx!.arc(CX, CY, RMAX + 8, surgeA - .5, surgeA + .5); ctx!.closePath(); ctx!.fill();
          ctx!.strokeStyle = `rgba(${col},${.45 + .4 * heat})`; ctx!.lineWidth = 1.5;
          ctx!.beginPath(); ctx!.arc(CX, CY, RMAX + 8, surgeA - .5, surgeA + .5); ctx!.stroke();
        }
      }
      const heatNow = p === "crit" ? 1 : (p === "build" ? Math.min(1, (ms - T_BUILD) / (T_CRIT - T_BUILD)) : 0);
      const dots = [new Path2D(), new Path2D(), new Path2D(), new Path2D()];
      const warm = new Path2D(), hot = new Path2D();
      for (const q of P) {
        const home = RMIN + q.hf * (RMAX - RMIN);
        if (q.r < 0) q.r = home; // lazy init once dimensions exist
        const near = angDist(q.a, surgeA) < .55;
        let speed = q.w * (38 / q.r);
        if ((p === "build" || p === "crit") && near) speed *= .22;
        if (p === "intervene" && near) { speed *= 2.4; q.r = Math.min(RMAX, q.r + .35); }
        else if (p !== "build" && p !== "crit") { q.r += (home - q.r) * .012 + Math.sin(now / 900 + q.wob) * .04; }
        const minR = angDist(q.a, HIJRA) < .72 ? S * 1.18 : RMIN;
        if (q.r < minR) q.r += (minR - q.r) * .3;
        q.a += speed * .016;
        const x = CX + Math.cos(q.a) * q.r, y = CY + Math.sin(q.a) * q.r;
        let d = dots[q.c], cr = 1.3;
        if (near && heatNow > 0) { if (heatNow > .85) { d = hot; cr = 2.0; } else if (heatNow > .45) { d = warm; cr = 1.7; } }
        d.moveTo(x + cr, y); d.arc(x, y, cr, 0, Math.PI * 2);
      }
      // crowd tones tuned to READ against the light marble (heads/shadows), like an aerial photo
      ctx!.fillStyle = "rgba(96,104,118,.92)"; ctx!.fill(dots[0]);   // slate — most pilgrims
      ctx!.fillStyle = "rgba(150,124,96,.92)"; ctx!.fill(dots[1]);   // warm tan
      ctx!.fillStyle = "rgba(52,50,54,.94)"; ctx!.fill(dots[2]);     // dark heads
      ctx!.fillStyle = "rgba(238,235,228,.92)"; ctx!.fill(dots[3]);  // occasional white robe fleck
      ctx!.fillStyle = "rgba(245,158,11,.95)"; ctx!.fill(warm);
      ctx!.fillStyle = "rgba(239,68,68,.95)"; ctx!.fill(hot);
      ctx!.drawImage(fgc, 0, 0, W, H);
      raf = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="demo" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>{t.liveDemo.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              {t.liveDemo.title}<br /><span className="text-gradient-emerald">{t.liveDemo.title2}</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-muted-foreground">{t.liveDemo.description}</p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="glass-strong overflow-hidden rounded-3xl p-4 shadow-[var(--shadow-elegant)] md:p-6">
              <div className="flex items-center justify-between px-2 pb-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>{t.liveDemo.label}</span>
                <span className="flex items-center gap-1.5 text-[color:var(--emerald-glow)]">
                  <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-current" /> {t.liveDemo.live}
                </span>
              </div>
              <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "1 / 1" }}>
                <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
              </div>
              <div ref={hudRef} className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-medium text-muted-foreground transition-colors md:text-sm" dir={lang === "ar" ? "rtl" : "ltr"}>
                <span ref={dotRef} className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 transition-colors" />
                <span ref={textRef}>{t.liveDemo.nominal}</span>
              </div>
              <p className="mt-3 text-center text-[11px] text-muted-foreground/70">{t.liveDemo.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- HOW AI WORKS ---------------- */
function HowAI({ lang, t }: { lang: "ar" | "en"; t: typeof translations.en }) {
  const cards = t.howAI.cards;
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{t.howAI.title}</Eyebrow>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              {t.howAI.subtitle}<br /><span className="text-gradient-emerald">{t.howAI.subtitle2}</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-md text-muted-foreground">
              {t.howAI.description}
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--gradient-emerald)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                <div className="relative">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <span className="font-display text-lg font-bold text-[color:var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="font-display text-xl font-semibold">{c.t}</div>
                  <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</div>
                  <div className="mt-6 inline-block rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.tag}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RISK LEVELS ---------------- */
function RiskLevels({ lang, t }: { lang: "ar" | "en"; t: typeof translations.en }) {
  const levels = [
    { emoji: "🟢", label: t.riskLevels.safe, density: "< 3.0/m²", conf: "97%", act: t.riskLevels.safeAction, tone: "emerald", color: "var(--emerald-glow)" },
    { emoji: "🟡", label: t.riskLevels.watch, density: "3.0 – 4.5/m²", conf: "94%", act: t.riskLevels.watchAction, tone: "yellow", color: "oklch(0.85 0.16 90)" },
    { emoji: "🟠", label: t.riskLevels.warning, density: "4.5 – 6.0/m²", conf: "91%", act: t.riskLevels.warningAction, tone: "orange", color: "oklch(0.72 0.19 55)" },
    { emoji: "🔴", label: t.riskLevels.critical, density: "> 6.0/m²", conf: "89%", act: t.riskLevels.criticalAction, tone: "red", color: "oklch(0.62 0.22 25)" },
  ];
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>{lang === "ar" ? "مستويات الخطر" : "Risk Levels"}</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              {t.riskLevels.title} <span className="text-gradient-gold">{t.riskLevels.subtitle}</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {levels.map((r, i) => (
            <Reveal key={r.label} delay={i * 100}>
              <div className="glass-strong relative overflow-hidden rounded-2xl p-6">
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: r.color, boxShadow: `0 0 20px ${r.color}` }}
                />
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{r.emoji}</div>
                  <div
                    className="h-2 w-2 animate-glow-pulse rounded-full"
                    style={{ background: r.color, boxShadow: `0 0 12px ${r.color}` }}
                  />
                </div>
                <div className="mt-4 font-display text-2xl font-bold">{r.label}</div>
                <div className="mt-4 space-y-2 border-t border-white/5 pt-4 text-xs">
                  <Row k={t.riskLevels.density} v={r.density} />
                  <Row k={t.riskLevels.action} v={r.act} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-muted-foreground">{k}</span>
      <span className="text-right font-mono text-foreground/90">{v}</span>
    </div>
  );
}

/* ---------------- DASHBOARD MOCKUP ---------------- */
function Dashboard({ lang, t }: { lang: "ar" | "en"; t: typeof translations.en }) {
  return (
    <section id="dashboard" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>{t.dashboard.title}</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              {t.dashboard.subtitle}<br /><span className="text-gradient-emerald">{t.dashboard.subtitle2}</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-16">
            <div className="glass-strong overflow-hidden rounded-3xl p-4 shadow-[var(--shadow-elegant)] md:p-6">
              {/* top bar */}
              <div className="flex items-center justify-between border-b border-white/5 px-2 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
                  </div>
                  <div className="font-mono text-[11px] text-muted-foreground">tafweej.ops / dashboard</div>
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span className="hidden sm:inline">Makkah · UTC+3</span>
                  <span className="flex items-center gap-1.5 text-[color:var(--emerald-glow)]">
                    <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-current" /> ONLINE
                  </span>
                </div>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-12">
                {/* Heatmap */}
                <div className="lg:col-span-8">
                  <DashboardHeatmap />
                </div>
                {/* Alerts */}
                <div className="space-y-3 lg:col-span-4">
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Alerts</span>
                      <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-semibold text-red-400">3 ACTIVE</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { s: "critical", z: "Mataf · Zone A3", t: "t+8m · density surge predicted", c: "text-red-400", bg: "bg-red-500/10" },
                        { s: "warning", z: "Marwa Gate", t: "t+12m · flow bottleneck", c: "text-orange-400", bg: "bg-orange-500/10" },
                        { s: "watch", z: "Jamarat Bridge L2", t: "t+15m · rising density", c: "text-yellow-400", bg: "bg-yellow-500/10" },
                      ].map((a, i) => (
                        <div key={i} className={`rounded-lg ${a.bg} p-3`}>
                          <div className="flex items-center justify-between">
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${a.c}`}>{a.s}</span>
                            <span className="font-mono text-[10px] text-muted-foreground">{a.t.split("·")[0]}</span>
                          </div>
                          <div className="mt-1 text-xs font-medium text-foreground">{a.z}</div>
                          <div className="text-[11px] text-muted-foreground">{a.t}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Zone Status</span>
                    <div className="mt-3 space-y-2 text-xs">
                      {[
                        ["Mataf", "critical"],
                        ["Sa'i Corridor", "watch"],
                        ["Zamzam Gallery", "safe"],
                        ["Jamarat", "warning"],
                        ["Mina Camp 4", "safe"],
                      ].map(([n, s]) => {
                        const dot = s === "safe" ? "bg-emerald-400" : s === "watch" ? "bg-yellow-400" : s === "warning" ? "bg-orange-400" : "bg-red-400";
                        return (
                          <div key={n} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0">
                            <div className="flex items-center gap-2">
                              <span className={`h-1.5 w-1.5 rounded-full ${dot} animate-glow-pulse`} />
                              <span className="text-foreground/90">{n}</span>
                            </div>
                            <span className="font-mono text-[10px] uppercase text-muted-foreground">{s}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Chart */}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 lg:col-span-8">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Density Forecast · Mataf</div>
                      <div className="mt-0.5 font-mono text-[10px] text-muted-foreground">Rolling 30 min · +15 min prediction</div>
                    </div>
                    <div className="flex gap-2 text-[10px]">
                      <span className="flex items-center gap-1.5 text-muted-foreground"><span className="h-2 w-2 rounded-full bg-[color:var(--emerald-glow)]"/>Observed</span>
                      <span className="flex items-center gap-1.5 text-muted-foreground"><span className="h-2 w-2 rounded-full bg-[color:var(--gold)]"/>Predicted</span>
                    </div>
                  </div>
                  <BigChart />
                </div>

                {/* Camera thumbs */}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 lg:col-span-4">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Live Cameras</div>
                  <div className="grid grid-cols-2 gap-2">
                    {["CAM 01", "CAM 07", "CAM 12", "CAM 18"].map((c, i) => (
                      <div key={c} className="relative aspect-video overflow-hidden rounded-md bg-black/40 ring-1 ring-white/5">
                        <img src={heroHaram} width={1920} height={1280} loading="lazy" alt={c} className="absolute inset-0 h-full w-full object-cover opacity-60" style={{ filter: `hue-rotate(${i * 40}deg)` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70" />
                        <div className="absolute bottom-1 left-1.5 font-mono text-[9px] text-white/80">{c}</div>
                        <div className="absolute right-1.5 top-1 flex items-center gap-1 text-[9px] text-red-400">
                          <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-current" /> REC
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DashboardHeatmap() {
  const cells = 16 * 10;
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/5 bg-black/40">
      <img src={heroHaram} alt="Site map" width={1920} height={1280} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 grid grid-cols-16 grid-rows-10" style={{ gridTemplateColumns: "repeat(16, 1fr)", gridTemplateRows: "repeat(10, 1fr)" }}>
        {[...Array(cells)].map((_, i) => {
          // radial hotspot pattern
          const x = i % 16, y = Math.floor(i / 16);
          const dx = x - 9, dy = y - 5;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const heat = Math.max(0, 1 - dist / 7);
          const noise = ((i * 37) % 30) / 100;
          const v = Math.min(1, heat + noise * 0.5);
          if (v < 0.15) return <div key={i} />;
          const color = v > 0.75 ? "oklch(0.62 0.22 25)"
            : v > 0.55 ? "oklch(0.72 0.19 55)"
            : v > 0.35 ? "oklch(0.82 0.16 90)"
            : "oklch(0.72 0.19 155)";
          return (
            <div
              key={i}
              className="animate-heat-pulse"
              style={{
                background: color,
                opacity: v * 0.75,
                mixBlendMode: "screen",
                animationDelay: `${(i % 10) * 0.15}s`,
              }}
            />
          );
        })}
      </div>
      {/* markers */}
      {[
        { l: "35%", t: "42%", tag: "A3" },
        { l: "58%", t: "55%", tag: "B1" },
        { l: "70%", t: "35%", tag: "C4" },
      ].map((m) => (
        <div key={m.tag} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: m.l, top: m.t }}>
          <div className="relative">
            <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-red-400/50" />
            <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-red-500 ring-2 ring-white/40" />
          </div>
          <div className="mt-1 font-mono text-[10px] text-white">{m.tag}</div>
        </div>
      ))}
      <div className="absolute left-3 top-3 rounded-md bg-black/40 px-2 py-1 font-mono text-[10px] text-white/80 backdrop-blur">
        LIVE HEATMAP · MATAF
      </div>
      <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-md bg-black/40 px-2 py-1 text-[10px] backdrop-blur">
        <span className="text-muted-foreground">low</span>
        <span className="h-2 w-24 rounded-full" style={{ background: "linear-gradient(90deg, oklch(0.72 0.19 155), oklch(0.82 0.16 90), oklch(0.72 0.19 55), oklch(0.62 0.22 25))" }} />
        <span className="text-muted-foreground">high</span>
      </div>
    </div>
  );
}

function BigChart() {
  const observed = [22, 28, 24, 30, 34, 38, 42, 46, 44, 50, 55, 60, 58, 64, 68];
  const predicted = [68, 72, 78, 84, 88, 92];
  const all = [...observed, ...predicted];
  const w = 700, h = 160;
  const maxV = 100;
  const pathFor = (arr: number[], offset = 0) =>
    arr.map((v, i) => `${i === 0 ? "M" : "L"} ${((i + offset) / (all.length - 1)) * w} ${h - (v / maxV) * h}`).join(" ");
  const obsPath = pathFor(observed);
  const predPath = pathFor(predicted, observed.length - 1);
  const splitX = ((observed.length - 1) / (all.length - 1)) * w;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-40 w-full">
      <defs>
        <linearGradient id="obs-g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.19 155)" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="oklch(0.72 0.19 155)" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="pred-g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.13 88)" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="oklch(0.78 0.13 88)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((y) => (
        <line key={y} x1="0" y1={h * y} x2={w} y2={h * y} stroke="oklch(1 0 0 / 0.05)" strokeDasharray="2 4"/>
      ))}
      <line x1={splitX} y1="0" x2={splitX} y2={h} stroke="oklch(0.78 0.13 88 / 0.4)" strokeDasharray="3 3"/>
      <text x={splitX + 4} y={12} fill="oklch(0.78 0.13 88)" fontSize="9" fontFamily="monospace">NOW</text>

      <path d={`${obsPath} L ${splitX} ${h} L 0 ${h} Z`} fill="url(#obs-g)"/>
      <path d={obsPath} stroke="oklch(0.72 0.19 155)" strokeWidth="1.8" fill="none"/>

      <path d={`${predPath} L ${w} ${h} L ${splitX} ${h} Z`} fill="url(#pred-g)"/>
      <path d={predPath} stroke="oklch(0.78 0.13 88)" strokeWidth="1.8" fill="none" strokeDasharray="4 3"/>

      <line x1="0" y1={h * 0.32} x2={w} y2={h * 0.32} stroke="oklch(0.62 0.22 25 / 0.5)" strokeDasharray="4 4"/>
      <text x="4" y={h * 0.32 - 4} fill="oklch(0.72 0.22 25)" fontSize="9" fontFamily="monospace">CRITICAL 6.0/m²</text>
    </svg>
  );
}

/* ---------------- TECH ---------------- */
function Tech({ lang, t }: { lang: "ar" | "en"; t: typeof translations.en }) {
  const techs = [
    "Python", "PyTorch", "CSRNet", "OpenCV",
    "LSTM", "CNN", "FastAPI", "React",
    "Tailwind CSS", "Machine Learning", "Computer Vision", "Time Series",
  ];
  return (
    <section id="tech" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow>{lang === "ar" ? "التقنية" : "Technology"}</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
                {t.technology.title} <span className="text-gradient-emerald">{t.technology.subtitle}</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-muted-foreground">
                {t.technology.description}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {techs.map((t, i) => (
                <Reveal key={t} delay={i * 40}>
                  <div className="glass group flex items-center gap-3 rounded-xl p-4 transition-all hover:-translate-y-0.5 hover:border-[color:var(--emerald-glow)]/30">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[var(--gradient-emerald)]/10 ring-1 ring-white/10">
                      <span className="font-mono text-[10px] text-[color:var(--gold)]">{t.slice(0, 2).toUpperCase()}</span>
                    </div>
                    <span className="truncate text-sm font-medium">{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY TAFWEEJ ---------------- */
function WhyTafweej({ lang, t }: { lang: "ar" | "en"; t: typeof translations.en }) {
  const items = [
    { t: t.whyTafweej.observe, d: t.whyTafweej.observeDesc, icon: "eye" },
    { t: t.whyTafweej.predict, d: t.whyTafweej.predictDesc, icon: "brain" },
    { t: t.whyTafweej.alert, d: t.whyTafweej.alertDesc, icon: "alert" },
    { t: t.whyTafweej.intervene, d: t.whyTafweej.interveneDesc, icon: "flow" },
    { t: t.whyTafweej.saveLives, d: t.whyTafweej.saveLivesDesc, icon: "heart" },
  ];
  const icons: Record<string, React.ReactNode> = {
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
    brain: <><path d="M9 2a3 3 0 0 0-3 3 3 3 0 0 0-3 3v2a3 3 0 0 0 1 2.2A3 3 0 0 0 3 15v2a3 3 0 0 0 3 3h1.5M15 2a3 3 0 0 1 3 3 3 3 0 0 1 3 3v2a3 3 0 0 1-1 2.2A3 3 0 0 1 21 15v2a3 3 0 0 1-3 3h-1.5M12 2v20"/></>,
    alert: <><path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/></>,
    flow: <><path d="M3 12h4M17 12h4M12 3v4M12 17v4"/><circle cx="12" cy="12" r="3"/></>,
    heart: <><path d="M20 8.5a5.5 5.5 0 0 0-9.5-3.8L12 6l1.5-1.3A5.5 5.5 0 0 1 22 8.5c0 6-10 11-10 11S2 14.5 2 8.5A5.5 5.5 0 0 1 10.5 4"/></>,
  };
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 islamic-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>{t.whyTafweej.title}</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              {t.whyTafweej.subtitle} <span className="text-gradient-gold">{t.whyTafweej.saveLives}.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-24">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--emerald-glow)]/40 to-transparent md:block" />

          <div className="grid gap-10 md:grid-cols-5">
            {items.map((it, i) => (
              <Reveal key={it.t} delay={i * 120}>
                <div className="relative text-center">
                  <div className="relative mx-auto grid h-16 w-16 place-items-center">
                    <div className="absolute inset-0 animate-glow-pulse rounded-full bg-[var(--gradient-emerald)] opacity-30 blur-xl" />
                    <div className="relative grid h-16 w-16 place-items-center rounded-full border border-[color:var(--emerald-glow)]/40 bg-background/80 backdrop-blur">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[color:var(--emerald-glow)]">
                        {icons[it.icon]}
                      </svg>
                    </div>
                  </div>
                  <div className="mt-6 font-display text-xl font-bold">{it.t}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{it.d}</div>
                  <div className="mt-4 font-mono text-[10px] text-[color:var(--gold)]">STEP 0{i + 1}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEAM ---------------- */
function Team({ lang, t }: { lang: "ar" | "en"; t: typeof translations.en }) {
  const team = [
    { n: "Zamiche Nour", r: "AI Student", github: "https://github.com/Nourzm", linkedin: "https://www.linkedin.com/in/nourzamiche/" },
    { n: "Sayah Maroua", r: "AI Student", github: "https://github.com/Maroua0618", linkedin: "https://www.linkedin.com/in/maroua-sayah-997709284/" },
    { n: "Bourzak Douaa", r: "AI Student", github: "https://github.com/douaabourzak", linkedin: "https://www.linkedin.com/in/douaa-bourzak/" },
    { n: "Atoum Sirine", r: "AI Student", github: "https://github.com/siiiirine", linkedin: "https://www.linkedin.com/in/sirine-atoum-b394a6307/" },
    { n: "Bensaddek Kaouther", r: "AI Student", github: "https://github.com/kaoutherbensaddek", linkedin: "https://www.linkedin.com/in/kaouther-bensaddek-7434162b8/" },
  ];
  return (
    <section id="team" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>{lang === "ar" ? "الفريق" : "The Team"}</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              {t.team.title}<br/><span className="text-gradient-emerald">{t.team.subtitle}</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-muted-foreground">
              {t.team.description}
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((m, i) => (
            <Reveal key={m.n} delay={i * 100}>
              <div className="group glass relative overflow-hidden rounded-2xl p-6 text-center transition-all hover:-translate-y-1">
                <div className="relative mx-auto mb-5 grid h-24 w-24 place-items-center">
                  <div className="absolute inset-0 rounded-full bg-[var(--gradient-emerald)] opacity-40 blur-xl transition-opacity group-hover:opacity-70" />
                  <div className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-[color:var(--emerald-glow)]/20 to-[color:var(--gold)]/10 ring-1 ring-white/10">
                    <span className="font-display text-2xl font-bold text-gradient-gold">
                      {m.n.split(" ").map((p) => p[0]).join("")}
                    </span>
                  </div>
                </div>
                <div className="font-display text-base font-semibold leading-tight">{m.n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{t.team.roles[i]}</div>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <a href={m.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- VISION ---------------- */
function Vision() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <img src={minaImg} alt="Mina tents at dawn" width={1280} height={800} loading="lazy" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal><Eyebrow>Vision</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
                <span className="text-muted-foreground">Today,</span><br/>
                we predict crowds.<br/>
                <span className="text-muted-foreground">Tomorrow,</span><br/>
                <span className="text-gradient-emerald">a complete AI infrastructure</span><br/>
                <span className="text-gradient-gold">protecting every pilgrim.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="glass-strong rounded-3xl p-8">
              <div className="space-y-6">
                {[
                  { p: "Phase 01", t: "Predictive Density", d: "Deploy CSRNet + LSTM across primary zones." },
                  { p: "Phase 02", t: "Multi-Modal Fusion", d: "IoT sensors, mobile signals & thermal imagery." },
                  { p: "Phase 03", t: "Autonomous Response", d: "AI-driven signage, routing, resource allocation." },
                  { p: "Phase 04", t: "Nation-scale Deployment", d: "Kingdom-wide safety infrastructure aligned with Vision 2030." },
                ].map((r) => (
                  <div key={r.t} className="border-l-2 border-[color:var(--emerald-glow)]/40 pl-5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold)]">{r.p}</div>
                    <div className="mt-1 font-display text-lg font-semibold">{r.t}</div>
                    <div className="text-sm text-muted-foreground">{r.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STAY TUNED ---------------- */
function StayTuned({ lang, t }: { lang: "ar" | "en"; t: typeof translations.en }) {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>{lang === "ar" ? "قريباً" : "Coming Soon"}</Eyebrow></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              {t.stayTuned.title}<br/><span className="text-gradient-emerald">{t.stayTuned.subtitle}</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-muted-foreground">
              {t.stayTuned.description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Logo />
              <div>
                <div className="font-display text-lg font-bold">Tafweej</div>
                <div className="font-arabic text-xs text-muted-foreground" dir="rtl">تفويج</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Predicting crowd risks before they become emergencies.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Program</div>
            <div className="mt-4 space-y-2 text-sm">
              <div>MCIT Hajj &amp; Umrah Tech Challenge</div>
              <div className="text-muted-foreground">Kingdom of Saudi Arabia · 2026</div>
              <div className="text-muted-foreground">Aligned with Saudi Vision 2030</div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</div>
            <div className="mt-4 flex items-center gap-4">
              <a href="https://github.com/Nourzm" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-foreground">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/nourzamiche/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© 2026 Tafweej.</div>
        </div>
      </div>
    </footer>
  );
}
