"use client"
import { useEffect, useState } from 'react';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Check if the mouse is hovering over interactive elements
  useEffect(() => {
    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    const interactiveElements = document.querySelectorAll(
      'a, button, .interactive, img, .hover-effect'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-10 h-10 bg-blue-500 rounded-full pointer-events-none z-50 transition-all ${
        isHoveringInteractive
          ? 'w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-600 scale-150 animate-pulse'
          : 'scale-100 bg-blue-500'
      }`}
      style={{
        transform: `translate3d(${mousePosition.x - 20}px, ${mousePosition.y - 20}px, 0)`,
        transition: 'transform 0.1s ease-out, background-color 0.2s, width 0.2s, height 0.2s',
      }}
    ></div>
  );
};

export default MouseTracker;
