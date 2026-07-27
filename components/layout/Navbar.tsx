"use client";

import { useState } from "react";

const navigation = [
  { label: "Start", href: "#start" },
  { label: "Fahrzeuge", href: "#fahrzeuge" },
  { label: "News", href: "#news" },
  { label: "Team", href: "#team" },
  { label: "Downloads", href: "#downloads" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b11]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#start" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 font-black text-black shadow-[0_0_30px_rgba(34,197,94,0.35)]">
            FL
          </span>

          <div>
            <p className="font-black tracking-wide text-white">FunLegacy</p>
            <p className="text-xs text-slate-400">Minecraft Network</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden rounded-xl bg-green-500 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-green-400 sm:inline-flex"
          >
            Login
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 block h-0.5 w-5 bg-current transition ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 block h-0.5 w-5 bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-5 bg-current transition ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#070b11]/95 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#login"
            onClick={closeMenu}
            className="mt-2 rounded-xl bg-green-500 px-4 py-3 text-center font-bold text-black transition hover:bg-green-400"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}