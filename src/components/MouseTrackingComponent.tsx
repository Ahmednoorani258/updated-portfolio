"use client"
import { useEffect, useRef } from 'react';

const MouseTracker = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];

  class Particle {
    x: number;
    y: number;
    size: number;
    color: string;
    velocityX: number;
    velocityY: number;
    opacity: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 4 + 2; // Size between 2 and 8
      this.color = "rgba(2, 249, 142, .5)";
      this.velocityX = (Math.random() - 0.5) * 1.5; // Slower X velocity
      this.velocityY = (Math.random() - 0.5) * 1.5; // Slower Y velocity
      this.opacity = 1;
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.size, this.size);
    }
  
    update() {
      this.x += this.velocityX * 0.8; // Dampen speed for smoother motion
      this.y += this.velocityY * 0.8;
      this.opacity -= 0.01; // Slower fade-out
    }
  
    isVisible() {
      return this.opacity > 0;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = (e: MouseEvent) => {
      for (let i = 0; i < 5; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    const animateParticles = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
        if (!particle.isVisible()) {
          particles.splice(index, 1);
        }
      });

      requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", createParticles);
    window.addEventListener("click", createParticles);

    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", createParticles);
      window.removeEventListener("click", createParticles);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="z-50 fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};

export default MouseTracker;
