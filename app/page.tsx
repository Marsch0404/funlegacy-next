import Navbar from "@/components/layout/Navbar";
import VehicleShowcase from "@/components/sections/VehicleShowcase";
import WhyFunLegacy from "@/components/sections/WhyFunLegacy";
import NewsSection from "@/components/sections/NewsSection";
import TeamSection from "@/components/sections/TeamSection";
import DownloadsSection from "@/components/sections/DownloadsSection";

const features = [
  {
    title: "Eigene Fahrzeuge",
    description:
      "Entdecke Autos, Motorräder, Flugzeuge, Boote und viele weitere Spezialfahrzeuge.",
  },
  {
    title: "Aktive Community",
    description:
      "Erlebe gemeinsame Projekte, Events und eine Community, die FunLegacy mitgestaltet.",
  },
  {
    title: "Ständige Entwicklung",
    description:
      "Neue Inhalte, Systeme und Verbesserungen sorgen regelmäßig für frischen Spielspaß.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b11] text-white">
      <Navbar />

      <section
        id="start"
        className="relative flex min-h-screen items-center px-6 pb-20 pt-32"
      >
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/20 blur-[140px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Die nächste Generation von FunLegacy
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Minecraft.
              <span className="block bg-gradient-to-r from-green-300 via-green-400 to-emerald-600 bg-clip-text text-transparent">
                Neu gedacht.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              Willkommen bei FunLegacy. Entdecke eigene Fahrzeuge, einzigartige
              Projekte und eine moderne Minecraft-Community, die stetig wächst.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#spielen"
                className="rounded-2xl bg-green-500 px-7 py-4 text-center font-bold text-black shadow-[0_0_35px_rgba(34,197,94,0.25)] transition hover:-translate-y-0.5 hover:bg-green-400"
              >
                Jetzt spielen
              </a>

              <a
                href="#discord"
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
              >
                Discord besuchen
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-400">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                Java: play.funlegacy.de
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                Bedrock: play.funlegacy.de
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-green-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-4 shadow-2xl">
              <div className="aspect-[4/5] rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.22),_transparent_45%),linear-gradient(145deg,_#111827,_#05070b)] p-8">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-300">
                      SERVER ONLINE
                    </span>

                    <span className="text-sm text-slate-400">FunLegacy Network</span>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                      Willkommen
                    </p>

                    <h2 className="mt-3 text-4xl font-black">
                      Deine Welt.
                      <span className="block text-green-400">Deine Geschichte.</span>
                    </h2>

                    <p className="mt-4 max-w-sm leading-7 text-slate-400">
                      Starte dein nächstes Abenteuer und werde Teil einer
                      Community, die mehr aus Minecraft macht.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-2xl font-black">24/7</p>
                      <p className="mt-1 text-sm text-slate-400">Online</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-2xl font-black">Java + Bedrock</p>
                      <p className="mt-1 text-sm text-slate-400">Crossplay</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VehicleShowcase />

      <WhyFunLegacy />

      <NewsSection />

      <TeamSection />

      <DownloadsSection />

      <section className="border-y border-white/10 bg-white/[0.02] px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-5 h-10 w-10 rounded-xl bg-green-500/15 ring-1 ring-green-400/20" />
              <h2 className="text-xl font-bold">{feature.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}