import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldAlert, AlertCircle } from 'lucide-react';

export const VerificationStep = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-6 md:py-12 px-4 md:px-6 text-center animate-fade-in">
      <div className="glass-card border-2 border-accent/40 rounded-2xl p-6 md:p-16 space-y-6 md:space-y-12 shadow-[0_0_80px_rgba(255,0,255,0.1)] relative overflow-hidden metallic-shine">
        <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        
        {/* Icon Section */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/30 blur-[40px] md:blur-[60px] rounded-full animate-pulse" />
            <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full bg-black/60 flex items-center justify-center border-2 border-accent/50 shadow-[0_0_40px_hsla(var(--accent),0.4)]">
                <ShieldAlert className="w-10 h-10 md:w-16 md:h-16 text-accent animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Text Section */}
        <div className="space-y-3 md:space-y-6">
          <h3 className="text-3xl md:text-6xl font-black italic uppercase tracking-tighter text-white drop-shadow-2xl">
            FINAL STEP <span className="text-accent">REQUIRED</span>
          </h3>
          <p className="text-white/60 text-sm md:text-xl font-bold leading-relaxed max-w-lg mx-auto italic uppercase">
            To prevent system abuse and ensure distribution integrity, a <span className="text-white underline decoration-accent underline-offset-4">Manual Authentication</span> handshake is mandatory.
          </p>
        </div>

        {/* Status Boxes Section */}
        <div className="grid grid-cols-2 gap-3 md:gap-6">
            <div className="bg-black/40 rounded-xl p-3 md:p-6 text-left border border-white/5 space-y-2 md:space-y-4 shadow-inner">
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[8px] md:text-[10px] font-black text-white/40 uppercase tracking-[0.2em] md:tracking-[0.3em]">Status</span>
                </div>
                <div className="space-y-0.5 md:space-y-1">
                    <p className="text-xl md:text-3xl font-black italic text-accent tracking-tighter leading-none">LOCKED</p>
                    <p className="text-[8px] md:text-[9px] text-white/30 uppercase font-black tracking-widest">Payload Encrypted</p>
                </div>
            </div>
            <div className="bg-black/40 rounded-xl p-3 md:p-6 text-left border border-white/5 space-y-2 md:space-y-4 shadow-inner">
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-[8px] md:text-[10px] font-black text-white/40 uppercase tracking-[0.2em] md:tracking-[0.3em]">Protocol</span>
                </div>
                <div className="space-y-0.5 md:space-y-1">
                    <p className="text-xl md:text-3xl font-black italic text-white tracking-tighter leading-none">ACTIVE</p>
                    <p className="text-[8px] md:text-[9px] text-white/30 uppercase font-black tracking-widest">v4.8 Garena Auth</p>
                </div>
            </div>
        </div>

        {/* Action Button Section */}
        <div className="space-y-4 md:space-y-6 pt-2 md:pt-6">
            <Button 
                className="w-full h-16 md:h-24 text-xl md:text-3xl font-black italic uppercase tracking-[0.2em] md:tracking-[0.3em] bg-accent hover:bg-accent/80 text-white shadow-[0_0_30px_hsla(var(--accent),0.3)] md:shadow-[0_0_50px_hsla(var(--accent),0.4)] transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] rounded-xl metallic-shine"
                onClick={() => window.location.href = '#'}
            >
                VERIFY ACCOUNT
            </Button>
            
            <div className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-lg bg-white/5 border border-white/5">
                <AlertCircle className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                <span className="text-[8px] md:text-[10px] text-white/40 uppercase font-black tracking-[0.1em] md:tracking-[0.2em]">Complete 1 task to finalize transaction automatically</span>
            </div>
        </div>
      </div>
    </div>
  );
};