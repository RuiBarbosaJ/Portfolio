"use client";

import { useEffect, useRef, useCallback } from "react";

interface ParticleColor {
  r: number;
  g: number;
  b: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  symbol: string;
  opacity: number;
  baseOpacity: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: ParticleColor;
}

// Harmonious muted palette for dark backgrounds
const PARTICLE_COLORS: ParticleColor[] = [
  { r: 167, g: 139, b: 250 },  // soft purple
  { r: 139, g: 92,  b: 246 },  // deeper purple
  { r: 251, g: 146, b: 60  },  // warm orange
  { r: 245, g: 158, b: 90  },  // soft amber
  { r: 74,  g: 222, b: 128 },  // mint green
  { r: 52,  g: 211, b: 153 },  // emerald green
  { r: 96,  g: 165, b: 250 },  // sky blue
  { r: 129, g: 140, b: 248 },  // indigo blue
];

const CODE_SYMBOLS = [
  "</>",
  "{ }",
  "=>",
  "()",
  "//",
  "[ ]",
  "&&",
  "||",
  "const",
  "return",
  "async",
  "import",
  "export",
  "null",
  "true",
  "::",
  "/**/"
];

const PARTICLE_COUNT = 24;
const CONNECTION_DISTANCE = 180;
const MIN_PARTICLE_DISTANCE = 120;

export function CodeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const dimensionsRef = useRef({ w: 0, h: 0 });
  const isMobileRef = useRef(false);

  const createParticles = useCallback((width: number, height: number) => {
    const mobile = width < 768;
    const count = mobile ? 10 : PARTICLE_COUNT;
    const minDist = mobile ? 80 : MIN_PARTICLE_DISTANCE;
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const baseOpacity = mobile
        ? Math.random() * 0.07 + 0.04
        : Math.random() * 0.12 + 0.08;
      // Try to place particle with minimum distance from others
      let x = 0, y = 0;
      let attempts = 0;
      do {
        if (mobile) {
          // On mobile, spawn in corners/edges only
          const corner = Math.random();
          if (corner < 0.5) {
            // Top area
            x = Math.random() * width;
            y = Math.random() * height * 0.15;
          } else {
            // Bottom area
            x = Math.random() * width;
            y = height * 0.85 + Math.random() * height * 0.15;
          }
        } else {
          x = Math.random() * width;
          y = Math.random() * height;
        }
        attempts++;
      } while (
        attempts < 50 &&
        particles.some((p) => {
          const dx = p.x - x;
          const dy = p.y - y;
          return Math.sqrt(dx * dx + dy * dy) < minDist;
        })
      );
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.2,
        vy: mobile ? (Math.random() - 0.5) * 0.1 : -Math.random() * 0.18 - 0.06,
        symbol: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
        opacity: baseOpacity,
        baseOpacity,
        size: mobile ? Math.random() * 3 + 8 : Math.random() * 6 + 13,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.003,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      dimensionsRef.current = { w: rect.width, h: rect.height };
      isMobileRef.current = rect.width < 768;

      if (particlesRef.current.length === 0) {
        particlesRef.current = createParticles(rect.width, rect.height);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const { w, h } = dimensionsRef.current;
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;

      // Inter-particle repulsion (keep them spread out)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const rdx = a.x - b.x;
          const rdy = a.y - b.y;
          const rd = Math.sqrt(rdx * rdx + rdy * rdy);
          if (rd < MIN_PARTICLE_DISTANCE && rd > 0) {
            const repulse = (1 - rd / MIN_PARTICLE_DISTANCE) * 0.15;
            const rx = (rdx / rd) * repulse;
            const ry = (rdy / rd) * repulse;
            a.vx += rx;
            a.vy += ry;
            b.vx -= rx;
            b.vy -= ry;
          }
        }
      }

      // Update & draw particles
      for (const p of particles) {
        // Responsive content exclusion zone
        if (isMobileRef.current) {
          // Mobile: push particles to top/bottom edges
          const centerY = h / 2;
          const safeZoneH = h * 0.35;
          const distFromCenterY = Math.abs(p.y - centerY);
          if (distFromCenterY < safeZoneH) {
            const depth = 1 - distFromCenterY / safeZoneH;
            const pushForce = depth * 0.2;
            p.vy += p.y < centerY ? -pushForce : pushForce;
            p.opacity = p.baseOpacity * (0.2 + (1 - depth) * 0.8);
          } else {
            p.opacity = p.baseOpacity;
          }
        } else {
          // Desktop: push particles to left/right edges
          const centerX = w / 2;
          const contentHalfWidth = w * 0.32;
          const distFromCenter = Math.abs(p.x - centerX);
          if (distFromCenter < contentHalfWidth) {
            const depth = 1 - distFromCenter / contentHalfWidth;
            const pushForce = depth * 0.25;
            p.vx += p.x < centerX ? -pushForce : pushForce;
            p.opacity = p.baseOpacity * (0.3 + (1 - depth) * 0.7);
          } else {
            p.opacity = p.baseOpacity;
          }
        }

        // Damping
        p.vx *= 0.995;
        p.vy *= 0.995;

        // Drift correction (keep slow upward movement)
        p.vy += ((-0.12 - p.vy) * 0.001);
        p.vx += (((Math.random() - 0.5) * 0.25 - p.vx) * 0.001);

        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Wrap around
        if (p.y < -30) p.y = h + 30;
        if (p.y > h + 30) p.y = -30;
        if (p.x < -40) p.x = w + 40;
        if (p.x > w + 40) p.x = -40;

        // Draw symbol with glow
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Cascadia Code', monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Glow layer (colored)
        const { r, g, b } = p.color;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${p.opacity * 0.7})`;
        ctx.shadowBlur = 14;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx.fillText(p.symbol, 0, 0);

        // Crisp lighter layer on top (no shadow)
        ctx.shadowBlur = 0;
        const lr = Math.min(255, r + 40);
        const lg = Math.min(255, g + 40);
        const lb = Math.min(255, b + 40);
        ctx.fillStyle = `rgba(${lr}, ${lg}, ${lb}, ${p.opacity * 0.5})`;
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const ddx = a.x - b.x;
          const ddy = a.y - b.y;
          const d = Math.sqrt(ddx * ddx + ddy * ddy);

          if (d < CONNECTION_DISTANCE) {
            const lineOpacity = 0.07 * (1 - d / CONNECTION_DISTANCE);
            // Blend colors of connected particles
            const mr = Math.round((a.color.r + b.color.r) / 2);
            const mg = Math.round((a.color.g + b.color.g) / 2);
            const mb = Math.round((a.color.b + b.color.b) / 2);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${mr}, ${mg}, ${mb}, ${lineOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
