import './index.css'
import {useEffect , useRef , useState} from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import {projects} from "./Info.jsx";
import {FaBehance, FaGithub} from "react-icons/fa";
import emailjs from '@emailjs/browser';
import {TiSocialLinkedin} from "react-icons/ti";

export default function Home() {
    const videoRef = useRef(null);
    const [isLoop , setIsLoop] = useState(false);
    const [heroText , setHeroText] = useState('From paper ball');
    const [playList] = useState([
        "public/assets/Comp 1.webm" ,
        "public/assets/Comp 2.webm"
    ]);
    useEffect(() => {
        LoadBackground(videoRef);
        if (videoRef.current) {
            videoRef.current.src = playList[0];
            videoRef.current.loop = false;
            setTimeout(() => {
                setHeroText('To paper plane')
            } , 4650);
        }
    } , []);

    const PlayAirplaneLoop = () => {
        setIsLoop(true);
        const v = videoRef.current;
        if (v) {
            v.loop = false;
            v.src = playList[1];
            v.load();
            v.play().catch(() => {
            });
        }
    };

    return (

        <div className="relative bg-[#050505] overflow-hidden">
            <div className="sticky top-0 w-full min-h-screen  justify-center  flex motion-duration-[3s]
                    motion-preset-focus z-10">
                <div
                    className="absolute top-1/2 right-0   w-screen h-[50vh] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none z-1">
                </div>

                <div data-us-project="bcBYZIStYXwiogchBNHO"
                     className="absolute top-0 w-full md:w-[75vw] h-[100vw] md:h-[50vw]  "
                     style={{

                         zIndex: 0 , // Pushes it to the background
                         WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)' ,
                         maskImage: 'linear-gradient(#f7de27b5, black 0%, black 80%, transparent)' ,
                         filter: 'hue-rotate(90deg) saturate(150%)' ,

                     }}
                />
                <div className=" absolute h-12 w-full bg-white/80 "></div>

                <div
                    key={heroText}
                    className={`relative z-2 flex flex-col px-6 md:px-16 lg:px-32 justify-items-center font-Inter mt-32 md:mt-48 lg:mt-64  w-full md:w-auto
                    
                    `}>
                    <h1 className={`text-gray-300 text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg text-left motion-duration-[3s] motion-preset-blur-up`}

                    >
                        {heroText}
                    </h1>
                    <h1 className={`flex text-gray-300
                        mt-10 font-normal text-2xl ${heroText === "To paper plane" ? "visible" : "invisible"}
                        motion-duration-[3s] motion-preset-blur-up
                        `}> Transforming Rough Ideas Into Refined Digital Experiences</h1>

                    <div
                        className={`  flex flex-row mt-15 gap-10   ${heroText === "To paper plane" ? "visible" : "invisible"}`}>
                        <button className="group bg-neutral-900 px-4 py-2 rounded-sm text-white
                        border border-white/10 hover:border-red-500/50
                        tracking-wide uppercase w-full sm:w-auto
                        "
                                onClick={() => {
                                    const url = "/assets/Resume.pdf"; // file must be at `public/assets/Resume.pdf`
                                    const a = document.createElement("a");
                                    a.href = url;
                                    a.download = "Resume.pdf";
                                    a.rel = "noopener";
                                    document.body.appendChild(a);
                                    a.click();
                                    a.remove();
                                }}>
                            <div className="flex justify-center items-center gap-2 ">
                                Resume
                                <span
                                    className="material-icons-round text-[17px]! leading-none text-neutral-400 group-hover:text-red-400 transition-colors">
                                    arrow_outward</span>
                            </div>
                        </button>
                        <button className="group  px-4 py-2 rounded-sm text-white
                        border border-white/10 hover:border-red-500/50
                        tracking-wide uppercase  w-full sm:w-auto
                        "
                                onClick={() => {
                                }}>
                            <div className="flex justify-center items-center gap-2 ">
                                Let's Talk
                                <span
                                    className="material-icons-round text-[23px]! leading-none text-neutral-400 group-hover:text-red-400  group-hover:translate-x-1 transition-transform">
                                    keyboard_arrow_right</span>

                            </div>
                        </button>
                    </div>
                    <Summery />
                    {(heroText === "To paper plane") && <Signature />}


                </div>


                <video className=" absolute top-28 md:top-auto xl:w-full xl:h-full  object-cover z-1 xl:scale-70 origin-top"
                       ref={videoRef}
                       loop={isLoop} playsInline preload="auto" muted
                       onEnded={PlayAirplaneLoop}
                />


            </div>

            <div className="relative z-40 bg-black justify-items-center">
                <ProjectsTimeline/>
                <ContactMe />

            </div>
        </div>

    );
}

