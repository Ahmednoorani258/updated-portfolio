"use client";
import { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

export default function MouseTracker() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Cursor rings state
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [outerPos, setOuterPos] = useState({ x: -100, y: -100 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Smooth outer ring follows inner with lag
  const outerRef = useRef({ x: -100, y: -100 });
  const innerRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Hide the default cursor site-wide
    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      innerRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });

      // Detect hoverable elements
      const target = e.target as HTMLElement;
      const isHover = !!(
        target.closest("a") ||
        target.closest("button") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      );
      setHovering(isHover);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    // Lerp the outer ring
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animateOuter = () => {
      outerRef.current.x = lerp(outerRef.current.x, innerRef.current.x, 0.12);
      outerRef.current.y = lerp(outerRef.current.y, innerRef.current.y, 0.12);
      setOuterPos({ x: outerRef.current.x, y: outerRef.current.y });
      rafRef.current = requestAnimationFrame(animateOuter);
    };
    rafRef.current = requestAnimationFrame(animateOuter);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Canvas trail effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const trail: TrailPoint[] = [];
    let animFrame: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMove = (e: MouseEvent) => {
      // Add multiple trail points per move for density
      for (let i = 0; i < 3; i++) {
        trail.push({
          x: e.clientX + (Math.random() - 0.5) * 4,
          y: e.clientY + (Math.random() - 0.5) * 4,
          alpha: 0.6 + Math.random() * 0.3,
          size: Math.random() * 3 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.alpha -= 0.018;
        p.size *= 0.97;
        if (p.alpha <= 0) {
          trail.splice(i, 1);
          continue;
        }

        // Glowing dot with radial gradient
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5);
        grad.addColorStop(0, `rgba(34, 197, 94, ${p.alpha})`);
        grad.addColorStop(0.5, `rgba(74, 222, 128, ${p.alpha * 0.5})`);
        grad.addColorStop(1, `rgba(34, 197, 94, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      animFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const innerSize = clicking ? 6 : hovering ? 10 : 8;
  const outerSize = clicking ? 28 : hovering ? 44 : 36;

  return (
    <>
      {/* Canvas trail */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9998 }}
      />

      {/* Inner dot */}
      <div
        className="fixed pointer-events-none rounded-full bg-green-400 mix-blend-screen"
        style={{
          zIndex: 9999,
          width: innerSize,
          height: innerSize,
          left: pos.x - innerSize / 2,
          top: pos.y - innerSize / 2,
          boxShadow: "0 0 8px 2px rgba(34,197,94,0.8)",
          transition: "width 0.15s ease, height 0.15s ease",
        }}
      />

      {/* Outer ring */}
      <div
        className="fixed pointer-events-none rounded-full"
        style={{
          zIndex: 9999,
          width: outerSize,
          height: outerSize,
          left: outerPos.x - outerSize / 2,
          top: outerPos.y - outerSize / 2,
          border: `1.5px solid rgba(34,197,94,${clicking ? 0.9 : hovering ? 0.7 : 0.5})`,
          boxShadow: hovering
            ? "0 0 12px 2px rgba(34,197,94,0.3), inset 0 0 8px rgba(34,197,94,0.1)"
            : "0 0 6px rgba(34,197,94,0.2)",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
          backdropFilter: hovering ? "blur(1px)" : "none",
        }}
      />
    </>
  );
}
