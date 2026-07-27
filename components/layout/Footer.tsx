const navigation = [
  { label: "Start", href: "#start" },
  { label: "Fahrzeuge", href: "#fahrzeuge" },
  { label: "News", href: "#news" },
  { label: "Team", href: "#team" },
  { label: "Downloads", href: "#downloads" },
];

const communityLinks = [
  { label: "Discord", href: "#discord" },
  { label: "Forum", href: "#forum" },
  { label: "BlueMap", href: "#bluemap" },
  { label: "Support", href: "#support" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05080d] px-6 pb-10 pt-20">
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-green-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div className="max-w-xl">
            <a href="#start" className="inline-flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500 font-black text-black shadow-[0_0_35px_rgba(34,197,94,0.3)]">
                FL
              </span>

              <div>
                <p className="text-xl font-black">FunLegacy</p>
                <p className="text-sm text-slate-500">Minecraft Network</p>
              </div>
            </a>

            <p className="mt-6 max-w-lg leading-7 text-slate-400">
              Eine moderne Minecraft-Community mit eigenen Fahrzeugen,
              besonderen Projekten und einer Welt, die gemeinsam wächst.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                Java: play.funlegacy.de
              </span>

              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                Bedrock: play.funlegacy.de
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white">
              Navigation
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit text-slate-400 transition hover:text-green-400"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white">
              Community
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {communityLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit text-slate-400 transition hover:text-green-400"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} FunLegacy. Alle Rechte vorbehalten.
          </p>

          <div className="flex flex-wrap gap-5">
            <a href="#impressum" className="transition hover:text-white">
              Impressum
            </a>

            <a href="#datenschutz" className="transition hover:text-white">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}