function LoadBackground(videoRef) {
    const scriptUrl = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
    const scriptId = 'unicorn-script';
    const v = videoRef.current;
    if (!v) return;
    // Helper to initialize the studio
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

    // Check if script is already explicitly added to avoid duplicates
    if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = scriptUrl;

        // Wait for load, then init
        script.onload = () => {
            initUnicorn();
        };

        document.body.appendChild(script);
        setTimeout(tryPlay , 1500);

    } else {
        // If script is already there (e.g. from a previous navigation), just init
        initUnicorn();
        setTimeout(tryPlay , 1500);
    }
}

function Summery() {
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full mt-12 lg:mt-8">
            <div className="text-white pt-4 lg:pt-30 leading-relaxed text-sm md:text-base lg:leading-8 w-full max-w-3xl">
                Hi, I'm Noureldin, a Full-Stack Software Engineer specializing in building scalable,
                high-performance applications from the ground up. With deep expertise in Flutter, React, and robust
                backends
                like Supabase and Spring Boot, I bridge the gap between intuitive UI/UX design and complex system
                architecture.
            </div>

            <div className="text-white bg-black/50 p-4 lg:px-5 rounded-2xl flex flex-wrap lg:flex-nowrap justify-center gap-6 items-center shrink-0 w-full lg:w-auto mt-4 lg:mt-30
            ">
                <img src="public/assets/icons/flutter_logo.png" className="w-12 lg:w-16 hover:scale-110 hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))] transition-all duration-300" alt="Flutter"/>
                <img src="public/assets/icons/supabase.png" className="w-12 lg:w-16 hover:scale-110 hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))] transition-all duration-300" alt="Supabase"/>
                <img src="public/assets/icons/react vite.png" className="w-16 lg:w-22 hover:scale-110 hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))] transition-all duration-300" alt="React Vite"/>
                <img src="public/assets/icons/spring.png" className="w-12 lg:w-16 hover:scale-110 hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))] transition-all duration-300" alt="Spring"/>
            </div>

        </div>

    );
}


