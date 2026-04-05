import React, { useState, useRef } from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { projects } from "../data/projectsData.jsx";
import { FaGithub } from "react-icons/fa";
import AnimatePing from "../../../core/components/AnimatePing.jsx";

export default function ProjectsTimeline() {
    const years = [2021, 2022, 2023, 2024, 2025, 2026];
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [projectIndex, setProjectIndex] = useState(null);
    const galleryRefs = useRef([]);

    return (
        <div className="flex flex-col lg:flex-row mx-auto px-6 lg:px-12 w-full xl:w-[90vw]">
            {/* Left panel Content */}
            <div className="absolute top-1/2 right-0 w-full h-[14vh] bg-indigo-900/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
            <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-[#e81cff]/10 to-transparent pointer-events-none z-0"></div>

            <div className="relative z-10 w-full lg:w-100 pt-12 lg:pt-0">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-white text-center lg:text-left mt-0 lg:mt-20">TIME MACHINE.</h2>
                <p className="text-gray-400 font-semibold text-xs md:text-sm tracking-widest mt-10 text-center lg:text-left">HISTORICAL EVOLUTION OF MY BUILDS OVER THE YEARS. SAME PASSION, BETTER CODE.</p>
                <div className="mt-8 flex-col border-t border-gray-800 pt-9 hidden md:flex">
                    {years.map((year) => (
                        <button
                            key={year}
                            className="px-4 py-1 rounded-full border border-white/20 text-white text-sm hover:border-[#e81cff] hover:text-[#e81cff] transition-colors"
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right panel Content */}
            <div className="relative z-10 flex flex-col gap-4 w-full items-center">
                <AnimatePing />
                {projects.map((project, index) => (
                    <div
                        key={project.title}
                        className={`flex flex-col-reverse lg:flex-row gap-8 ${project.platform === "web" ?"lg:gap-10":"lg:gap-50"} w-full text-white mt-10 lg:mt-20 items-center lg:items-start justify-center`}
                    >
                        <div className="flex flex-col w-full lg:max-w-[35vw] lg:text-left px-4 lg:px-0 lg:ml-10">
                            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mb-2 items-center lg:items-start">
                                <h1 className="text-xl md:text-sm xl:text-2xl text-white">{project.position}</h1>
                                <span className="text-xs md:text-sm text-gray-400"> {project.startDate} <span>• {project.endDate}</span> </span>
                            </div>

                            <div className="flex flex-row items-center gap-4 mb-10">
                                <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-white">{project.title}</h1>
                                <h1 className="text-xs md:text-sm xl:text-lg text-gray-300">{project.appIdea}</h1>
                            </div>

                            <p className={`text-gray-400 text-sm transition-all duration-300 leading-5 max-w-200 ${showFullDescription && projectIndex === index ? "max-h-250" : "max-h-30 overflow-hidden"}`}>
                                {project.description}
                            </p>
                            {project.icons}

                            <div className="flex flex-row justify-between mt-5">
                                <button
                                    onClick={() => {
                                        if (projectIndex === index) {
                                            setShowFullDescription(false);
                                            setProjectIndex(null);
                                        } else {
                                            setShowFullDescription(true);
                                            setProjectIndex(index);
                                        }
                                    }}
                                    className="text-xs text-[#e81cff] hover:underline self-start"
                                >
                                    {showFullDescription && projectIndex === index ? "Read less" : "Read more"}
                                </button>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white group hover:scale-120 transition-all duration-300"
                                >
                                    <span className="text-xs font-medium tracking-wide">Source</span>
                                    <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>

                        <div className={`${project.platform === "web" ? "w-full max-w-md lg:w-100" : "w-full max-w-[250px] mx-auto lg:mx-0"} opacity-80 hover:opacity-100 lg:hover:scale-110 transition-transform duration-300`}>
                            <ImageGallery
                                ref={(el) => { galleryRefs.current[index] = el; }}
                                onClick={() => galleryRefs.current[index]?.fullScreen()}
                                items={project.images}
                                showThumbnails={false}
                                showPlayButton={false}
                                showFullscreenButton={false}
                                showBullets={true}
                                additionalClass="custom-gallery"
                            />
                        </div>
                    </div>
                ))}
                <div className="mb-30"></div>
            </div>
        </div>
    );
}
