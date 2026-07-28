import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { news } from "@/data/news";

export default function NewsSection() {
  return (
    <section
      id="news"
      className="relative overflow-hidden border-y border-cyan-200/10 bg-white/[0.015] px-6 py-28"
    >
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sky-400/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
              Neuigkeiten
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Aktuelles aus FunLegacy.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Erfahre mehr über neue Inhalte, Entwicklungen und kommende
              Community-Projekte.
            </p>
          </div>

          <a
            href="#alle-news"
            className="group inline-flex w-fit items-center gap-2 font-bold text-cyan-300 transition duration-300 hover:text-cyan-200"
          >
            Alle Neuigkeiten

            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-2"
            >
              →
            </span>
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {news.map((article, index) => (
            <Reveal key={article.title} delay={index * 120}>
              <TiltCard className="h-full rounded-[2rem]">
                <article className="group relative h-full overflow-hidden rounded-[2rem] border border-cyan-200/10 bg-slate-950/45 p-7 shadow-[0_20px_70px_rgba(2,8,23,0.45)] backdrop-blur-xl transition duration-500 hover:border-cyan-300/35 hover:shadow-[0_25px_90px_rgba(34,211,238,0.14)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_48%)] opacity-50 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_42%)]" />

                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-300/20" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full border border-cyan-200/15 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200 backdrop-blur-md">
                        {article.category}
                      </span>

                      <span className="text-xs font-bold text-cyan-200/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-16 flex flex-1 flex-col">
                      <p className="text-sm text-slate-500">{article.date}</p>

                      <h3 className="mt-3 text-2xl font-black leading-tight text-white transition duration-300 group-hover:text-cyan-100">
                        {article.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-400">
                        {article.description}
                      </p>

                      <a
                        href="#"
                        className="group/link mt-auto inline-flex items-center gap-2 pt-7 font-bold text-cyan-300 transition duration-300 hover:text-cyan-200"
                      >
                        Beitrag lesen

                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover/link:translate-x-2"
                        >
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}