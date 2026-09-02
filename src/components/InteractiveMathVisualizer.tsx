import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MathVisualizerMode } from '../types';
import { Activity, Waves, Network, Pause, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const InteractiveMathVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [mode, setMode] = useState<MathVisualizerMode>('harmonic');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Common nodes for harmonic and vector field
    const nodeCount = Math.min(36, Math.floor((width * height) / 18000));
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      phase: number;
    }
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Lorenz Attractor particles
    interface LorenzPoint {
      x: number;
      y: number;
      z: number;
      history: { x: number; y: number }[];
      colorIndex: number;
    }
    const lorenzParticles: LorenzPoint[] = [];
    const sigma = 10;
    const rho = 28;
    const beta = 8 / 3;
    const dt = 0.008;

    for (let i = 0; i < 16; i++) {
      lorenzParticles.push({
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
        z: 20 + Math.random() * 10,
        history: [],
        colorIndex: i % 3,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      if (!isPlaying) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.classList.contains('light');
      const primaryColor = isLight ? 'rgba(2, 132, 199, ' : 'rgba(56, 189, 248, ';
      const tealColor = isLight ? 'rgba(13, 148, 136, ' : 'rgba(45, 212, 191, ';
      const goldColor = isLight ? 'rgba(217, 119, 6, ' : 'rgba(251, 191, 36, ';

      if (mode === 'harmonic') {
        // Mode 1: Harmonic Fourier Superposition & Connected Graph
        ctx.lineWidth = 1;
        for (let wave = 0; wave < 3; wave++) {
          ctx.beginPath();
          const amplitude = 26 + wave * 14;
          const frequency = 0.003 + wave * 0.0014;
          const yOffset = height * (0.45 + wave * 0.12);
          const opacity = (isLight ? 0.08 : 0.06) + wave * 0.025;

          ctx.strokeStyle = `${primaryColor}${opacity})`;

          for (let x = 0; x <= width; x += 8) {
            const y = yOffset + Math.sin(x * frequency + time + wave * 1.6) * amplitude;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        // Network nodes
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (1 - dist / 140) * 0.04;
            node.x -= dx * force;
            node.y -= dy * force;
          }

          for (let j = i + 1; j < nodes.length; j++) {
            const other = nodes[j];
            const distBetween = Math.hypot(node.x - other.x, node.y - other.y);
            if (distBetween < 120) {
              const alpha = (1 - distBetween / 120) * (isLight ? 0.14 : 0.16);
              ctx.beginPath();
              ctx.strokeStyle = `${primaryColor}${alpha})`;
              ctx.lineWidth = 0.7;
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }

          const r = node.radius + Math.sin(time * 2 + node.phase) * 0.5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, Math.max(0.8, r), 0, Math.PI * 2);
          ctx.fillStyle = `${primaryColor}${isLight ? 0.5 : 0.45})`;
          ctx.fill();
        }
      } else if (mode === 'lorenz') {
        // Mode 2: Lorenz Strange Attractor in Phase Space
        const centerX = width * 0.5;
        const centerY = height * 0.52;
        const scale = Math.min(width, height) * 0.016;

        for (let i = 0; i < lorenzParticles.length; i++) {
          const p = lorenzParticles[i];

          // Compute differential step for Lorenz equations
          const dx = sigma * (p.y - p.x);
          const dy = p.x * (rho - p.z) - p.y;
          const dz = p.x * p.y - beta * p.z;

          p.x += dx * dt;
          p.y += dy * dt;
          p.z += dz * dt;

          // Projected 2D coordinates (with slight perspective tilt)
          const projX = centerX + p.x * scale * 1.5;
          const projY = centerY - (p.z - 25) * scale * 1.5 + p.y * scale * 0.3;

          p.history.push({ x: projX, y: projY });
          if (p.history.length > 55) {
            p.history.shift();
          }

          // Draw trajectory
          if (p.history.length > 1) {
            ctx.beginPath();
            ctx.moveTo(p.history[0].x, p.history[0].y);
            for (let h = 1; h < p.history.length; h++) {
              ctx.lineTo(p.history[h].x, p.history[h].y);
            }
            const color = p.colorIndex === 0 ? primaryColor : p.colorIndex === 1 ? tealColor : goldColor;
            ctx.strokeStyle = `${color}${isLight ? 0.35 : 0.4})`;
            ctx.lineWidth = 1.4;
            ctx.stroke();

            // Head particle
            const head = p.history[p.history.length - 1];
            ctx.beginPath();
            ctx.arc(head.x, head.y, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `${color}${isLight ? 0.8 : 0.9})`;
            ctx.fill();
          }
        }
      } else if (mode === 'vectorField') {
        // Mode 3: Vector Field Differential Grid
        const step = 45;
        for (let gx = step / 2; gx < width; gx += step) {
          for (let gy = step / 2; gy < height; gy += step) {
            // Compute vector direction
            const vx = Math.sin((gy * 0.005) + time) * 12;
            const vy = Math.cos((gx * 0.005) + time) * 12;

            // Mouse repulsion
            const mdx = gx - mouseX;
            const mdy = gy - mouseY;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            let angle = Math.atan2(vy, vx);
            if (mdist < 130) {
              angle = Math.atan2(mdy, mdx);
            }

            const len = 9;
            const x2 = gx + Math.cos(angle) * len;
            const y2 = gy + Math.sin(angle) * len;

            ctx.beginPath();
            ctx.moveTo(gx, gy);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `${primaryColor}${isLight ? 0.12 : 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Tiny dot at base
            ctx.beginPath();
            ctx.arc(gx, gy, 1, 0, Math.PI * 2);
            ctx.fillStyle = `${tealColor}${isLight ? 0.3 : 0.35})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas) canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, mode, isPlaying]);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="math-background-canvas"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 dark:opacity-75"
        aria-hidden="true"
      />

      {/* Discrete floating controller on the bottom right for visual modes */}
      <div
        className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-1.5 p-1.5 rounded-xl border backdrop-blur-md shadow-lg transition-all duration-300 bg-white/70 dark:bg-[#071527]/80 border-slate-200 dark:border-sky-900/60"
        title={language === 'fr' ? "Contrôles de visualisation mathématique" : "Mathematical Visualizer Controls"}
      >
        <button
          type="button"
          onClick={() => setMode('harmonic')}
          className={`p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 transition-all ${
            mode === 'harmonic'
              ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 font-semibold shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          title={language === 'fr' ? "Ondes harmoniques" : "Harmonic Waves"}
          aria-label="Harmonic Waves"
        >
          <Waves className="w-3.5 h-3.5" />
          <span className="text-[10px]">Fourier</span>
        </button>

        <button
          type="button"
          onClick={() => setMode('lorenz')}
          className={`p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 transition-all ${
            mode === 'lorenz'
              ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 font-semibold shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          title={language === 'fr' ? "Attracteur de Lorenz (Système dynamique)" : "Lorenz Strange Attractor"}
          aria-label="Lorenz Attractor"
        >
          <Activity className="w-3.5 h-3.5" />
          <span className="text-[10px]">Lorenz</span>
        </button>

        <button
          type="button"
          onClick={() => setMode('vectorField')}
          className={`p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 transition-all ${
            mode === 'vectorField'
              ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 font-semibold shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          title={language === 'fr' ? "Champ de vecteurs différentiel" : "Differential Vector Field"}
          aria-label="Vector Field"
        >
          <Network className="w-3.5 h-3.5" />
          <span className="text-[10px]">Vectors</span>
        </button>

        <div className="w-px h-3.5 bg-slate-300 dark:bg-slate-700 mx-0.5" />

        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          title={isPlaying ? (language === 'fr' ? "Mettre en pause" : "Pause simulation") : (language === 'fr' ? "Reprendre" : "Resume simulation")}
          aria-label="Toggle simulation animation"
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 text-sky-500" />}
        </button>
      </div>
    </>
  );
};
