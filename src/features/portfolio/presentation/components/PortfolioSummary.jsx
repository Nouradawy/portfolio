import React from 'react';
import ReactGA from 'react-ga4';

export default function PortfolioSummary() {
    const handleIconClick = (tech) => {
        ReactGA.event({
            category: 'Engagement',
            action: 'Click Tech Icon',
            label: tech
        });
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full mt-12 lg:mt-8">
            <div className="text-white pt-4 lg:pt-30 leading-relaxed text-sm md:text-base lg:leading-8 w-full max-w-3xl">
                Hi, I'm Noureldin, a Full-Stack Software Engineer specializing in building scalable,
                high-performance applications from the ground up. With deep expertise in Flutter, React, and robust
                backends like Supabase and Spring Boot, I bridge the gap between intuitive UI/UX design and complex system
                architecture.
            </div>

            <div className="text-white bg-black/50 p-4 lg:px-5 rounded-2xl flex flex-wrap lg:flex-nowrap justify-center gap-6 items-center shrink-0 w-full lg:w-auto mt-4 lg:mt-30">
                <img
                    src="/assets/icons/flutter_logo.png"
                    className="w-12 lg:w-16 hover:scale-110 hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))] transition-all duration-300 cursor-pointer"
                    alt="Flutter"
                    onClick={() => handleIconClick('Flutter')}
                />
                <img
                    src="/assets/icons/Supabase.png"
                    className="w-12 lg:w-16 hover:scale-110 hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))] transition-all duration-300 cursor-pointer"
                    alt="Supabase"
                    onClick={() => handleIconClick('Supabase')}
                />
                <img
                    src="/assets/icons/react vite.png"
                    className="w-16 lg:w-22 hover:scale-110 hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))] transition-all duration-300 cursor-pointer"
                    alt="React Vite"
                    onClick={() => handleIconClick('React')}
                />
                <img
                    src="/assets/icons/spring.png"
                    className="w-12 lg:w-16 hover:scale-110 hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))] transition-all duration-300 cursor-pointer"
                    alt="Spring"
                    onClick={() => handleIconClick('Spring Boot')}
                />
            </div>
        </div>
    );
}
