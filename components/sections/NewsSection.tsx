const news = [
  {
    date: "28. Juli 2026",
    category: "Entwicklung",
    title: "Die neue FunLegacy-Webseite entsteht",
    description:
      "Wir bauen aktuell eine vollständig neue Plattform mit modernem Design, neuen Funktionen und einer besseren Übersicht.",
  },
  {
    date: "Demnächst",
    category: "Fahrzeuge",
    title: "Neue Fahrzeug-Kollektionen",
    description:
      "Weitere Autos, Motorräder, Flugzeuge und Wasserfahrzeuge werden vorbereitet und künftig auf der Webseite vorgestellt.",
  },
  {
    date: "Demnächst",
    category: "Community",
    title: "Mehr Inhalte für unsere Spieler",
    description:
      "News, Downloads, Teamvorstellungen und Community-Projekte erhalten eigene moderne Bereiche.",
  },
];

export default function NewsSection() {
  return (
    <section
      id="news"
      className="relative border-y border-white/10 bg-white/[0.02] px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-400">
              Neuigkeiten
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Aktuelles aus FunLegacy.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Erfahre mehr über neue Inhalte, Entwicklungen und kommende
              Community-Projekte.
            </p>
          </div>

          <a
            href="#alle-news"
            className="inline-flex w-fit items-center gap-2 font-bold text-green-400 transition hover:gap-3"
          >
            Alle Neuigkeiten
            <span>→</span>
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {news.map((article, index) => (
            <article
              key={article.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d141f] p-7 transition duration-300 hover:-translate-y-2 hover:border-green-400/30"
            >
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-green-500/10 blur-3xl transition group-hover:bg-green-500/20" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-bold text-green-300">
                    {article.category}
                  </span>

                  <span className="text-xs text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-16">
                  <p className="text-sm text-slate-500">{article.date}</p>

                  <h3 className="mt-3 text-2xl font-black leading-tight">
                    {article.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {article.description}
                  </p>

                  <a
                    href="#"
                    className="mt-7 inline-flex items-center gap-2 font-bold text-white transition group-hover:text-green-400"
                  >
                    Beitrag lesen
                    <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}