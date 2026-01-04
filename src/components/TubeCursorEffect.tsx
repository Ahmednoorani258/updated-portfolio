'use client'

import { useEffect, useRef } from 'react'

export default function TubesCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const script = document.createElement('script')
    script.type = 'module'

    script.textContent = `
      import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

      const canvas = document.querySelector('canvas');
      
      const app = TubesCursor(canvas, {
        tubes: {
          colors: ["#f967fb", "#53bc28", "#6958d5"],
          lights: {
            intensity: 200,
            colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
          }
        }
      });

      document.body.addEventListener("click", () => {
        const randomColors = (count) =>
          Array.from({ length: count }, () =>
            "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
          );

        app.tubes.setColors(randomColors(3));
        app.tubes.setLightsColors(randomColors(4));
      });
    `

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
