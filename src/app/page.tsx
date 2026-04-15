'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { HeroSection } from '@/components/generator/HeroSection';
import { PlatformToggle } from '@/components/generator/PlatformToggle';
import { ResourceSelector } from '@/components/generator/ResourceSelector';
import { LoadingSimulation } from '@/components/generator/LoadingSimulation';
import { VerificationStep } from '@/components/generator/VerificationStep';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coins, Diamond, User, ShieldCheck, Zap, Globe, Clock, ArrowRight } from 'lucide-react';
import { dynamicGeneratorMessages } from '@/ai/flows/dynamic-generator-messages-flow';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const COIN_OPTIONS = [50000, 100000, 500000, 1000000];
const DIAMOND_OPTIONS = [1000, 5000, 15000, 50000];

type AppState = 'idle' | 'generating' | 'verification';

const SmartlinkBanner = ({ delay = '0s' }: { delay?: string }) => (
  <div className="animate-fade-in" style={{ animationDelay: delay }}>
    <a 
      href="https://archaicmsflip.com/rkb3bwht6?key=478d2944ca988762a18ca147f1137e26"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full p-4 md:p-6 rounded-xl glass-card border-white/10 hover:border-primary/30 transition-all group overflow-hidden relative shadow-2xl metallic-shine"
    >
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-[9px] md:text-[11px] font-black italic uppercase tracking-[0.3em] text-primary/60">Limited Promotion</p>
            <p className="text-sm md:text-xl font-black italic uppercase text-white tracking-tighter">Instant Bonus Unlock Sequence</p>
          </div>
        </div>
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </a>
  </div>
);

