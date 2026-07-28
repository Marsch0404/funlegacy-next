import { downloads } from "@/data/downloads";
import TiltCard from "@/components/ui/TiltCard";

export default function DownloadsSection() {
  return (
    <section
      id="downloads"
      className="relative overflow-hidden border-y border-cyan-200/10 bg-white/[0.015] px-6 py-28"
    >
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
              Downloads
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Alles für dein Abenteuer.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              Lade wichtige Dateien herunter, finde Installationshilfen und
              bleibe bei neuen FunLegacy-Inhalten auf dem aktuellen Stand.
            </p>

            <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-cyan-200/15 bg-cyan-300/[0.06] p-6 backdrop-blur-xl">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-300/10 font-black text-cyan-200">
                    i
                  </span>

                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                    Hinweis
                  </p>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  Die Download-Schaltflächen sind aktuell noch Platzhalter.
                  Später verbinden wir sie mit echten Dateien und
                  Versionsinformationen.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {downloads.map((download, index) => (
              <TiltCard
                key={download.title}
                className="rounded-[1.75rem]"
              >
                <article className="group relative overflow-hidden rounded-[1.75rem] border border-cyan-200/10 bg-slate-950/45 p-6 shadow-[0_20px_70px_rgba(2,8,23,0.4)] backdrop-blur-xl transition duration-500 hover:border-cyan-300/30 hover:shadow-[0_25px_85px_rgba(34,211,238,0.12)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.15),_transparent_45%)] opacity-40 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.035),transparent_42%)]" />

                  <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                    <div className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-300/10 font-black text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.08)] transition duration-300 group-hover:border-cyan-200/30 group-hover:bg-cyan-300/15">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                            {download.type}
                          </span>

                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-400">
                            {download.version}
                          </span>
                        </div>

                        <h3 className="mt-3 text-2xl font-black text-white transition duration-300 group-hover:text-cyan-100">
                          {download.title}
                        </h3>

                        <p className="mt-3 max-w-xl leading-7 text-slate-400">
                          {download.description}
                        </p>
                      </div>
                    </div>

                    <a
                      href="#downloads"
                      className="group/button relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-200/15 bg-cyan-300/10 px-5 py-3 font-bold text-cyan-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/35 hover:bg-cyan-300 hover:text-slate-950 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
                    >
                      <span className="absolute inset-0 translate-x-[-130%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover/button:translate-x-[130%]" />

                      <span className="relative inline-flex items-center gap-2">
                        {download.button}

                        <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                          ↓
                        </span>
                      </span>
                    </a>
                  </div>
                </article>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}