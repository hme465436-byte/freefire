import React from 'react';
import { Smartphone, Apple } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlatformToggleProps {
  value: 'android' | 'ios';
  onChange: (val: 'android' | 'ios') => void;
}

export const PlatformToggle = ({ value, onChange }: PlatformToggleProps) => {
  return (
    <div className="flex gap-4 w-full">
      <button
        onClick={() => onChange('android')}
        className={cn(
          "flex-1 flex items-center justify-center gap-3 py-5 rounded-md border-2 transition-all duration-300 group relative overflow-hidden",
          value === 'android' 
            ? "bg-[#FFB800]/20 border-[#FFB800] shadow-[0_0_20px_rgba(255,184,0,0.3)] text-white" 
            : "bg-black/40 border-white/10 text-white/40 hover:border-white/30"
        )}
      >
        {value === 'android' && <div className="absolute inset-0 bg-gradient-to-t from-[#FFB800]/10 to-transparent" />}
        <Smartphone className={cn("w-6 h-6 transition-colors", value === 'android' ? "text-[#FFB800]" : "group-hover:text-white")} />
        <span className="font-black italic uppercase tracking-widest text-lg">Android</span>
      </button>
      <button
        onClick={() => onChange('ios')}
        className={cn(
          "flex-1 flex items-center justify-center gap-3 py-5 rounded-md border-2 transition-all duration-300 group relative overflow-hidden",
          value === 'ios' 
            ? "bg-white/10 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] text-white" 
            : "bg-black/40 border-white/10 text-white/40 hover:border-white/30"
        )}
      >
        {value === 'ios' && <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />}
        <Apple className={cn("w-6 h-6 transition-colors", value === 'ios' ? "text-white" : "group-hover:text-white")} />
        <span className="font-black italic uppercase tracking-widest text-lg">iOS</span>
      </button>
    </div>
  );
};