"use client";

import { useEffect, useRef, useState } from "react";
import TiltCard from "@/components/ui/TiltCard";

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Spieler",
    icon: UsersIcon,
  },
  {
    value: 80,
    suffix: "+",
    label: "Fahrzeuge",
    icon: CarIcon,
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime",
    icon: ActivityIcon,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Online",
    icon: GlobeIcon,
  },
  {
    value: 350,
    suffix: "+",
    label: "Updates",
    icon: RocketIcon,
  },
];

type CounterProps = {
  value: number;
  suffix: string;
  shouldStart: boolean;
};

function Counter({ value, suffix, shouldStart }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }

    let animationFrame = 0;
    const duration = 1800;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(value * easedProgress);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [shouldStart, value]);

  const formattedValue = Number.isInteger(value)
    ? Math.floor(count).toLocaleString("de-DE")
    : count.toLocaleString("de-DE", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      });

  return (
    <>
      {formattedValue}
      {suffix}
    </>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="FunLegacy Statistiken"
      className="relative overflow-hidden px-6 pb-28"
    >
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`transition duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <TiltCard className="h-full rounded-3xl">
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-cyan-200/10 bg-slate-950/45 p-7 shadow-[0_20px_70px_rgba(2,8,23,0.4)] backdrop-blur-xl transition duration-500 hover:border-cyan-300/30 hover:shadow-[0_25px_90px_rgba(34,211,238,0.14)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_48%)] opacity-50 transition duration-500 group-hover:opacity-100" />

                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_42%)]" />

                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl transition duration-500 group-hover:bg-cyan-300/20" />

                    <div className="absolute inset-0 translate-x-[-140%] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition duration-1000 group-hover:translate-x-[140%]" />

                    <div className="relative z-10">
                      <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-300/10 text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.1)] transition duration-500 group-hover:scale-110 group-hover:border-cyan-200/30 group-hover:bg-cyan-300/15 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-4xl font-black tracking-tight text-transparent drop-shadow-[0_0_18px_rgba(34,211,238,0.18)]">
                        <Counter
                          value={stat.value}
                          suffix={stat.suffix}
                          shouldStart={isVisible}
                        />
                      </h3>

                      <p className="mt-3 font-medium text-slate-400 transition duration-300 group-hover:text-slate-300">
                        {stat.label}
                      </p>

                      <div className="mt-6 h-px overflow-hidden bg-white/10">
                        <div className="h-full w-0 bg-gradient-to-r from-cyan-300 to-sky-400 transition-all duration-700 group-hover:w-full" />
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type IconProps = {
  className?: string;
};

function UsersIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CarIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 17h14" />
      <path d="M5 17a2 2 0 1 1-4 0v-3l2-5h18l2 5v3a2 2 0 1 1-4 0" />
      <path d="M3 9l2-4h14l2 4" />
      <circle cx="6" cy="17" r="1.5" />
      <circle cx="18" cy="17" r="1.5" />
    </svg>
  );
}

function ActivityIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 12h4l2-7 4 14 2-7h6" />
    </svg>
  );
}

function GlobeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function RocketIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.87 12.87 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      <circle cx="16" cy="8" r="1" />
    </svg>
  );
}