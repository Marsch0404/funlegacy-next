import TiltCard from "@/components/ui/TiltCard";
import { reasons } from "@/data/reasons";

export default function WhyFunLegacy() {
  return (
    <section id="warum" className="relative overflow-hidden px-6 py-28">
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
              Warum FunLegacy?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
              Eine Welt, die gemeinsam wächst.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              FunLegacy verbindet eigene Ideen, moderne Technik und eine aktive
              Community zu einem Minecraft-Erlebnis, das sich kontinuierlich
              weiterentwickelt.
            </p>

            <a
              href="#discord"
              className="group relative mt-8 inline-flex overflow-hidden rounded-2xl border border-cyan-200/20 bg-cyan-300 px-6 py-3 font-black text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_0_40px_rgba(34,211,238,0.32)]"
            >
              <span className="absolute inset-0 translate-x-[-130%] bg-gradient-to-r from-transparent via-white/45 to-transparent transition duration-700 group-hover:translate-x-[130%]" />

              <span className="relative inline-flex items-center gap-2">
                Community kennenlernen

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <TiltCard
                key={reason.number}
                className="h-full rounded-[1.75rem]"
              >
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-cyan-200/10 bg-slate-950/45 p-7 shadow-[0_20px_70px_rgba(2,8,23,0.42)] backdrop-blur-xl transition duration-500 hover:border-cyan-300/30 hover:shadow-[0_25px_85px_rgba(34,211,238,0.12)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_48%)] opacity-45 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.035),transparent_42%)]" />

                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl transition duration-500 group-hover:bg-cyan-300/20" />

                  <div className="relative z-10">
                    <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-300/10 px-3 text-sm font-black text-cyan-200">
                      {reason.number}
                    </span>

                    <h3 className="mt-8 text-2xl font-black text-white transition duration-300 group-hover:text-cyan-100">
                      {reason.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                      {reason.description}
                    </p>

                    <div className="mt-7 h-px w-full overflow-hidden bg-white/10">
                      <div className="h-full w-0 bg-gradient-to-r from-cyan-300 to-sky-400 transition-all duration-500 group-hover:w-full" />
                    </div>
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