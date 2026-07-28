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
    <footer className="relative overflow-hidden border-t border-cyan-200/10 bg-[#05080d] px-6 pb-10 pt-20">
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-sky-500/10 blur-[150px]" />

      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-300/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-cyan-200/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div className="max-w-xl">
            <a
              href="#start"
              className="group inline-flex items-center gap-4"
            >
              <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-cyan-200/20 bg-cyan-300 font-black text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.25)] transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-cyan-200 group-hover:shadow-[0_0_45px_rgba(34,211,238,0.4)]">
                <span className="absolute inset-0 translate-x-[-130%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition duration-700 group-hover:translate-x-[130%]" />

                <span className="relative">FL</span>
              </span>

              <div>
                <p className="text-xl font-black text-white transition duration-300 group-hover:text-cyan-100">
                  FunLegacy
                </p>

                <p className="text-sm text-slate-500">
                  Minecraft Network
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-lg leading-7 text-slate-400">
              Eine moderne Minecraft-Community mit eigenen Fahrzeugen,
              besonderen Projekten und einer Welt, die gemeinsam wächst.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                className="group rounded-xl border border-cyan-200/10 bg-slate-950/45 px-4 py-3 text-left text-sm text-slate-300 backdrop-blur-xl transition duration-300 hover:border-cyan-200/25 hover:bg-cyan-300/[0.06] hover:text-cyan-100"
                title="Serveradresse kopieren"
              >
                <span className="block text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Java
                </span>

                <span className="mt-1 block">
                  play.funlegacy.de
                </span>
              </button>

              <button
                type="button"
                className="group rounded-xl border border-cyan-200/10 bg-slate-950/45 px-4 py-3 text-left text-sm text-slate-300 backdrop-blur-xl transition duration-300 hover:border-cyan-200/25 hover:bg-cyan-300/[0.06] hover:text-cyan-100"
                title="Serveradresse kopieren"
              >
                <span className="block text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Bedrock
                </span>

                <span className="mt-1 block">
                  play.funlegacy.de
                </span>
              </button>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#discord"
                aria-label="Discord"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/10 bg-white/[0.03] text-sm font-black text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-cyan-300/10 hover:text-cyan-200"
              >
                DC
              </a>

              <a
                href="#forum"
                aria-label="Forum"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/10 bg-white/[0.03] text-sm font-black text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-cyan-300/10 hover:text-cyan-200"
              >
                FO
              </a>

              <a
                href="#support"
                aria-label="Support"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/10 bg-white/[0.03] text-sm font-black text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-cyan-300/10 hover:text-cyan-200"
              >
                SP
              </a>
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
                  className="group flex w-fit items-center gap-3 text-slate-400 transition duration-300 hover:text-cyan-200"
                >
                  <span className="h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-5" />
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
                  className="group flex w-fit items-center gap-3 text-slate-400 transition duration-300 hover:text-cyan-200"
                >
                  <span className="h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-5" />
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center">
          <div>
            <p>
              © {new Date().getFullYear()} FunLegacy. Alle Rechte vorbehalten.
            </p>

            <p className="mt-2 text-xs text-slate-600">
              Entwickelt mit Leidenschaft für die FunLegacy-Community.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <a
              href="#impressum"
              className="transition duration-300 hover:text-cyan-200"
            >
              Impressum
            </a>

            <a
              href="#datenschutz"
              className="transition duration-300 hover:text-cyan-200"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}