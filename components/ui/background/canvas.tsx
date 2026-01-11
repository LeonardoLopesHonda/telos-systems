"use client";

import { useEffect, useRef } from "react";
import { TidesEffect } from "../effects/TideEffect";

interface ClassProps {
  className?: string
}

export default function Canvas({ className }: ClassProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const tidesRef = useRef<TidesEffect[]>([]);
  const sizeRef = useRef({ width: 0, height: 0 });
  const animationRef = useRef<number | null>(null);
  const ZINC = {
    "50": {
      hex: "#FAFAFA",
      rgb: "250, 250, 250"
    },
    "100": {
      hex: "#F4F4F5",
      rgb: "244, 244, 245"
    },
    "200": {
      hex: "#E4E4E7",
      rgb: "228, 228, 231"
    },
    "300": {
      hex: "#D4D4D8",
      rgb: "212, 212, 216"
    }
  }
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    contextRef.current = ctx;

    function resize() {
      const canvas = canvasRef.current;
      if (!canvas) return;

      sizeRef.current.width = window.innerWidth;
      sizeRef.current.height = window.innerHeight;

      canvas.width = sizeRef.current.width;
      canvas.height = sizeRef.current.height;
    }

    tidesRef.current = [
      new TidesEffect(ctx, window.innerWidth, window.innerHeight, {
        baseY: 600,
        fillToY: sizeRef.current.height,
        color: `rgba(${ZINC[200].rgb}, 1)`,
        speed: 0.009
      }),
      new TidesEffect(ctx, window.innerWidth, window.innerHeight, {
        baseY: 460,
        fillToY: sizeRef.current.height,
        color: `rgba(${ZINC[100].rgb}, .7)`,
        speed: 0.003
      }),      
      new TidesEffect(ctx, window.innerWidth, window.innerHeight, {
        baseY: 320,
        fillToY: sizeRef.current.height,
        color: `rgba(${ZINC[100].rgb}, 1)`,
        speed: 0.004
      }),
      new TidesEffect(ctx, window.innerWidth, window.innerHeight, {
        baseY: 180,
        fillToY: sizeRef.current.height,
        color: `rgba(${ZINC[50].rgb}, 1)`,
        speed: 0.005
      }),
    ];

    function animate() {
      const ctx = contextRef.current;
      if (!ctx) return;

      ctx.clearRect(0, 0, sizeRef.current.width, sizeRef.current.height);

      tidesRef.current.forEach((tide) => {
        tide.update();
        tide.draw();
      })

      animationRef.current = requestAnimationFrame(animate);
    }

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full overflow-hidden absolute top-0 left-0 ${className}`}
    ></canvas>
  );
}