function ProjectsTimeline() {
    const years = [2021 , 2022 , 2023 , 2024 , 2025 , 2026];
    const [showFullDescription , setShowFullDescription] = useState(false);
    const [projectIndex , setProjectIndex] = useState(null);
    const galleryRefs = useRef([]);
    return (
        <div className="flex flex-col lg:flex-row   mx-auto px-6 lg:px-12 w-full xl:w-[90vw] ">
            {/*Left panel Content*/}
            {/* --- The Glow Effect Bluish --- */}
            <div className="absolute top-1/2 right-0   w-screen h-[14vh] bg-indigo-900/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
            {/* --- The Glow Effect --- */}
            <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-[#e81cff]/10  to-transparent  pointer-events-none z-0"></div>

            {/* Left panel Content */}
            <div className="relative z-10 w-full lg:w-100 pt-12 lg:pt-0">
                <h2 className=" text-4xl md:text-5xl font-bold bg-clip-text text-white text-center lg:text-left mt-0 lg:mt-20">TIME MACHINE.</h2>
                <p className="text-gray-400 font-semibold text-xs md:text-sm tracking-widest mt-10 text-center lg:text-left">HISTORICAL EVOLUTION OF MY
                    BUILDS OVER THE YEARS.SAME PASSION, BETTER CODE.</p>
                <div className="mt-8 flex-col  border-t border-gray-800 pt-9 hidden md:flex">
                    {years.map((year) => (
                        <button
                            key={year}
                            className="px-4 py-1 rounded-full border border-white/20 text-white text-sm hover:border-[#e81cff] hover:text-[#e81cff] transition-colors"
                        >
                            {year}
                        </button>
                    ))}</div>
            </div>


            {/*Right panel Content*/}
            <div className="relative z-10 flex flex-col gap-4 w-full items-center "
            >
                <AnimatePing/>
                {/*List of Projects timeline*/}
                {projects.map((project , index) => (
                    <div
                        key={project.title}
                        className={`flex flex-col-reverse lg:flex-row gap-8 lg:gap-10 w-full text-white mt-10 lg:mt-20 items-center lg:items-start justify-center`}>
                        <div className="flex flex-col w-full lg:max-w-[35vw] text-center lg:text-left px-4 lg:px-0 lg:ml-10">

                            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-2 items-center lg:items-start    ">
                                <h1 className="text-xl md:text-2xl text-white">{project.position}</h1>
                                <span className="text-xs md:text-sm text-gray-400"> {project.startDate} <span >• {project.endDate}</span> </span>

                            </div>

                            <div className="flex flex-row items-center gap-4 mb-10">
                                <h1 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h1>
                                <h1 className="text-base md:text-lg text-gray-300">{project.appIdea}</h1>
                            </div>

                            <p className={`text-gray-400  text-sm transition-all duration-300 leading-5 max-w-200
                            ${showFullDescription && projectIndex === index ? "max-h-250" : "max-h-30 overflow-hidden"}
                            `}>
                                {project.description}
                            </p>
                            {project.icons}


                            <div className="flex flex-row justify-between mt-5">
                                <button
                                    onClick={() => {
                                        if (projectIndex === index) {
                                            // collapse this project
                                            setShowFullDescription(false);
                                            setProjectIndex(null);
                                        } else {
                                            // expand this project
                                            setShowFullDescription(true);
                                            setProjectIndex(index);
                                        }
                                    }}
                                    className=" text-xs text-[#e81cff] hover:underline self-start"
                                >
                                    {showFullDescription && projectIndex === index ? "Read less" : "Read more"}
                                </button>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white  group hover:scale-120 transition-all duration-300"
                                >
                                    <span className="text-xs font-medium tracking-wide">Source</span>
                                    <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                                </a>
                            </div>

                        </div>

                        <div className={`${project.platform === "web" ?"w-100" :"w-48 ml-26 mr-26"} opacity-80
                        hover:opacity-100 hover:scale-136
                        hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))]
                        transition-filter duration-300`}>
                            <ImageGallery
                                ref={(el) => {
                                    galleryRefs.current[index] = el;
                                }}
                                onClick={() => galleryRefs.current[index]?.fullScreen()}
                                items={project.images}
                                onSlide={(index) => console.log("Slid to" , index)}
                                showThumbnails={false}
                                showPlayButton={false}
                                showFullscreenButton={false}
                                showBullets={true}
                                additionalClass="custom-gallery"
                            /></div>
                    </div>
                ))}
                <div className="mb-30"></div>


            </div>
        </div>

    );
}
function ContactMe() {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send Message');
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        // Replace these with your actual IDs from EmailJS
        emailjs.sendForm(
            'service_r1ni6b5',
            'template_m3rty6b',
            form.current,
            'Ef9RY5lEbWGrgd73s'
        )
            .then((result) => {
                console.log('SUCCESS!', result.text);
                setButtonText('Message Sent!');
                setIsSuccess(true);
                form.current.reset(); // Clear the form

                // Reset button text after 3 seconds
                setTimeout(() => {
                    setButtonText('Send Message');
                    setIsSuccess(false);
                }, 3000);
            }, (error) => {
                console.log('FAILED...', error.text);
                setButtonText('Failed to send');
                setTimeout(() => setButtonText('Send Message'), 3000);
            });
    };
    return(
        <div className="relative  flex flex-col justify-center items-center py-20 px-6 overflow-hidden w-full text-slate-100 font-Inter">
            {/* Background Neon Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#ff2d95]/10 via-[#bc13fe]/5 to-transparent rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ec5b13]/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-40 items-center z-10">

                {/* Left Side: Text and Info */}
                <div className="flex flex-col space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center space-x-2 bg-[#bc13fe]/10 border border-[#bc13fe]/20 px-3 py-1 rounded-full w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#bc13fe] animate-pulse"></span>
                            <span className="text-[#bc13fe] text-xs font-bold uppercase tracking-widest">Available for Hire</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Let's build the <span className="text-[#ff2d95] drop-shadow-[0_0_8px_rgba(255,45,149,0.4)]">future</span> together.
                        </h2>
                        <p className="text-lg leading-relaxed max-w-md text-slate-300">
                            Have a project in mind or just want to say hi? I'm always open to discussing new creative ideas or bold visions.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Connect Elsewhere</h3>
                        <div className="flex gap-4">
                            <a className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ff2d95]/50 transition-all duration-300" href="https://www.linkedin.com/in/nouradawy/">
                                <span className=" text-slate-400 group-hover:text-[#ff2d95] transition-colors"><TiSocialLinkedin className="text-2xl"/></span>

                            </a>
                            <a className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#bc13fe]/50 transition-all duration-300" href="https://www.behance.net/gamerhypeee">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-[#bc13fe] transition-colors"><FaBehance className="text-xl"/></span>

                            </a>
                            <a className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ec5b13]/50 transition-all duration-300" href="https://github.com/Nouradawy">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-[#ec5b13] transition-colors"><FaGithub className="text-xl"/></span>
                            </a>
                        </div>
                    </div>

                    {/* Profile Block */}
                    <div className="pt-8 flex items-center space-x-4">
                        <div className="w-35 h-35 rounded-full overflow-hidden border-2 border-[#bc13fe]/30 bg-black flex items-center justify-center">
                            <img className="w-full h-full object-cover" alt="Nouradawy" src="public/assets/projects/profile.png" onError={(e) => { e.target.style.display = 'none' }} />
                        </div>
                        <div>
                            <p className="font-bold text-white text-lg">Nouradawy</p>
                            <p className="text-slate-400 text-sm">Full-Stack Software Engineer</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff2d95]/20 to-transparent blur-2xl"></div>

                    {/* ADDED ref={form} and onSubmit HERE */}
                    <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1 text-slate-300">Full Name</label>
                            <div className="relative group">
                                {/* ADDED name="user_name" HERE */}
                                <input name="user_name" required className="w-full bg-black/40 border border-white/10 focus:border-[#ff2d95] focus:ring-1 focus:ring-[#ff2d95]/30 rounded-xl px-4 py-4 text-white placeholder:text-slate-500 transition-all outline-none resize-none" placeholder="Enter your name" type="text" />
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#ff2d95] transition-colors">person</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1 text-slate-300">Email Address</label>
                            <div className="relative group">
                                {/* ADDED name="user_email" HERE */}
                                <input name="user_email" required className="w-full bg-black/40 border border-white/10 focus:border-[#ff2d95] focus:ring-1 focus:ring-[#ff2d95]/30 rounded-xl px-4 py-4 text-white placeholder:text-slate-500 transition-all outline-none resize-none" placeholder="hello@example.com" type="email" />
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#bc13fe] transition-colors">alternate_email</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1 text-slate-300">Your Message</label>
                            {/* ADDED name="message" HERE */}
                            <textarea name="message" required className="w-full bg-black/40 border border-white/10 focus:border-[#ff2d95] focus:ring-1 focus:ring-[#ff2d95]/30 rounded-xl px-4 py-4 text-white placeholder:text-slate-500 transition-all outline-none resize-none" placeholder="Tell me about your project..." rows="4"></textarea>
                        </div>

                        {/* UPDATED BUTTON to use State */}
                        <button disabled={buttonText === 'Sending...'} className={`w-full py-4 text-white font-bold rounded-xl shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 group ${isSuccess ? 'bg-green-500 shadow-green-500/20' : 'bg-gradient-to-r from-[#ff2d95] to-[#bc13fe] shadow-[#ff2d95]/20 hover:shadow-[#bc13fe]/40'}`} type="submit">
                            <span>{buttonText}</span>
                            {!isSuccess && <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>}
                        </button>

                        <p className="text-center text-xs text-slate-400 pt-2">
                            Expected response time: <span className="text-[#bc13fe] font-medium">Under 24 hours</span>
                        </p>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-32 w-full max-w-7xl border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 z-10">
                <p>© 2026 Nouradawy. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a className="hover:text-[#ff2d95] transition-colors" href="#">Privacy Policy</a>
                    <a className="hover:text-[#ff2d95] transition-colors" href="#">Terms of Service</a>
                </div>
            </div>
        </div>
    );
}

