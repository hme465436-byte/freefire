import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldAlert, CheckCircle } from 'lucide-react';

export const VerificationStep = () => {
  return (
    <div className="w-full max-w-xl mx-auto py-12 px-6 text-center animate-fade-in">
      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center neon-glow-accent">
            <ShieldAlert className="w-8 h-8 text-accent" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Verification Required</h3>
          <p className="text-muted-foreground text-sm">
            To prevent system abuse and ensure the resources reach your account, a final manual verification is mandatory.
          </p>
        </div>

        <div className="bg-background/50 rounded-lg p-4 text-left border border-white/5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-wider">
                <CheckCircle className="w-3 h-3" />
                <span>Ready to be claimed:</span>
            </div>
            <ul className="space-y-1 text-sm font-medium">
                <li className="flex justify-between"><span>Diamonds:</span> <span className="text-white">Processed & Pending</span></li>
                <li className="flex justify-between"><span>Coins:</span> <span className="text-white">Processed & Pending</span></li>
            </ul>
        </div>

        <Button 
          className="w-full h-14 text-lg font-black uppercase tracking-widest bg-accent hover:bg-accent/80 text-white neon-glow-accent transition-all duration-300 transform hover:scale-[1.02]"
          onClick={() => window.location.href = '#'}
        >
          VERIFY ACCOUNT
        </Button>
        
        <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">
          Verification typically takes less than 60 seconds.
        </p>
      </div>
    </div>
  );
};
