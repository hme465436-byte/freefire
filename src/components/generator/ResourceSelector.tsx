import React from 'react';
import { cn } from '@/lib/utils';

interface ResourceSelectorProps {
  label: string;
  icon: React.ReactNode;
  options: number[];
  value: number;
  onChange: (val: number) => void;
  accentColorClass: string;
}

export const ResourceSelector = ({ 
  label, 
  icon, 
  options, 
  value, 
  onChange, 
  accentColorClass 
}: ResourceSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-black/40 rounded border border-white/10">
            {icon}
        </div>
        <span className="text-sm font-black italic uppercase tracking-widest text-white/80">Select {label}</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              "relative overflow-hidden py-4 px-4 rounded border-2 text-lg font-black italic transition-all duration-300 text-center",
              value === opt 
                ? `bg-white/5 border-current text-white ring-1 ring-current shadow-[0_0_15px_rgba(255,255,255,0.1)]` 
                : "bg-black/40 border-white/5 text-white/30 hover:border-white/20 hover:bg-black/60"
            )}
            style={value === opt ? { color: accentColorClass } : {}}
          >
            {opt.toLocaleString()}
            {value === opt && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-current" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};