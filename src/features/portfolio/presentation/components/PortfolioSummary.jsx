import React from 'react';

export default function PortfolioSummary() {
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full mt-12 lg:mt-8">
            <div className="text-white pt-4 lg:pt-30 leading-relaxed text-sm md:text-base lg:leading-8 w-full max-w-3xl">
                Hi, I'm Noureldin, a Full-Stack Software Engineer specializing in building scalable,
                high-performance applications from the ground up. With deep expertise in Flutter, React, and robust
                backends like Supabase and Spring Boot, I bridge the gap between intuitive UI/UX design and complex system
                architecture.
            </div>

            <div className="text-white bg-black/50 p-4 lg:px-5 rounded-2xl flex flex-wrap lg:flex-nowrap justify-center gap-6 items-center shrink-0 w-full lg:w-auto mt-4 lg:mt-30">
                <img src="/assets/icons/flutter_logo.png" className="w-12 lg:w-16 hover:scale-110 hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))] transition-all duration-300" alt="Flutter"/>
                <img src="/assets/icons/Supabase.png" className="w-12 lg:w-16 hover:scale-110 hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))] transition-all duration-300" alt="Supabase"/>
                <img src="/assets/icons/react vite.png" className="w-16 lg:w-22 hover:scale-110 hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))] transition-all duration-300" alt="React Vite"/>
                <img src="/assets/icons/spring.png" className="w-12 lg:w-16 hover:scale-110 hover:filter-[drop-shadow(0_0_16px_rgba(79,70,229))] transition-all duration-300" alt="Spring"/>
            </div>
        </div>
    );
}
