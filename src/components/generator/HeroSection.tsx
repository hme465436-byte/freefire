import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const FFLogo = () => (
  <div className="flex flex-col items-center">
    <div className="relative flex items-center justify-center ff-logo-text text-6xl md:text-9xl text-white select-none">
      <span>FREE F</span>
      <div className="relative flex items-center justify-center mx-[-0.05em]">
        <span>I</span>
        <div className="absolute inset-0 flex items-center justify-center">
            {/* Custom Yellow Knife SVG for the 'I' */}
            <svg 
              viewBox="0 0 24 48" 
              className="h-[0.9em] w-auto fill-[#FFB800] drop-shadow-[0_0_8px_rgba(255,184,0,0.6)]"
              aria-hidden="true"
            >
              <path d="M12 2L9 12h2v18l1 16 1-16V12h2L12 2z" />
            </svg>
        </div>
      </div>
      <span>RE</span>
    </div>
    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFB800] to-transparent mt-2 shadow-[0_0_10px_#FFB800]" />
  </div>
);

export const HeroSection = () => {
  const bg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  
  return (
    <header className="relative w-full min-h-[60vh] flex flex-col items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg?.imageUrl || "https://picsum.photos/seed/ff-para/1920/1080"}
          alt="Battle Royale Background"
          fill
          priority
          className="object-cover object-top opacity-60 scale-105"
          data-ai-hint="parachute jump"
        />
        <div className="absolute inset-0 cinematic-vignette" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/40 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center animate-fade-in space-y-8">
        <FFLogo />

        <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-6xl font-black italic uppercase tracking-tight text-white neon-text-white">
                GET FREE <span className="text-[#FFB800] neon-text-primary">DIAMONDS & COINS</span>
            </h2>
            <p className="text-sm md:text-lg font-bold text-white/60 tracking-[0.3em] uppercase">
                Secure Server Connection • Instant Delivery
            </p>
        </div>
      </div>
    </header>
  );
};