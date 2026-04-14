import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldAlert, CheckCircle, Smartphone, Lock } from 'lucide-react';

export const VerificationStep = () => {
  return (
    <div className="w-full max-w-xl mx-auto py-12 px-6 text-center animate-fade-in">
      <div className="bg-black/60 backdrop-blur-2xl border-2 border-accent/30 rounded-2xl p-8 md:p-12 space-y-8 shadow-[0_0_50px_rgba(255,0,0,0.1)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
        
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center neon-glow-accent border border-accent/40">
            <ShieldAlert className="w-12 h-12 text-accent" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-4xl font-black italic uppercase tracking-tight text-white">Verification Required</h3>
          <p className="text-white/60 text-lg font-medium leading-relaxed">
            To prevent system abuse and ensure the resources reach your ID, a final <span className="text-white font-black underline">Manual Verification</span> is mandatory.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-5 text-left border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black text-secondary uppercase tracking-[0.2em]">
                    <CheckCircle className="w-3 h-3" />
                    <span>Resource Status:</span>
                </div>
                <div className="space-y-1">
                    <p className="text-2xl font-black italic text-white leading-tight">LOCKED</p>
                    <p className="text-[10px] text-white/40 uppercase">Pending Verification</p>
                </div>
            </div>
            <div className="bg-white/5 rounded-lg p-5 text-left border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-black text-[#FFB800] uppercase tracking-[0.2em]">
                    <Lock className="w-3 h-3" />
                    <span>Security:</span>
                </div>
                <div className="space-y-1">
                    <p className="text-2xl font-black italic text-white leading-tight">ACTIVE</p>
                    <p className="text-[10px] text-white/40 uppercase">Garena Protocol 4.1</p>
                </div>
            </div>
        </div>

        <div className="space-y-4 pt-4">
            <Button 
                className="w-full h-20 text-2xl font-black italic uppercase tracking-[0.2em] bg-accent hover:bg-accent/80 text-white neon-glow-accent transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-2xl rounded-md"
                onClick={() => window.location.href = '#'}
            >
                VERIFY NOW
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-[10px] text-white/30 uppercase font-black tracking-[0.2em]">
                <Smartphone className="w-3 h-3" />
                <span>Mobile users: complete 1 quick offer below</span>
            </div>
        </div>
      </div>
    </div>
  );
};