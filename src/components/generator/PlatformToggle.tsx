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
          "flex-1 flex items-center justify-center gap-3 py-4 rounded-xl border transition-all duration-300 group",
          value === 'android' 
            ? "bg-primary/20 border-primary neon-glow-primary text-white" 
            : "bg-muted/50 border-border text-muted-foreground hover:border-primary/50"
        )}
      >
        <Smartphone className={cn("w-6 h-6 transition-colors", value === 'android' ? "text-primary" : "group-hover:text-primary")} />
        <span className="font-semibold uppercase tracking-wider">Android</span>
      </button>
      <button
        onClick={() => onChange('ios')}
        className={cn(
          "flex-1 flex items-center justify-center gap-3 py-4 rounded-xl border transition-all duration-300 group",
          value === 'ios' 
            ? "bg-secondary/20 border-secondary neon-glow-secondary text-white" 
            : "bg-muted/50 border-border text-muted-foreground hover:border-secondary/50"
        )}
      >
        <Apple className={cn("w-6 h-6 transition-colors", value === 'ios' ? "text-secondary" : "group-hover:text-secondary")} />
        <span className="font-semibold uppercase tracking-wider">iOS</span>
      </button>
    </div>
  );
};
