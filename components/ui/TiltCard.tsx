"use client";

import {
  ReactNode,
  useRef,
  MouseEvent,
} from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export default function TiltCard({
  children,
  className = "",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 16;
    const rotateX = ((y / rect.height) - 0.5) * -16;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.03,1.03,1.03)
    `;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  }

  function resetCard() {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }

  return (
    <div
      className="group [perspective:1200px]"
      onMouseMove={handleMove}
      onMouseLeave={resetCard}
    >
      <div
        ref={cardRef}
        className={`relative overflow-hidden transition-transform duration-200 will-change-transform ${className}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--x) var(--y), rgba(34,211,238,.18), transparent 45%)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(120deg, transparent 20%, rgba(255,255,255,.08), transparent 70%)",
          }}
        />

        {children}
      </div>
    </div>
  );
}