const navigation = [
  { label: "Start", href: "#start" },
  { label: "Fahrzeuge", href: "#fahrzeuge" },
  { label: "News", href: "#news" },
  { label: "Team", href: "#team" },
  { label: "Downloads", href: "#downloads" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b11]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#start" className="flex items-center gap-3">
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

        <a
          href="#login"
          className="rounded-xl bg-green-500 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-green-400"
        >
          Login
        </a>
      </div>
    </header>
  );
}