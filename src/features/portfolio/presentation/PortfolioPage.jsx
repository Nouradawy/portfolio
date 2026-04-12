import { useEffect, useRef, useState } from "react";
import ReactGA from "react-ga4";
import { IoPaperPlaneSharp } from "react-icons/io5";
import PortfolioSummary from "./components/PortfolioSummary.jsx";
import PaymentShowcase from "../../payment/presentation/PaymentShowcase.jsx";
import ProjectsTimeline from "../../projects/presentation/ProjectsTimeline.jsx";
import ContactSection from "../../contact/presentation/ContactSection.jsx";

export default function PortfolioPage() {
    const videoRef = useRef(null);
    const [isLoop, setIsLoop] = useState(false);
    const [heroText, setHeroText] = useState('From paper ball');
    const [playList] = useState([
        `/assets/Comp 1.webm`,
        `/assets/Comp 2.webm`
    ]);

    useEffect(() => {
        LoadBackground(videoRef);
        if (videoRef.current) {
            videoRef.current.src = playList[0];
            videoRef.current.loop = false;
            setTimeout(() => {
                setHeroText('To paper plane');
            }, 4650);
        }
    }, [playList]);

    const PlayAirplaneLoop = () => {
        setIsLoop(true);
        const v = videoRef.current;
        if (v) {
            v.loop = false;
            v.src = playList[1];
            v.load();
            v.play().catch(() => {});
        }
    };

    const downloadResume = () => {
        const url = "/assets/Resume.pdf";
        const a = document.createElement("a");
        a.href = url;
        a.download = "Resume.pdf";
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    return (
        <div className="relative bg-[#050505]">
            <div className="relative w-full justify-center flex motion-duration-[3s] motion-preset-focus z-10">
                <div className="absolute top-1/2 right-0 w-screen h-[50vh] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none z-1"></div>

                <div data-us-project="bcBYZIStYXwiogchBNHO"
                     className="absolute top-0 w-full md:w-[75vw] h-[100vw] md:h-[50vw] pointer-events-none"
                     style={{
                         zIndex: 0,
                         WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
                         maskImage: 'linear-gradient(#f7de27b5, black 0%, black 80%, transparent)',
                         filter: 'hue-rotate(90deg) saturate(150%)',
                     }}
                />

                <nav className="absolute h-14 w-full bg-black/80">
                    <div className="relative flex items-center h-full w-full">
                        <div className="flex items-center md:ml-30 gap-4">
                            <IoPaperPlaneSharp className="text-pink-600 text-3xl rotate-15" />
                            <h1 className="text-white">To paper plane</h1>
                        </div>

                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex items-center">
                            <div className="absolute inset-0 -z-10 blur-2xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(255,0,122,0.22),rgba(157,0,255,0.10),transparent_70%)]" />
                            <div className="relative flex items-center gap-2 rounded-xl px-3 py-2 border border-white/15 bg-white/6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.55)]">
                                <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]" />
                                {[
                                    { label: "Home", target: "top" },
                                    { label: "Projects", target: "projects" },
                                    { label: "Resume", target: "resume" },
                                ].map((item) => (
                                    <button
                                        key={item.label}
                                        type="button"
                                        className="relative px-9 py-2.5 rounded-xl text-sm font-semibold tracking-wide text-white/70 hover:text-white hover:bg-white/10 active:bg-white/15 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500/50"
                                        onClick={() => {
                                            ReactGA.event({
                                                category: 'Navigation',
                                                action: `Click ${item.label}`,
                                                label: item.target
                                            });

                                            if (item.target === "resume") {
                                                downloadResume();
                                                return;
                                            }
                                            const el = item.target === "top" ? document.body : document.getElementById(item.target);
                                            if (item.target === "top") {
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            } else {
                                                el?.scrollIntoView({ behavior: "smooth", block: "start" });
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="ml-auto flex items-center gap-4 md:mr-25">
                            <button
                                type="button"
                                className="bg-[linear-gradient(90deg,#ff007a_0%,#9d00ff_100%)] px-6 py-2.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
                                onClick={() => {
                                    ReactGA.event({
                                        category: 'Navigation',
                                        action: 'Click Let\'s Talk (Nav)',
                                    });
                                    const el = document.getElementById("contact");
                                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                            >Let's Talk</button>
                            <img
                                className="w-10 h-10 object-cover rounded-full cursor-pointer hover:ring-2 hover:ring-pink-500 transition-all"
                                src="/assets/projects/Avatar.png"
                                alt="Avatar"
                                onClick={() => {
                                    ReactGA.event({
                                        category: 'Navigation',
                                        action: 'Click Avatar',
                                    });
                                }}
                            />
                        </div>
                    </div>
                </nav>

                <div key={heroText} className="relative z-2 flex flex-col px-6 md:px-16 lg:px-32 justify-items-center font-Inter mt-32 md:mt-48 lg:mt-64 w-full md:w-auto">
                    <h1 className="text-gray-300 text-2xl md:text-3xl lg:text-5xl font-bold drop-shadow-lg text-left motion-duration-[3s] motion-preset-blur-up">
                        {heroText}
                    </h1>
                    <h1 className={`flex text-gray-300 mt-4 md:mt-10 font-normal text-lg md:text-xl ${heroText === "To paper plane" ? "visible" : "invisible"} motion-duration-[3s] motion-preset-blur-up`}>
                        Transforming Rough Ideas Into Refined Digital Experiences
                    </h1>

                    <div className={`flex flex-row mt-15 gap-10 ${heroText === "To paper plane" ? "visible" : "invisible"}`}>
                        <button className="group bg-neutral-900 px-4 py-2 rounded-sm text-white border border-white/10 hover:border-red-500/50 tracking-wide uppercase w-full sm:w-auto cursor-pointer"
                                onClick={() => {
                                    ReactGA.event({
                                        category: 'Engagement',
                                        action: 'Download Resume',
                                    });
                                    downloadResume();
                                }}>
                            <div className="flex justify-center items-center gap-2">
                                Resume
                                <span className="material-icons-round text-[17px]! leading-none text-neutral-400 group-hover:text-red-400 transition-colors">arrow_outward</span>
                            </div>
                        </button>
                        <button className="group px-4 py-2 rounded-sm text-white border border-white/10 hover:border-red-500/50 tracking-wide uppercase w-full sm:w-auto cursor-pointer"
                                onClick={() => {
                                    ReactGA.event({
                                        category: 'Navigation',
                                        action: 'Click Let\'s Talk (Hero)',
                                    });
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}>
                            <div className="flex justify-center items-center gap-2">
                                Let's Talk
                                <span className="material-icons-round text-[23px]! leading-none text-neutral-400 group-hover:text-red-400 group-hover:translate-x-1 transition-transform">keyboard_arrow_right</span>
                            </div>
                        </button>
                    </div>
                    <PortfolioSummary />
                </div>

                <video className="absolute top-28 md:top-auto xl:w-full xl:h-full object-cover z-0 xl:scale-70 origin-top pointer-events-none"
                       ref={videoRef}
                       loop={isLoop} playsInline preload="auto" muted
                       onEnded={PlayAirplaneLoop}
                       type="video/webm; codecs=vp9"
                />
            </div>

            <PaymentShowcase />
            <div className="relative z-40 bg-black justify-items-center">
                <div id="projects" className="scroll-mt-24">
                    <ProjectsTimeline />
                </div>
                <div id="contact" className="scroll-mt-24">
                    <ContactSection />
                </div>
            </div>
        </div>
    );
}

function LoadBackground(videoRef) {
    const scriptUrl = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
    const scriptId = 'unicorn-script';
    const v = videoRef.current;
    if (!v) return;

    const initUnicorn = () => {
        if (window.UnicornStudio) {
            window.UnicornStudio.init();
        }
    };

    const tryPlay = async () => {
        try {
            await v.play();
        } catch (err) {
            console.error(err);
        }
    };

    if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = scriptUrl;
        script.onload = initUnicorn;
        document.body.appendChild(script);
        setTimeout(tryPlay, 1500);
    } else {
        initUnicorn();
        setTimeout(tryPlay, 1500);
    }
}