export default function LootForgeLandingPage() {
  const [appState, setAppState] = useState<AppState>('idle');
  const [uid, setUid] = useState('');
  const [platform, setPlatform] = useState<'android' | 'ios'>('android');
  const [coins, setCoins] = useState(COIN_OPTIONS[1]);
  const [diamonds, setDiamonds] = useState(DIAMOND_OPTIONS[1]);
  const [loadingMessages, setLoadingMessages] = useState<string[]>([]);

  const handleGenerate = async () => {
    if (!uid) return;

    // Trigger Popunder Ad ONLY on click
    const popunderScript = document.createElement('script');
    popunderScript.src = 'https://archaicmsflip.com/6a/f9/35/6af935ea12cd2379cb981b3e32abc889.js';
    document.body.appendChild(popunderScript);

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
    <main className="min-h-screen bg-[#020408] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0">
        <Image 
          src={desertBg?.imageUrl || ""} 
          alt="Atmospheric Background" 
          fill 
          className="object-cover opacity-30 grayscale contrast-150 scale-110"
          data-ai-hint="desert base"
        />
        <div className="absolute inset-0 cinematic-vignette" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020408]/60 via-transparent to-[#020408]" />
        <div className="absolute inset-0 scanline-overlay opacity-30" />
      </div>

      {/* Floating Particle Glows */}
      <div className="fixed top-1/4 -left-48 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse" />
      <div className="fixed bottom-1/4 -right-48 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse" />

      <HeroSection />

      <section className="container max-w-5xl mx-auto px-4 relative z-10 pb-24 md:pb-40">
        {appState === 'idle' && (
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 md:gap-12 items-start">
            
            <div className="space-y-6 md:space-y-10">
              {/* Badges Bar */}
              <div className="flex flex-wrap gap-2 md:gap-4 animate-fade-in">
                <Badge className="bg-primary/20 text-primary border-primary/30 h-7 md:h-8 px-3 md:px-4 text-[9px] md:text-xs font-black italic uppercase tracking-wider gap-2 glass-card">
                  <Zap className="w-3 h-3 fill-current" /> Instant Delivery
                </Badge>
                <Badge className="bg-secondary/20 text-secondary border-secondary/30 h-7 md:h-8 px-3 md:px-4 text-[9px] md:text-xs font-black italic uppercase tracking-wider gap-2 glass-card">
                  <Globe className="w-3 h-3" /> Global Servers
                </Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30 h-7 md:h-8 px-3 md:px-4 text-[9px] md:text-xs font-black italic uppercase tracking-wider gap-2 glass-card">
                  <Clock className="w-3 h-3" /> Limited Event
                </Badge>
              </div>

              <Card className="glass-card border-white/10 overflow-hidden shadow-2xl relative group metallic-shine rounded-xl">
                {/* Metallic Top Accent */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
                
                <CardContent className="p-6 md:p-14 space-y-8 md:space-y-14">
                  
                  {/* UID Section */}
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                            <User className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        </div>
                        <span className="text-[10px] font-black italic uppercase tracking-[0.3em] text-white/50">Player Auth</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-green-500 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span className="text-[9px] font-black uppercase tracking-widest">SECURE</span>
                      </div>
                    </div>
                    <div className="relative">
                      <Input
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        placeholder="ENTER PLAYER UID"
                        className="h-14 md:h-20 bg-black/40 border-2 border-white/5 focus:border-primary/50 transition-all rounded-lg pl-6 md:pl-8 text-lg md:text-2xl font-black italic uppercase placeholder:text-white/10 text-white tracking-widest shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Platform Selection */}
                  <div className="space-y-4 md:space-y-6">
                    <span className="text-[10px] font-black italic uppercase tracking-[0.3em] text-white/50 block">Target System</span>
                    <PlatformToggle value={platform} onChange={setPlatform} />
                    {/* New Smartlink 1: Below Platform Toggle */}
                    <SmartlinkBanner />
                  </div>

                  {/* Resource Selectors */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-4 md:space-y-6">
                      <ResourceSelector
                        label="Coins"
                        icon={<Coins className="w-5 h-5 md:w-6 md:h-6 text-primary" />}
                        options={COIN_OPTIONS}
                        value={coins}
                        onChange={setCoins}
                        accentColor="hsl(var(--primary))"
                      />
                      {/* New Smartlink 2: Below Coins Selector */}
                      <SmartlinkBanner delay="0.1s" />
                    </div>
                    <ResourceSelector
                      label="Diamonds"
                      icon={<Diamond className="w-5 h-5 md:w-6 md:h-6 text-secondary" />}
                      options={DIAMOND_OPTIONS}
                      value={diamonds}
                      onChange={setDiamonds}
                      accentColor="hsl(var(--secondary))"
                    />
                  </div>

                  {/* Original Smartlink Banner */}
                  <SmartlinkBanner delay="0.2s" />

                  {/* Action Button */}
                  <div className="pt-2 md:pt-6">
                    <Button
                      disabled={!uid}
                      onClick={handleGenerate}
                      className={cn(
                        "w-full h-16 md:h-24 text-xl md:text-3xl font-black italic uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-500 rounded-lg metallic-shine",
                        uid 
                          ? "bg-primary hover:bg-primary/90 text-black shadow-[0_0_50px_rgba(255,184,0,0.4)] scale-[1.01] hover:scale-[1.02]" 
                          : "bg-white/5 text-white/20 border border-white/5"
                      )}
                    >
                      {uid ? 'INITIATE TRANSFER' : 'INPUT PLAYER ID'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Security Footer */}
              <div className="text-center space-y-4 opacity-30 hover:opacity-100 transition-opacity duration-500">
                  <p className="text-[8px] md:text-[10px] font-black italic tracking-[0.2em] md:tracking-[0.3em] uppercase max-w-2xl mx-auto leading-relaxed px-4">
                    LOOTFORGE PRO VERSION 4.8.1 • RSA-4096 ENCRYPTION ACTIVE • DIRECT DATABASE INJECTION PROTOCOL • ALL REWARDS SUBJECT TO TERMS OF SERVICE
                  </p>
                  <div className="flex justify-center gap-6 md:gap-12 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                      <span className="cursor-pointer hover:text-primary transition-colors">Server Status: Online</span>
                      <span className="cursor-pointer hover:text-primary transition-colors">API: Connected</span>
                  </div>
              </div>
            </div>

            {/* Sidebar Visual Art */}
            <div className="hidden lg:block sticky top-32 animate-fade-in">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden glass-card border-white/10 shadow-2xl group animate-float">
                    <Image 
                        src={femaleChar?.imageUrl || ""} 
                        alt="Character Art" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-[2s] contrast-125 brightness-75"
                        data-ai-hint="gaming girl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent" />
                    
                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-xl border-white/20">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <p className="text-[10px] font-black italic uppercase tracking-[0.2em] text-primary">Live Distribution</p>
                        </div>
                        <p className="text-xl font-black italic uppercase text-white tracking-tighter">REWARDS ACTIVE</p>
                        <p className="text-[10px] text-white/40 font-bold uppercase mt-1">Garena Global Cluster ID: #FF-9021</p>
                    </div>
                </div>
            </div>

          </div>
        )}

        {appState === 'generating' && (
          <div className="py-8 md:py-12 animate-fade-in">
            <LoadingSimulation 
              messages={loadingMessages} 
              onComplete={() => setAppState('verification')} 
            />
          </div>
        )}

        {appState === 'verification' && (
          <div className="py-8 md:py-12 animate-fade-in">
            <VerificationStep />
          </div>
        )}
      </section>

      {/* Social Bar Script */}
      <Script 
        src="https://archaicmsflip.com/c5/49/02/c54902bbd9bb986821fc5a4b1b03134d.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
