const downloads = [
  {
    title: "FunLegacy Resourcepack",
    type: "Resourcepack",
    version: "Version 1.0",
    description:
      "Das offizielle Ressourcenpaket für besondere Modelle, Texturen und FunLegacy-Inhalte.",
    button: "Herunterladen",
  },
  {
    title: "Installationshilfe",
    type: "Anleitung",
    version: "Java & Bedrock",
    description:
      "Eine verständliche Anleitung für Installation, Einrichtung und häufige Probleme.",
    button: "Anleitung öffnen",
  },
  {
    title: "Weitere Inhalte",
    type: "Downloads",
    version: "Demnächst",
    description:
      "Hier werden zukünftig zusätzliche Pakete, Erweiterungen und Community-Inhalte angeboten.",
    button: "Mehr erfahren",
  },
];

export default function DownloadsSection() {
  return (
    <section
      id="downloads"
      className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] px-6 py-28"
    >
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-green-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-400">
              Downloads
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Alles für dein Abenteuer.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Lade wichtige Dateien herunter, finde Installationshilfen und
              bleibe bei neuen FunLegacy-Inhalten auf dem aktuellen Stand.
            </p>

            <div className="mt-10 rounded-[1.75rem] border border-green-400/20 bg-green-400/10 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
                Hinweis
              </p>

              <p className="mt-3 leading-7 text-slate-300">
                Die Download-Schaltflächen sind aktuell noch Platzhalter. Später
                verbinden wir sie mit echten Dateien und Versionsinformationen.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {downloads.map((download, index) => (
              <article
                key={download.title}
                className="group rounded-[1.75rem] border border-white/10 bg-[#0d141f] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/30"
              >
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/10 font-black text-green-300">
                      0{index + 1}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-400">
                          {download.type}
                        </span>

                        <span className="text-xs text-slate-500">
                          {download.version}
                        </span>
                      </div>

                      <h3 className="mt-2 text-2xl font-black">
                        {download.title}
                      </h3>

                      <p className="mt-3 max-w-xl leading-7 text-slate-400">
                        {download.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href="#downloads"
                    className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-white transition group-hover:border-green-400/30 group-hover:bg-green-500 group-hover:text-black"
                  >
                    {download.button}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}