import React from 'react';
import { cn } from '@/lib/utils';

interface ResourceSelectorProps {
  label: string;
  icon: React.ReactNode;
  options: number[];
  value: number;
  onChange: (val: number) => void;
  accentColor: string;
}

export const ResourceSelector = ({ 
  label, 
  icon, 
  options, 
  value, 
  onChange, 
  accentColor 
}: ResourceSelectorProps) => {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="p-2 md:p-2.5 bg-white/5 rounded-lg border border-white/10 shadow-inner">
            {icon}
        </div>
        <span className="text-[10px] md:text-xs font-black italic uppercase tracking-[0.3em] text-white/60">Select {label}</span>
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              "relative overflow-hidden py-4 px-2 md:py-6 md:px-4 rounded-xl border-2 text-lg md:text-2xl font-black italic transition-all duration-300 text-center glass-card",
              value === opt 
                ? "border-current text-white scale-[1.03] md:scale-[1.05] shadow-[0_0_30px_rgba(255,255,255,0.1)] metallic-shine" 
                : "border-white/5 text-white/20 hover:border-white/20 hover:text-white/40"
            )}
            style={value === opt ? { color: accentColor, borderColor: accentColor } : {}}
          >
            {opt.toLocaleString()}
            {value === opt && (
              <div 
                className="absolute bottom-0 left-0 w-full h-1 bg-current shadow-[0_-4px_10px_current]"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
