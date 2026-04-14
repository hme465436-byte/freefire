'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/generator/HeroSection';
import { PlatformToggle } from '@/components/generator/PlatformToggle';
import { ResourceSelector } from '@/components/generator/ResourceSelector';
import { LoadingSimulation } from '@/components/generator/LoadingSimulation';
import { VerificationStep } from '@/components/generator/VerificationStep';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Coins, Diamond, User } from 'lucide-react';
import { dynamicGeneratorMessages } from '@/ai/flows/dynamic-generator-messages-flow';

const COIN_OPTIONS = [10000, 50000, 100000, 250000, 500000, 1000000];
const DIAMOND_OPTIONS = [500, 2000, 5000, 10000, 15000];

type AppState = 'idle' | 'generating' | 'verification';

export default function LootForgeLandingPage() {
  const [appState, setAppState] = useState<AppState>('idle');
  const [uid, setUid] = useState('');
  const [platform, setPlatform] = useState<'android' | 'ios'>('android');
  const [coins, setCoins] = useState(COIN_OPTIONS[2]);
  const [diamonds, setDiamonds] = useState(DIAMOND_OPTIONS[1]);
  const [loadingMessages, setLoadingMessages] = useState<string[]>([]);

  const handleGenerate = async () => {
    if (!uid) {
      alert('Please enter your Free Fire UID or Username');
      return;
    }

    setAppState('generating');
    
    try {
      // Use the GenAI tool to get realistic messages
      const result = await dynamicGeneratorMessages({
        freeFireUid: uid,
        platform,
        coins,
        diamonds
      });
      setLoadingMessages(result.messages);
    } catch (error) {
      console.error('Failed to get generator messages', error);
      // Fallback messages if GenAI fails
      setLoadingMessages([
        "Connecting to Garena Secure Server...",
        "Validating encrypted channel...",
        `Searching for player data: ${uid}...`,
        "Injecting resource packet...",
        `Preparing ${coins.toLocaleString()} coins...`,
        `Preparing ${diamonds.toLocaleString()} diamonds...`,
        "Finalizing transaction sequence..."
      ]);
    }
  };

  return (
    <main className="min-h-screen pb-24 selection:bg-primary/30">
      <HeroSection />

      <section className="container max-w-4xl mx-auto px-4">
        {appState === 'idle' && (
          <div className="animate-fade-in">
            <Card className="bg-card/40 backdrop-blur-md border-white/5 overflow-hidden shadow-2xl">
              <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary" />
              <CardContent className="p-6 md:p-10 space-y-10">
                
                {/* UID Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Account Information</span>
                  </div>
                  <div className="relative group">
                    <Input
                      value={uid}
                      onChange={(e) => setUid(e.target.value)}
                      placeholder="Enter Your Free Fire UID / Username"
                      className="h-14 bg-muted/20 border-border focus:border-primary transition-all rounded-xl pl-12 text-lg font-medium placeholder:text-muted-foreground/50"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                      <User className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Platform Section */}
                <div className="space-y-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    Select Target Platform
                  </span>
                  <PlatformToggle value={platform} onChange={setPlatform} />
                </div>

                {/* Resource Selectors */}
                <div className="grid md:grid-cols-2 gap-10">
                  <ResourceSelector
                    label="Coins"
                    icon={<Coins className="w-5 h-5 text-neon-orange" />}
                    options={COIN_OPTIONS}
                    value={coins}
                    onChange={setCoins}
                    accentColorClass="bg-neon-orange/20 text-neon-orange"
                  />
                  <ResourceSelector
                    label="Diamonds"
                    icon={<Diamond className="w-5 h-5 text-secondary" />}
                    options={DIAMOND_OPTIONS}
                    value={diamonds}
                    onChange={setDiamonds}
                    accentColorClass="bg-secondary/20 text-secondary"
                  />
                </div>

                {/* Generate Button */}
                <div className="pt-6">
                  <Button
                    onClick={handleGenerate}
                    className="w-full h-16 text-xl font-black uppercase tracking-[0.2em] bg-primary hover:bg-primary/90 text-white neon-glow-primary transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98]"
                  >
                    GENERATE NOW
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center text-muted-foreground text-xs font-medium space-y-4 max-w-2xl mx-auto opacity-50">
                <p>LOOTFORGE PRO IS A THIRD-PARTY UTILITY FOR FREE FIRE PLAYERS. WE ARE NOT AFFILIATED WITH GARENA INTERNATIONAL. ALL ASSETS ARE PROPERTY OF THEIR RESPECTIVE OWNERS.</p>
                <div className="flex justify-center gap-6">
                    <span className="hover:text-primary cursor-pointer transition-colors">TERMS OF SERVICE</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">PRIVACY POLICY</span>
                    <span className="hover:text-primary cursor-pointer transition-colors">CONTACT SUPPORT</span>
                </div>
            </div>
          </div>
        )}

        {appState === 'generating' && (
          <LoadingSimulation 
            messages={loadingMessages} 
            onComplete={() => setAppState('verification')} 
          />
        )}

        {appState === 'verification' && (
          <VerificationStep />
        )}
      </section>

      {/* Decorative Background Glows */}
      <div className="fixed top-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
    </main>
  );
}
