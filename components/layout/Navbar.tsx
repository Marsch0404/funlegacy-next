"use client";

import { useEffect, useState } from "react";

const navigation = [
  { label: "Start", href: "#start" },
  { label: "Fahrzeuge", href: "#fahrzeuge" },
  { label: "News", href: "#news" },
  { label: "Team", href: "#team" },
  { label: "Downloads", href: "#downloads" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-cyan-200/10 bg-[#070b11]/85 shadow-[0_12px_45px_rgba(2,8,23,0.45)] backdrop-blur-2xl"
          : "border-b border-transparent bg-[#070b11]/35 backdrop-blur-xl"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a
          href="#start"
          className="group flex items-center gap-3"
          onClick={closeMenu}
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-200/20 bg-cyan-300 font-black text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.28)] transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-cyan-200 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.42)]">
            <span className="absolute inset-0 translate-x-[-130%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition duration-700 group-hover:translate-x-[130%]" />

            <span className="relative">FL</span>
          </span>

          <div>
            <p className="font-black tracking-wide text-white transition group-hover:text-cyan-100">
              FunLegacy
            </p>

            <p className="text-xs text-slate-400">
              Minecraft Network
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative rounded-xl px-4 py-2 text-sm font-semibold text-slate-300 transition duration-300 hover:bg-cyan-300/[0.06] hover:text-cyan-100"
            >
              {item.label}

              <span className="absolute inset-x-4 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="group relative hidden overflow-hidden rounded-xl border border-cyan-200/20 bg-cyan-300 px-5 py-2.5 text-sm font-black text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_0_38px_rgba(34,211,238,0.32)] sm:inline-flex"
          >
            <span className="absolute inset-0 translate-x-[-130%] bg-gradient-to-r from-transparent via-white/45 to-transparent transition duration-700 group-hover:translate-x-[130%]" />

            <span className="relative">Login</span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/15 bg-slate-950/50 text-cyan-100 backdrop-blur-xl transition duration-300 hover:border-cyan-200/30 hover:bg-cyan-300/10 md:hidden"
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  menuOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-cyan-200/10 bg-[#070b11]/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[520px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5">
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-3 text-slate-300 transition duration-300 hover:border-cyan-200/10 hover:bg-cyan-300/[0.06] hover:text-cyan-100"
            >
              <span>{item.label}</span>

              <span className="text-xs font-black text-cyan-200/30 transition duration-300 group-hover:text-cyan-200/70">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}

          <a
            href="#login"
            onClick={closeMenu}
            className="mt-2 rounded-xl bg-cyan-300 px-4 py-3 text-center font-black text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.2)] transition duration-300 hover:bg-cyan-200"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}