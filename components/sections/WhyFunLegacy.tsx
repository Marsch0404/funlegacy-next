import { reasons } from "@/data/reasons";

export default function WhyFunLegacy() {
  return (
    <section id="warum" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-400">
              Warum FunLegacy?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Eine Welt, die gemeinsam wächst.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              FunLegacy verbindet eigene Ideen, moderne Technik und eine aktive
              Community zu einem Minecraft-Erlebnis, das sich kontinuierlich
              weiterentwickelt.
            </p>

            <a
              href="#discord"
              className="mt-8 inline-flex rounded-2xl bg-green-500 px-6 py-3 font-bold text-black transition hover:bg-green-400"
            >
              Community kennenlernen
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-green-400/30"
              >
                <span className="text-sm font-black text-green-400">
                  {reason.number}
                </span>

                <h3 className="mt-8 text-2xl font-black">{reason.title}</h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}