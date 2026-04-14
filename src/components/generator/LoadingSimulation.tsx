import React, { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, ShieldCheck, Cpu, Database, Network } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSimulationProps {
  messages: string[];
  onComplete: () => void;
}

export const LoadingSimulation = ({ messages, onComplete }: LoadingSimulationProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!messages.length) return;

    const messageDuration = 1600;
    const totalDuration = messages.length * messageDuration;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 0.4;
        return next > 100 ? 100 : next;
      });
    }, 50);

    const messageInterval = setInterval(() => {
      setCurrentMessageIndex(prev => {
        if (prev < messages.length - 1) {
          return prev + 1;
        }
        clearInterval(messageInterval);
        return prev;
      });
    }, messageDuration);

    const completionTimeout = setTimeout(() => {
      onComplete();
    }, totalDuration + 1000);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
      clearTimeout(completionTimeout);
    };
  }, [messages, onComplete]);

  return (
    <div className="w-full max-w-3xl mx-auto py-20 px-10 glass-card border-white/10 rounded-2xl shadow-2xl overflow-hidden relative metallic-shine">
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="grid md:grid-cols-[200px_1fr] gap-12 items-center mb-16">
        <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full animate-pulse" />
            <div className="relative w-40 h-40 rounded-full border-4 border-white/5 flex items-center justify-center p-4">
                <div className="absolute inset-0 rounded-full border-t-4 border-primary animate-spin" />
                <div className="w-full h-full rounded-full bg-black/40 flex items-center justify-center border border-white/10">
                    <ShieldCheck className="w-16 h-16 text-primary neon-text-gold" />
                </div>
            </div>
        </div>

        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div className="space-y-1">
                    <p className="text-[10px] font-black italic uppercase tracking-[0.4em] text-primary">Encryption Sequence</p>
                    <h3 className="text-3xl font-black italic uppercase text-white tracking-tighter">DATA INJECTION ACTIVE</h3>
                </div>
                <span className="text-6xl font-black italic text-white tracking-tighter drop-shadow-lg">{Math.round(progress)}%</span>
            </div>
            <div className="relative h-4 w-full bg-black/60 rounded-full overflow-hidden border border-white/5 p-1">
                <div 
                  className="h-full bg-primary transition-all duration-300 ease-out shadow-[0_0_20px_hsla(var(--primary),0.8)] rounded-full animate-progress-shimmer"
                  style={{ width: `${progress}%` }}
                />
            </div>
            <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-white/30">
                <span>Node: G-SRV-29</span>
                <span>Latency: 14ms</span>
                <span>Status: Infiltrating</span>
            </div>
        </div>
      </div>

      <div className="space-y-4 bg-black/80 p-8 rounded-xl border border-white/5 font-mono shadow-inner">
        <div className="flex items-center gap-4 border-b border-white/5 pb-4 mb-4">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">System Logs Output</span>
        </div>
        {messages.slice(0, currentMessageIndex + 1).map((msg, i) => (
          <div 
            key={i} 
            className="flex items-start gap-4 animate-fade-in"
            style={{ opacity: i === currentMessageIndex ? 1 : 0.4 }}
          >
            <div className="mt-1">
              {i === currentMessageIndex ? (
                  <Loader2 className="w-4 h-4 text-primary animate-spin" />
              ) : (
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
              )}
            </div>
            <div className="flex-1">
              <p className={cn(
                  "text-sm font-bold tracking-tight uppercase italic",
                  i === currentMessageIndex ? "text-white" : "text-white/60"
              )}>
                  {`[${new Date().toLocaleTimeString()}] > ${msg}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
