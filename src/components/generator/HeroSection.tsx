import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const FFLogo = () => (
  <div className="flex flex-col items-center animate-fade-in">
    <div className="relative flex items-center justify-center ff-logo-text text-6xl md:text-[10rem] text-white select-none italic leading-none">
      <span className="tracking-tighter metallic-shine">FREE F</span>
      <div className="relative flex items-center justify-center mx-[0.05em] h-[0.9em]">
        <span className="opacity-0">I</span>
        <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              viewBox="0 0 24 48" 
              className="h-full w-auto fill-primary drop-shadow-[0_0_20px_rgba(255,184,0,0.9)]"
              aria-hidden="true"
            >
              <path d="M12 2L7 16H10V46H14V16H17L12 2Z" />
            </svg>
        </div>
      </div>
      <span className="tracking-tighter metallic-shine">RE</span>
    </div>
    {/* Underline Glow */}
    <div className="w-full max-w-5xl h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent mt-6 shadow-[0_0_30px_hsla(var(--primary),0.8)] opacity-80" />
  </div>
);

export const HeroSection = () => {
  const bg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  
  return (
    <header className="relative w-full min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-32 px-4 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg?.imageUrl || ""}
          alt="Battle Royale Background"
          fill
          priority
          className="object-cover object-center opacity-50 scale-105 contrast-125 brightness-[0.4]"
          data-ai-hint="parachute jump"
        />
        <div className="absolute inset-0 cinematic-vignette" />
        
        {/* Seamless Bottom Transition */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#020408] via-[#020408]/80 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-16 max-w-6xl mx-auto text-center">
        <FFLogo />

        <div className="space-y-8">
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                GET FREE <span className="text-primary neon-text-gold">DIAMONDS & COINS</span>
            </h2>
            <div className="flex items-center justify-center gap-6">
                <div className="h-[1px] w-16 bg-white/20" />
                <p className="text-sm md:text-xl font-black text-white/40 tracking-[0.6em] uppercase italic">
                    Official Distribution Node • RSA-4096 Secure
                </p>
                <div className="h-[1px] w-16 bg-white/20" />
            </div>
        </div>
      </div>
    </header>
  );
};
