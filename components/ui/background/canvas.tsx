"use client";

import { useEffect, useRef } from "react";
import { TidesEffect } from "../effects/TideEffect";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;
  let tidesEffect: TidesEffect;

  useEffect(() => {
    const { innerWidth: width, innerWidth: height } = window;
    canvas = canvasRef.current;

    if (canvas == null) return;

    context = canvas.getContext("2d");

    if (context == null) return;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      tidesEffect = new TidesEffect(context, canvas.width, canvas.height);
      tidesEffect.animate();
    });

    tidesEffect = new TidesEffect(context, width, height);
    tidesEffect.animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1280}
      height={680}
      className="w-full bg-gray-900/90"
    ></canvas>
  );
}
