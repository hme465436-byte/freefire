'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HeroSection } from '@/components/generator/HeroSection';
import { PlatformToggle } from '@/components/generator/PlatformToggle';
import { ResourceSelector } from '@/components/generator/ResourceSelector';
import { LoadingSimulation } from '@/components/generator/LoadingSimulation';
import { VerificationStep } from '@/components/generator/VerificationStep';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Coins, Diamond, User, ShieldCheck } from 'lucide-react';
import { dynamicGeneratorMessages } from '@/ai/flows/dynamic-generator-messages-flow';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const COIN_OPTIONS = [10000, 50000, 100000, 500000];
const DIAMOND_OPTIONS = [500, 2000, 5000, 15000];

type AppState = 'idle' | 'generating' | 'verification';

export default function LootForgeLandingPage() {
  const [appState, setAppState] = useState<AppState>('idle');
  const [uid, setUid] = useState('');
  const [platform, setPlatform] = useState<'android' | 'ios'>('android');
  const [coins, setCoins] = useState(COIN_OPTIONS[1]);
  const [diamonds, setDiamonds] = useState(DIAMOND_OPTIONS[1]);
  const [loadingMessages, setLoadingMessages] = useState<string[]>([]);

  const handleGenerate = async () => {
    if (!uid) {
      alert('Please enter your Free Fire UID or Username');
      return;
    }

    setAppState('generating');
    
    try {
      const result = await dynamicGeneratorMessages({
        freeFireUid: uid,
        platform,
        coins,
        diamonds
      });
      setLoadingMessages(result.messages);
    } catch (error) {
      setLoadingMessages([
        "Connecting to Garena Encrypted Node...",
        "Validating player data on region cluster...",
        `Target: ${uid} identified...`,
        "Injecting resource packets...",
        `Adding ${coins.toLocaleString()} gold units...`,
        `Adding ${diamonds.toLocaleString()} premium gems...`,
        "Syncing with game database..."
      ]);
    }
  };

  const desertBg = PlaceHolderImages.find(img => img.id === 'desert-bg');
  const femaleChar = PlaceHolderImages.find(img => img.id === 'character-female');

  return (
    <main className="min-h-screen bg-[#05070a] relative overflow-x-hidden">
      
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0">
        <Image 
          src={desertBg?.imageUrl || ""} 
          alt="Desert Background" 
          fill 
          className="object-cover opacity-20 filter grayscale contrast-125"
          data-ai-hint="desert base"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070a]/80 to-[#05070a]" />
      </div>

      <HeroSection />

      <section className="container max-w-4xl mx-auto px-4 relative z-10 pb-24">
        {appState === 'idle' && (
          <div className="animate-fade-in grid lg:grid-cols-[1fr_350px] gap-8 items-start">
            
            <div className="space-y-8">
              <Card className="bg-black/60 backdrop-blur-3xl border-white/5 overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#FFB800] to-transparent" />
                <CardContent className="p-8 md:p-12 space-y-12">
                  
                  {/* UID Section */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-[#FFB800]" />
                        <span className="text-sm font-black italic uppercase tracking-[0.3em] text-white/80">Account Identification</span>
                      </div>
                      <ShieldCheck className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="relative group">
                      <Input
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        placeholder="ENTER FREE FIRE ID / USERNAME"
                        className="h-16 bg-white/5 border-2 border-white/10 focus:border-[#FFB800] transition-all rounded-md pl-14 text-xl font-black italic uppercase placeholder:text-white/20 text-white"
                      />
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#FFB800] transition-colors">
                        <User className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Platform Section */}
                  <div className="space-y-5">
                    <span className="text-sm font-black italic uppercase tracking-[0.3em] text-white/80 flex items-center gap-2">
                      Target System
                    </span>
                    <PlatformToggle value={platform} onChange={setPlatform} />
                  </div>

                  {/* Resource Selectors */}
                  <div className="grid md:grid-cols-2 gap-10">
                    <ResourceSelector
                      label="Coins"
                      icon={<Coins className="w-5 h-5 text-[#FFB800]" />}
                      options={COIN_OPTIONS}
                      value={coins}
                      onChange={setCoins}
                      accentColorClass="#FFB800"
                    />
                    <ResourceSelector
                      label="Diamonds"
                      icon={<Diamond className="w-5 h-5 text-secondary" />}
                      options={DIAMOND_OPTIONS}
                      value={diamonds}
                      onChange={setDiamonds}
                      accentColorClass="#00E5FF"
                    />
                  </div>

                  {/* Generate Button */}
                  <div className="pt-8">
                    <Button
                      onClick={handleGenerate}
                      className="w-full h-20 text-3xl font-black italic uppercase tracking-[0.2em] bg-[#FFB800] hover:bg-[#FFB800]/90 text-black shadow-[0_0_30px_rgba(255,184,0,0.4)] transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] rounded-md"
                    >
                      GENERATE NOW
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Footer Links */}
              <div className="text-center text-white/20 text-[10px] font-black italic tracking-[0.2em] space-y-4 max-w-2xl mx-auto uppercase">
                  <p>LOOTFORGE PRO IS A SECURE UTILITY. WE ARE NOT AFFILIATED WITH GARENA INTERNATIONAL. REWARDS ARE PROCESSED VIA ENCRYPTED SERVER HANDSHAKES.</p>
                  <div className="flex justify-center gap-8">
                      <span className="hover:text-[#FFB800] cursor-pointer transition-colors underline decoration-white/10">TERMS</span>
                      <span className="hover:text-[#FFB800] cursor-pointer transition-colors underline decoration-white/10">PRIVACY</span>
                      <span className="hover:text-[#FFB800] cursor-pointer transition-colors underline decoration-white/10">SUPPORT</span>
                  </div>
              </div>
            </div>

            {/* Side Character Art */}
            <div className="hidden lg:block sticky top-24">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                    <Image 
                        src={femaleChar?.imageUrl || ""} 
                        alt="Character Art" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        data-ai-hint="gaming girl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-md rounded border border-white/10">
                        <p className="text-xs font-black italic uppercase tracking-[0.2em] text-[#FFB800]">Global Distribution</p>
                        <p className="text-lg font-black italic uppercase text-white">REWARDS ACTIVE</p>
                    </div>
                </div>
            </div>

          </div>
        )}

        {appState === 'generating' && (
          <div className="py-12">
            <LoadingSimulation 
              messages={loadingMessages} 
              onComplete={() => setAppState('verification')} 
            />
          </div>
        )}

        {appState === 'verification' && (
          <div className="py-12">
            <VerificationStep />
          </div>
        )}
      </section>

      {/* Atmospheric Glows */}
      <div className="fixed top-1/2 -left-48 w-[600px] h-[600px] bg-[#FFB800]/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 -right-48 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none -z-10" />
    </main>
  );
}