"use client";

import { useEffect, useState } from "react";

export default function HUD() {
  const [time, setTime] = useState("");
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      // Get timezone abbreviation roughly
      const timeZoneParts = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).formatToParts(now);
      const timeZoneName = timeZoneParts.find(p => p.type === 'timeZoneName')?.value || 'SYS';
      setTime(`SYS.TIME: ${timeString} ${timeZoneName}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height <= 0) return;
      const scrolled = (winScroll / height) * 100;
      setScrollY(Math.min(100, Math.max(0, scrolled)));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    // Initial scroll
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 font-mono text-[0.65rem] uppercase text-metadata hidden md:block mix-blend-difference">
      {/* Top Right: Clock */}
      <div className="absolute top-8 right-8 text-right">
        {time}
      </div>
      
      {/* Bottom Left: Coordinates and Scroll */}
      <div className="absolute bottom-8 left-8 flex flex-col gap-1">
        <span>POS: X.{pos.x.toFixed(3).substring(2)} Y.{pos.y.toFixed(3).substring(2)}</span>
        <span>SCROLL_Y: {scrollY.toFixed(0).padStart(3, '0')}%</span>
      </div>
      
      {/* Structural balance corners */}
      <div className="absolute top-8 left-8">
        OP_MODE: GRAVITAS
      </div>
      <div className="absolute bottom-8 right-8 text-right">
        VSN: 1.0.0
      </div>
    </div>
  );
}
