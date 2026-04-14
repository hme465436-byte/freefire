import React, { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';

interface LoadingSimulationProps {
  messages: string[];
  onComplete: () => void;
}

export const LoadingSimulation = ({ messages, onComplete }: LoadingSimulationProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!messages.length) return;

    const messageDuration = 1800;
    const totalDuration = messages.length * messageDuration;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 0.5;
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
    }, totalDuration + 800);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
      clearTimeout(completionTimeout);
    };
  }, [messages, onComplete]);

  return (
    <div className="w-full max-w-2xl mx-auto py-16 px-6 flex flex-col items-center animate-fade-in bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFB800] to-transparent" />
      
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-[#FFB800]/20 blur-[60px] rounded-full animate-pulse" />
        <div className="relative w-32 h-32 rounded-full border-4 border-[#FFB800] border-t-transparent animate-spin flex items-center justify-center">
            <ShieldCheck className="w-14 h-14 text-[#FFB800] animate-pulse-glow" />
        </div>
      </div>

      <div className="w-full space-y-10">
        <div className="space-y-4 text-center">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-black italic uppercase tracking-[0.3em] text-[#FFB800]">System Handshake</span>
            <span className="text-4xl font-black italic text-white">{Math.round(progress)}%</span>
          </div>
          <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-[#FFB800] transition-all duration-300 ease-out shadow-[0_0_20px_rgba(255,184,0,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="min-h-[200px] space-y-4 bg-black/60 p-6 rounded-lg border border-white/5 font-mono">
          {messages.slice(0, currentMessageIndex + 1).map((msg, i) => (
            <div 
              key={i} 
              className="flex items-start gap-4 animate-fade-in"
              style={{ opacity: i === currentMessageIndex ? 1 : 0.4 }}
            >
              <div className="mt-1">
                {i === currentMessageIndex ? (
                    <Loader2 className="w-4 h-4 text-[#FFB800] animate-spin" />
                ) : (
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                )}
              </div>
              <div className="flex-1">
                <p className={cn(
                    "text-sm font-bold tracking-tight",
                    i === currentMessageIndex ? "text-white" : "text-white/60"
                )}>
                    {msg}
                </p>
                {i === currentMessageIndex && (
                    <div className="mt-2 h-[2px] w-full bg-white/5 overflow-hidden">
                        <div className="h-full bg-[#FFB800] animate-progress-shimmer w-full" />
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');