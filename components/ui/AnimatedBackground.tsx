"use client";

import { useEffect, useState } from "react";

type Particle = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
};

/*
  Erzeugt feste, reproduzierbare Werte.
  Dadurch sind Server und Browser identisch
  und es entsteht kein Hydration-Fehler.
*/
function seededValue(index: number, offset: number) {
  const value = Math.sin(index * 12.9898 + offset * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

const particles: Particle[] = Array.from({ length: 35 }, (_, index) => ({
  left: `${seededValue(index, 1) * 100}%`,
  top: `${seededValue(index, 2) * 100}%`,
  size: 2 + seededValue(index, 3) * 4,
  delay: `${seededValue(index, 4) * 10}s`,
  duration: `${14 + seededValue(index, 5) * 12}s`,
}));

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Hintergrund */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Aurora oben links */}
        <div
          className="absolute left-[-20%] top-[-15%] h-[80rem] w-[80rem] rounded-full opacity-25 blur-[180px]"
          style={{
            background:
              "conic-gradient(from 180deg, rgba(34,211,238,0.45), rgba(16,185,129,0.35), rgba(59,130,246,0.35), rgba(34,211,238,0.45))",
            animation: "aurora 24s ease-in-out infinite",
          }}
        />

        {/* Aurora unten rechts */}
        <div
          className="absolute bottom-[-20%] right-[-25%] h-[70rem] w-[70rem] rounded-full opacity-20 blur-[180px]"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(59,130,246,0.35), rgba(34,211,238,0.4), rgba(16,185,129,0.25), rgba(59,130,246,0.35))",
            animation: "aurora 30s ease-in-out infinite reverse",
          }}
        />

        {/* Glows */}
        <div className="absolute -left-40 top-20 h-96 w-96 animate-pulse rounded-full bg-cyan-400/15 blur-[140px]" />

        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] animate-pulse rounded-full bg-sky-400/15 blur-[170px] [animation-delay:1.5s]" />

        <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] animate-pulse rounded-full bg-emerald-400/10 blur-[190px] [animation-delay:3s]" />

        {/* Raster */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      {/* Lichtschein an der Maus */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[15] hidden h-[420px] w-[420px] rounded-full blur-[90px] md:block"
        style={{
          transform: `translate3d(
            ${mousePosition.x - 210}px,
            ${mousePosition.y - 210}px,
            0
          )`,
          background:
            "radial-gradient(circle, rgba(103,232,249,0.18) 0%, rgba(56,189,248,0.10) 35%, rgba(14,165,233,0.04) 60%, transparent 75%)",
          transition: "transform 120ms ease-out",
        }}
      />

      {/* Partikel */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      >
        {particles.map((particle, index) => (
          <span
            key={index}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background:
                "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(103,232,249,1) 45%, rgba(56,189,248,0.35) 100%)",
              filter: "blur(0.4px)",
              opacity: 0.9,
              boxShadow:
                "0 0 8px rgba(103,232,249,1), 0 0 18px rgba(56,189,248,0.9), 0 0 34px rgba(14,165,233,0.45)",
              animation: `floatParticle ${particle.duration} ease-in-out ${particle.delay} infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}