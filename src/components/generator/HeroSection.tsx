import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

export const HeroSection = () => {
  const logo = PlaceHolderImages.find(img => img.id === 'ff-logo');
  
  return (
    <header className="relative w-full flex flex-col items-center justify-center pt-16 pb-8 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-10 pointer-events-none">
        <Image
          src="https://picsum.photos/seed/fire-bg/1920/1080"
          alt="Fire Background"
          fill
          className="object-cover"
          data-ai-hint="fire sparks"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center animate-fade-in">
        <div className="mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2">
            FREE FIRE
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full neon-glow-primary"></div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 neon-text-primary tracking-tight">
          Get Free Diamonds & Coins
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-muted-foreground bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-secondary" />
            <span>Instant Delivery</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Safe & Secure</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-muted-foreground/30 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-accent" />
            <span>No Verification Required</span>
          </div>
        </div>
      </div>
    </header>
  );
};
