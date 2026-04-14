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
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Select {label}</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              "relative overflow-hidden py-3 px-4 rounded-lg border text-sm font-bold transition-all duration-300",
              value === opt 
                ? `${accentColorClass} border-current ring-1 ring-current` 
                : "bg-muted/30 border-border text-muted-foreground hover:border-white/20 hover:bg-muted/50"
            )}
          >
            {opt.toLocaleString()}
            {value === opt && (
              <div className="absolute inset-0 bg-white/10 animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
