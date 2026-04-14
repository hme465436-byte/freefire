import React from 'react';
import { Smartphone, Apple } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlatformToggleProps {
  value: 'android' | 'ios';
  onChange: (val: 'android' | 'ios') => void;
}

export const PlatformToggle = ({ value, onChange }: PlatformToggleProps) => {
  return (
    <div className="flex gap-4 md:gap-6 w-full">
      <button
        onClick={() => onChange('android')}
        className={cn(
          "flex-1 flex items-center justify-center gap-3 md:gap-4 py-4 md:py-6 rounded-xl border-2 transition-all duration-500 group relative overflow-hidden glass-card",
          value === 'android' 
            ? "border-secondary shadow-[0_0_30px_hsla(var(--secondary),0.2)] text-white metallic-shine" 
            : "border-white/5 text-white/30 hover:border-white/20"
        )}
      >
        <Smartphone className={cn(
            "w-5 h-5 md:w-7 md:h-7 transition-all duration-500", 
            value === 'android' ? "text-secondary scale-110 drop-shadow-[0_0_8px_hsla(var(--secondary),0.8)]" : "opacity-40 group-hover:opacity-100"
        )} />
        <span className="font-black italic uppercase tracking-[0.1em] md:tracking-[0.2em] text-base md:text-xl">Android</span>
        {value === 'android' && <div className="absolute inset-x-0 bottom-0 h-1 bg-secondary shadow-[0_-4px_10px_hsla(var(--secondary),0.5)]" />}
      </button>

      <button
        onClick={() => onChange('ios')}
        className={cn(
          "flex-1 flex items-center justify-center gap-3 md:gap-4 py-4 md:py-6 rounded-xl border-2 transition-all duration-500 group relative overflow-hidden glass-card",
          value === 'ios' 
            ? "border-white shadow-[0_0_30px_rgba(255,255,255,0.15)] text-white metallic-shine" 
            : "border-white/5 text-white/30 hover:border-white/20"
        )}
      >
        <Apple className={cn(
            "w-5 h-5 md:w-7 md:h-7 transition-all duration-500", 
            value === 'ios' ? "text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "opacity-40 group-hover:opacity-100"
        )} />
        <span className="font-black italic uppercase tracking-[0.1em] md:tracking-[0.2em] text-base md:text-xl">Apple iOS</span>
        {value === 'ios' && <div className="absolute inset-x-0 bottom-0 h-1 bg-white shadow-[0_-4px_10px_rgba(255,255,255,0.5)]" />}
      </button>
    </div>
  );
};
