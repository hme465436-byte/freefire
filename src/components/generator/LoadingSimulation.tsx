import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Loader2, Server } from 'lucide-react';

interface LoadingSimulationProps {
  messages: string[];
  onComplete: () => void;
}

export const LoadingSimulation = ({ messages, onComplete }: LoadingSimulationProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!messages.length) return;

    const messageDuration = 2000; // time per message
    const totalDuration = messages.length * messageDuration;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + (100 / (totalDuration / 100));
        return next > 100 ? 100 : next;
      });
    }, 100);

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
    }, totalDuration + 500);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
      clearTimeout(completionTimeout);
    };
  }, [messages, onComplete]);

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-6 flex flex-col items-center animate-fade-in">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
        <div className="relative w-24 h-24 rounded-full border-4 border-primary border-t-transparent animate-spin flex items-center justify-center">
            <Server className="w-10 h-10 text-primary" />
        </div>
      </div>

      <div className="w-full space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">System Processing</span>
            <span className="text-2xl font-black italic">{Math.round(progress)}%</span>
          </div>
          <div className="relative h-4 w-full bg-muted/30 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-progress-shimmer transition-all duration-300 ease-out shadow-[0_0_20px_hsla(var(--primary),0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="min-h-[120px] space-y-3">
          {messages.slice(0, currentMessageIndex + 1).map((msg, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 animate-fade-in"
              style={{ opacity: i === currentMessageIndex ? 1 : 0.4 }}
            >
              {i === currentMessageIndex ? (
                <Loader2 className="w-4 h-4 text-primary animate-spin" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-secondary" />
              )}
              <span className="text-sm font-medium">{msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
