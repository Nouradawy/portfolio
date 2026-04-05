import React from 'react';

export default function AnimatePing() {
    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex z-10">
            <div className="absolute w-12 h-12 rounded-full border border-[#e81cff] opacity-30 animate-ping"></div>
        </div>
    );
}