function AnimatePing() {
    return (
        <div
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex z-10">

            <div
                className="absolute w-12 h-12 rounded-full border border-[#e81cff] opacity-30 animate-ping"></div>
        </div>
    );
}


 function Signature() {
    return (
        <div className="w-45  opacity-80 ml-15 mt-10 ">

            <svg
                viewBox="0 0 270 229"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >

                <path className="signature-path-2" d="M170.415 124.121C169.915 127.288 167.915 133.921 163.915 135.121C158.915 136.621 152.192 123.85 148.915 122.621C144.915 121.121 132.915 128.121 140.415 141.121C147.915 154.121 157.915 140.121 156.415 133.121M170.415 106.621C174.581 112.454 184.015 124.721 188.415 127.121C192.815 129.521 191.248 112.788 189.915 104.121C191.415 108.954 198.915 117.121 205.415 111.121C211.915 105.121 193.915 86.6211 194.915 86.6211M212.915 78.1211C216.581 84.1211 225.615 95.6211 232.415 93.6211C239.215 91.6211 237.581 75.7877 235.915 68.1211C240.415 76.4544 256.92 92.1303 265.915 106.621C274.915 121.121 255.415 136.121 246.415 138.621C238.823 140.73 205.748 142.621 189.915 142.621M108.414 170.121C107.914 173.288 105.914 179.921 101.914 181.121C96.9142 182.621 90.1913 169.85 86.9142 168.621C82.9142 167.121 70.9142 174.121 78.4142 187.121C85.9142 200.121 95.9142 186.121 94.4142 179.121M106.414 172.621C107.866 171.791 108.145 170.79 109.914 171.218M109.914 171.218C113.434 172.07 119.085 173.264 121.414 159.621C122.043 155.939 122.058 153.176 121.647 151.121M109.914 171.218C102.414 165.621 103.914 153.121 106.414 151.121C107.943 149.898 118.721 142.458 121.332 149.95M121.647 151.121C121.561 150.696 121.456 150.306 121.332 149.95M121.647 151.121C121.54 150.725 121.435 150.335 121.332 149.95M121.332 149.95C119.675 143.817 118.302 139.135 117.178 135.597M117.178 135.597C114.528 127.259 113.259 125.276 112.914 125.621C113.945 128.4 115.412 131.927 117.178 135.597ZM117.178 135.597C121.977 145.576 128.981 156.621 135.414 156.621" stroke="white" stroke-width="3"/>
                <path className="signature-path-1" d="M1.49921 228.121C1.99921 212.788 3.59921 177.821 5.99921 160.621C8.99921 139.121 7.99921 209.121 27.4992 212.621C43.0992 215.421 55.3325 137.788 59.4992 98.6211C62.3325 67.7877 66.2992 5.22107 59.4992 1.62107C50.9992 -2.87893 40.4992 119.621 69.4992 114.121C92.6992 109.721 96.8325 85.9544 95.9992 74.6211C94.1659 79.2352 90.7992 88.8949 91.9992 90.6211C93.4992 92.7787 95.9992 96.6211 100.999 85.6211C105.999 74.6211 111.499 86.6211 111.999 84.1211C112.499 81.6211 123.745 83.8843 127.999 71.1211C130.999 62.1211 139.333 56.7877 139.999 58.6211" stroke="white" stroke-width="3"/>


            </svg>
        </div>
    );
}

