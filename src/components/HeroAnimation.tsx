import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowDown, MessageCircle, RotateCcw, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stores';
import React from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stores';

export const HeroAnimation: React.FC = () => {
  return (
    <section
      className="relative min-h-[68vh] sm:min-h-[72vh] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 pt-8 sm:pt-12 pb-10 sm:pb-14"
      aria-label="MS Toy's & Gifts Hero Showcase"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        <div className="ms-fade-in-up inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#18365B]/15 shadow-[2px_2px_0px_rgba(24,54,91,0.1)] mb-5 sm:mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E63946]" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-widest text-[#18365B]">
            Ahmedabad&apos;s Retail Flagship • 3 Stores Open 7 Days
          </span>
        </div>

        <div className="ms-fade-in-up ms-delay-100 mb-5 sm:mb-7 px-6 sm:px-10 py-5 sm:py-6 rounded-3xl bg-white/95 border-2 border-[#18365B] shadow-[5px_5px_0px_#18365B] inline-flex flex-col items-center">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#1F6FE0] mb-1.5">
            <Sparkles className="w-4 h-4 text-[#FFC933] fill-[#FFC933]" aria-hidden="true" />
            <span>Welcome to</span>
            <Sparkles className="w-4 h-4 text-[#FFC933] fill-[#FFC933]" aria-hidden="true" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#18365B] font-heading leading-tight">
            MS Toy&apos;s <span className="text-[#E63946]">&amp;</span> Gifts
          </h1>

          <div className="mt-3 flex items-center gap-1.5" aria-hidden="true">
            <span className="w-8 sm:w-10 h-1.5 rounded-full bg-[#E63946]" />
            <span className="w-3 sm:w-4 h-1.5 rounded-full bg-[#FFC933]" />
            <span className="w-8 sm:w-10 h-1.5 rounded-full bg-[#1F6FE0]" />
          </div>
        </div>

        <div className="ms-fade-in-up ms-delay-200 space-y-3 px-2 sm:px-4">
          <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#18365B] font-heading">
            Little joys. <span className="text-[#E63946]">Big smiles.</span>
          </p>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#26384B]/85 font-medium leading-relaxed">
            From playful toys and adorable soft toys to thoughtful gifts and everyday essentials, discover something special for every occasion across our 3 Ahmedabad showrooms.
          </p>
        </div>

        <div className="ms-fade-in-up ms-delay-300 mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <a
            href="#catalogue"
            className="btn-toy group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-[#18365B] text-white font-extrabold text-base sm:text-lg border-2 border-[#0D0F1A] shadow-[4px_4px_0px_#0D0F1A] hover:bg-[#26384B]"
          >
            <span>Discover our collections</span>
            <ArrowDown className="w-5 h-5 text-[#FFC933] group-hover:translate-y-1 transition-transform" />
          </a>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello M.S. Toys & Gifts Ahmedabad! I would like to enquire about your store catalogue.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-toy inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-full bg-[#25D366] text-[#0D0F1A] font-extrabold text-base sm:text-lg border-2 border-[#0D0F1A] shadow-[4px_4px_0px_#0D0F1A] hover:bg-[#20ba59]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="ms-fade-in-up ms-delay-300 mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-extrabold text-[#18365B]">
          <a
            href="#stores"
            className="btn-toy px-3.5 sm:px-4 py-2 rounded-xl bg-white hover:bg-[#FFF3C4] border-2 border-[#18365B] shadow-[3px_3px_0px_#18365B] transition-colors flex items-center gap-2"
          >
            <span className="w-3 h-3 rounded-full bg-[#E63946] border border-[#0D0F1A]" />
            Shop 1: Gifts &amp; Home Décor
          </a>
          <a
            href="#stores"
            className="btn-toy px-3.5 sm:px-4 py-2 rounded-xl bg-white hover:bg-[#EAF5FA] border-2 border-[#18365B] shadow-[3px_3px_0px_#18365B] transition-colors flex items-center gap-2"
          >
            <span className="w-3 h-3 rounded-full bg-[#1F6FE0] border border-[#0D0F1A]" />
            Shop 2: Toys for All Ages
          </a>
          <a
            href="#stores"
            className="btn-toy px-3.5 sm:px-4 py-2 rounded-xl bg-white hover:bg-[#FFF3C4] border-2 border-[#18365B] shadow-[3px_3px_0px_#18365B] transition-colors flex items-center gap-2"
          >
            <span className="w-3 h-3 rounded-full bg-[#FFC933] border border-[#0D0F1A]" />
            Shop 3: Mega Store &amp; Stationery
          </a>
        </div>
      </div>
    </section>
  );
};
interface Particle {
  kind: 'confetti' | 'dust';
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  rot: number;
  vrot: number;
  color: string;
  shape: number;
  life: number;
  maxLife: number;
  gravity: number;
}

export const HeroAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const slotMRef = useRef<HTMLDivElement>(null);
  const slotSRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLDivElement>(null);

  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animStage, setAnimStage] = useState<'idle' | 'running' | 'completed'>('running');
  const [activeTilt, setActiveTilt] = useState({ x: 0, y: 0 });

  // Web Audio Synth for cheerful pops and chimes
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playPopSound = useCallback((freq = 520, duration = 0.08) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + duration * 0.4);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio not permitted yet
    }
  }, [soundEnabled]);

  const playChimeSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      [659.25, 830.61, 987.77, 1318.51].forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.06);
        gain.gain.setValueAtTime(0.12, ctx.currentTime + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.06 + 0.28);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.06);
        osc.stop(ctx.currentTime + i * 0.06 + 0.3);
      });
    } catch {
      // Audio not permitted
    }
  }, [soundEnabled]);

  // Particles engine
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);

  const spawnBurst = useCallback((x: number, y: number, count: number, power = 1) => {
    const brandColors = ['#E63946', '#1F6FE0', '#FFC933', '#18365B', '#69B6D6', '#E9787B', '#FCEEEF'];
    for (let i = 0; i < count; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.25;
      const speed = (6 + Math.random() * 11) * power;
      particlesRef.current.push({
        kind: 'confetti',
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        w: 7 + Math.random() * 9,
        h: 5 + Math.random() * 7,
        rot: Math.random() * 6.28,
        vrot: (Math.random() - 0.5) * 0.35,
        color: brandColors[i % brandColors.length],
        shape: i % 3, // 0 = rect, 1 = circle, 2 = ribbon
        life: 0,
        maxLife: 90 + Math.random() * 60,
        gravity: 0.24 + Math.random() * 0.08
      });
    }
  }, []);

  const spawnDust = useCallback((x: number, y: number, width: number) => {
    for (let i = 0; i < 9; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.2 + Math.random() * 3.4;
      particlesRef.current.push({
        kind: 'dust',
        x: x + (Math.random() - 0.5) * width * 0.8,
        y,
        vx: Math.cos(angle) * speed * 1.6,
        vy: -Math.abs(Math.sin(angle) * speed) * 0.8 - 0.5,
        w: 6 + Math.random() * 8,
        h: 6 + Math.random() * 8,
        rot: 0,
        vrot: 0,
        color: 'rgba(24, 54, 91, 0.16)',
        shape: 1,
        life: 0,
        maxLife: 32 + Math.random() * 18,
        gravity: -0.02
      });
    }
  }, []);

  // Main animation orchestrator
  const startDropAnimation = useCallback(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
      setAnimStage('completed');
      return;
    }

    setAnimStage('running');
    setIsPlaying(true);

    const slotM = slotMRef.current;
    const slotS = slotSRef.current;
    const star = starRef.current;
    if (!slotM || !slotS || !star) return;

    // Reset styles
    slotM.style.transform = 'translateY(-140vh)';
    slotM.style.opacity = '1';
    slotS.style.transform = 'translateY(-140vh)';
    slotS.style.opacity = '1';
    star.style.transform = 'scale(0) rotate(-45deg)';
    star.style.opacity = '0';

    // Drop M at t = 200ms
    setTimeout(() => {
      slotM.style.transition = 'transform 0.72s cubic-bezier(0.18, 0.89, 0.32, 1.28)';
      slotM.style.transform = 'translateY(0)';

      setTimeout(() => {
        playPopSound(480);
        const rect = slotM.getBoundingClientRect();
        const heroRect = containerRef.current?.getBoundingClientRect();
        if (heroRect) {
          const x = rect.left - heroRect.left + rect.width / 2;
          const y = rect.bottom - heroRect.top;
          spawnDust(x, y, rect.width);
          spawnBurst(x, y, 24, 0.8);
        }
      }, 700);
    }, 180);

    // Drop S at t = 460ms
    setTimeout(() => {
      slotS.style.transition = 'transform 0.75s cubic-bezier(0.18, 0.89, 0.32, 1.28)';
      slotS.style.transform = 'translateY(0)';

      setTimeout(() => {
        playPopSound(580);
        const rect = slotS.getBoundingClientRect();
        const heroRect = containerRef.current?.getBoundingClientRect();
        if (heroRect) {
          const x = rect.left - heroRect.left + rect.width / 2;
          const y = rect.bottom - heroRect.top;
          spawnDust(x, y, rect.width);
          spawnBurst(x, y, 32, 1.1);
        }
      }, 720);
    }, 460);

    // Star pop-in at t = 1100ms
    setTimeout(() => {
      star.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease';
      star.style.transform = 'scale(1) rotate(0deg)';
      star.style.opacity = '1';
      playChimeSound();

      const starRect = star.getBoundingClientRect();
      const heroRect = containerRef.current?.getBoundingClientRect();
      if (heroRect) {
        spawnBurst(starRect.left - heroRect.left + starRect.width / 2, starRect.top - heroRect.top + starRect.height / 2, 16, 0.7);
      }
    }, 1150);

    // Mark completed after full sequence
    setTimeout(() => {
      setAnimStage('completed');
      setIsPlaying(false);
    }, 1700);
  }, [playPopSound, playChimeSound, spawnBurst, spawnDust]);

  // Initial trigger & Canvas Particle Loop
  useEffect(() => {
    startDropAnimation();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    if (containerRef.current) observer.observe(containerRef.current);

    const resizeCanvas = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let lastTime = performance.now();

    const renderLoop = (time: number) => {
      animFrameRef.current = requestAnimationFrame(renderLoop);
      if (!isVisible) return;

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (particlesRef.current.length === 0) return;

      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.life++;
        if (p.life >= p.maxLife) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.985;
        p.rot += p.vrot;

        const alpha = Math.max(0, 1 - p.life / p.maxLife);
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = alpha;

        if (p.kind === 'dust') {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, p.w * (1 - p.life / p.maxLife * 0.4), 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = p.color;
          if (p.shape === 0) {
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          } else if (p.shape === 1) {
            ctx.beginPath();
            ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Little ribbon
            ctx.beginPath();
            ctx.ellipse(0, 0, p.w, p.h / 2, Math.PI / 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.restore();
      }
    };

    animFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, [startDropAnimation]);

  // Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;
    setActiveTilt({
      x: xRatio * 12,
      y: yRatio * -12
    });
  };

  const handleMouseLeave = () => {
    setActiveTilt({ x: 0, y: 0 });
  };

  // Interactive Block Click
  const handleBlockClick = (letter: 'M' | 'S') => {
    const el = letter === 'M' ? slotMRef.current : slotSRef.current;
    if (!el) return;

    playPopSound(letter === 'M' ? 540 : 660, 0.12);

    el.style.transition = 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
    el.style.transform = 'translateY(-36px) rotate(' + (letter === 'M' ? '-12deg' : '10deg') + ')';

    const rect = el.getBoundingClientRect();
    const heroRect = containerRef.current?.getBoundingClientRect();
    if (heroRect) {
      spawnBurst(
        rect.left - heroRect.left + rect.width / 2,
        rect.top - heroRect.top + rect.height / 2,
        28,
        1
      );
    }

    setTimeout(() => {
      el.style.transition = 'transform 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)';
      el.style.transform = 'translateY(0) rotate(' + (letter === 'M' ? '-6deg' : '5deg') + ')';
    }, 320);
  };

  // Interactive Star Click
  const handleStarClick = () => {
    const star = starRef.current;
    if (!star) return;

    playChimeSound();
    star.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    star.style.transform = 'scale(1.45) rotate(180deg)';

    const rect = star.getBoundingClientRect();
    const heroRect = containerRef.current?.getBoundingClientRect();
    if (heroRect) {
      spawnBurst(
        rect.left - heroRect.left + rect.width / 2,
        rect.top - heroRect.top + rect.height / 2,
        36,
        1.25
      );
    }

    setTimeout(() => {
      star.style.transition = 'transform 0.4s ease';
      star.style.transform = 'scale(1) rotate(0deg)';
    }, 600);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[76vh] flex flex-col justify-center items-center overflow-hidden px-4 pt-8 pb-10 select-none"
      aria-label="M.S. Toys and Gifts Hero Showcase"
    >
      {/* Floating playful decorations */}
      <div className="hidden lg:block absolute left-10 top-1/3 animate-float-slow pointer-events-none select-none z-10" aria-hidden="true">
        <div className="w-14 h-14 rounded-2xl bg-[#FFF3C4] border-2 border-[#18365B] shadow-[3px_3px_0px_#18365B] flex items-center justify-center -rotate-12">
          <span className="text-2xl">🎈</span>
        </div>
      </div>
      <div className="hidden lg:block absolute right-12 top-1/4 animate-float-delayed pointer-events-none select-none z-10" aria-hidden="true">
        <div className="w-14 h-14 rounded-2xl bg-[#FCEEEF] border-2 border-[#18365B] shadow-[3px_3px_0px_#18365B] flex items-center justify-center rotate-12">
          <span className="text-2xl">🧸</span>
        </div>
      </div>
      <div className="hidden xl:block absolute left-16 bottom-24 animate-float-delayed pointer-events-none select-none z-10" aria-hidden="true">
        <div className="w-12 h-12 rounded-xl bg-[#EAF5FA] border-2 border-[#18365B] shadow-[3px_3px_0px_#18365B] flex items-center justify-center rotate-6">
          <span className="text-xl">🎁</span>
        </div>
      </div>

      {/* Confetti & Dust Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-20" aria-hidden="true" />

      {/* Main Interactive Stage */}
      <div
        ref={stageRef}
        style={{
          transform: `perspective(1000px) rotateX(${activeTilt.y}deg) rotateY(${activeTilt.x}deg)`,
          transition: 'transform 0.15s ease-out'
        }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        {/* The Two M.S. Blocks + Star */}
        <div className="relative flex items-end justify-center gap-3 sm:gap-5 h-44 sm:h-56 md:h-64 mb-6 sm:mb-8 pt-4">
          {/* M Block */}
          <div
            ref={slotMRef}
            className="relative cursor-pointer transition-transform duration-300 transform -rotate-6 group focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="M Toy Block - Click for bounce and confetti"
            onClick={() => handleBlockClick('M')}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleBlockClick('M')}
          >
            {/* Ground Shadow */}
            <div className="absolute -bottom-4 left-2 right-2 h-4 rounded-full bg-[#18365B]/15 filter blur-md pointer-events-none group-hover:scale-110 transition-transform" />

            {/* Block Body in Official Logo Red (#E63946) */}
            <div className={`w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-3xl bg-[#E63946] border-4 sm:border-[5px] border-[#0D0F1A] shadow-[6px_6px_0px_#0D0F1A] flex items-center justify-center p-3 sm:p-4 text-white font-extrabold ${animStage === 'completed' ? 'animate-[bounce_4s_ease-in-out_infinite]' : ''}`}>
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none" aria-hidden="true">
                <path
                  d="M27 71 V31 L50 56 L73 31 V71"
                  strokeWidth="13"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#18365B] text-white text-[11px] font-bold py-1 px-2.5 rounded-full whitespace-nowrap shadow-sm pointer-events-none">
              Click me! 🎈
            </span>
          </div>

          {/* S Block */}
          <div
            ref={slotSRef}
            className="relative cursor-pointer transition-transform duration-300 transform rotate-6 translate-y-3 sm:translate-y-4 group focus:outline-none"
            tabIndex={0}
            role="button"
            aria-label="S Toy Block - Click for bounce and confetti"
            onClick={() => handleBlockClick('S')}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleBlockClick('S')}
          >
            {/* Ground Shadow */}
            <div className="absolute -bottom-4 left-2 right-2 h-4 rounded-full bg-[#18365B]/15 filter blur-md pointer-events-none group-hover:scale-110 transition-transform" />

            {/* Block Body in Official Logo Blue (#1F6FE0) */}
            <div className={`w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-3xl bg-[#1F6FE0] border-4 sm:border-[5px] border-[#0D0F1A] shadow-[6px_6px_0px_#0D0F1A] flex items-center justify-center p-3 sm:p-4 text-white font-extrabold ${animStage === 'completed' ? 'animate-[bounce_4.5s_ease-in-out_infinite_delay-1000]' : ''}`}>
              <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none" aria-hidden="true">
                <path
                  d="M68 35 C61 24 32 24 32 38 C32 53 68 48 68 62 C68 77 39 77 30 65"
                  strokeWidth="13"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#18365B] text-white text-[11px] font-bold py-1 px-2.5 rounded-full whitespace-nowrap shadow-sm pointer-events-none">
              Click me! ✨
            </span>
          </div>

          {/* Twinkling Golden Star */}
          <div
            ref={starRef}
            tabIndex={0}
            role="button"
            aria-label="Twinkling Golden Star - Click for magic sparkle"
            onClick={handleStarClick}
            className="absolute -right-6 sm:-right-8 top-1 sm:top-2 w-12 h-12 sm:w-16 sm:h-16 cursor-pointer group focus:outline-none"
          >
            <svg
              viewBox="-20 -20 40 40"
              className={`w-full h-full drop-shadow-md transition-transform group-hover:scale-125 ${animStage === 'completed' ? 'animate-sparkle-twinkle' : ''}`}
              aria-hidden="true"
            >
              <path
                d="M0 -18 Q3 -3 18 0 Q3 3 0 18 Q-3 3 -18 0 Q-3 -3 0 -18Z"
                fill="#FFC933"
                stroke="#0D0F1A"
                strokeWidth="3.2"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#FFC933] text-[#0D0F1A] text-[10px] font-extrabold py-0.5 px-2 rounded-full whitespace-nowrap shadow-sm pointer-events-none">
              Sparkle! ✨
            </span>
          </div>
        </div>

        {/* Wordmark & Official Typography */}
        <div className="space-y-3 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border-2 border-[#18365B]/15 shadow-[2px_2px_0px_#18365B]/10 mb-1 hover:scale-105 transition-transform">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E63946] animate-ping" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#18365B]">
              Ahmedabad&apos;s Retail Flagship • 3 Stores Open 7 Days
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#18365B] font-heading">
            Little joys. <span className="text-[#E63946] inline-block hover:scale-105 transition-transform duration-200">Big smiles.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#26384B]/85 font-medium leading-relaxed">
            From playful toys and adorable soft toys to thoughtful gifts and everyday essentials, discover something special for every occasion across our 3 Ahmedabad showrooms.
          </p>
        </div>

        {/* Dual Primary Call-to-Actions (Tactile 3D Buttons) */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#catalogue"
            className="btn-toy group inline-flex items-center gap-3 px-7 py-3.5 sm:py-4 rounded-full bg-[#18365B] text-white font-extrabold text-base sm:text-lg border-2 border-[#0D0F1A] shadow-[4px_4px_0px_#0D0F1A] hover:bg-[#26384B]"
          >
            <span>Discover our collections</span>
            <ArrowDown className="w-5 h-5 text-[#FFC933] group-hover:translate-y-1 transition-transform" />
          </a>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello M.S. Toys & Gifts Ahmedabad! I would like to enquire about your store catalogue.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-toy inline-flex items-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full bg-[#25D366] text-[#0D0F1A] font-extrabold text-base sm:text-lg border-2 border-[#0D0F1A] shadow-[4px_4px_0px_#0D0F1A] hover:bg-[#20ba59]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* 3 Physical Store Badges (Playful tactile pills) */}
        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm font-extrabold text-[#18365B]">
          <a href="#stores" className="btn-toy px-4 py-2 rounded-xl bg-white hover:bg-[#FFF3C4] border-2 border-[#18365B] shadow-[3px_3px_0px_#18365B] transition-colors flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E63946] border border-[#0D0F1A]" />
            Shop 1: Gifts &amp; Home Décor
          </a>
          <a href="#stores" className="btn-toy px-4 py-2 rounded-xl bg-white hover:bg-[#EAF5FA] border-2 border-[#18365B] shadow-[3px_3px_0px_#18365B] transition-colors flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#1F6FE0] border border-[#0D0F1A]" />
            Shop 2: Toys for All Ages
          </a>
          <a href="#stores" className="btn-toy px-4 py-2 rounded-xl bg-white hover:bg-[#FFF3C4] border-2 border-[#18365B] shadow-[3px_3px_0px_#18365B] transition-colors flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FFC933] border border-[#0D0F1A]" />
            Shop 3: Mega Store &amp; Stationery
          </a>
        </div>
      </div>

      {/* Floating Controls: Replay Animation & Sound Toggle */}
      <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => {
            const next = !soundEnabled;
            setSoundEnabled(next);
            if (next) playChimeSound();
          }}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full border-2 border-[#18365B] text-xs font-bold shadow-[2px_2px_0px_#18365B] transition-transform active:translate-x-0.5 active:translate-y-0.5 ${soundEnabled ? 'bg-[#A7F0C5] text-[#18365B]' : 'bg-[#FFF3C4] text-[#18365B]'}`}
          aria-label={soundEnabled ? 'Mute playful sound effects' : 'Enable playful sound effects'}
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          <span>{soundEnabled ? 'Sound On' : 'Sound Off'}</span>
        </button>

        <button
          type="button"
          onClick={startDropAnimation}
          disabled={isPlaying}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border-2 border-[#18365B] bg-white text-[#18365B] text-xs font-bold shadow-[2px_2px_0px_#18365B] hover:bg-[#F7F0E5] transition-transform active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-50"
          aria-label="Replay block drop intro animation"
        >
          <RotateCcw className={`w-3.5 h-3.5 ${isPlaying ? 'animate-spin' : ''}`} />
          <span>Replay</span>
        </button>
      </div>
    </section>
  );
};
