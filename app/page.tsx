import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServerStatus from "@/components/sections/ServerStatus";
import VehicleShowcase from "@/components/sections/VehicleShowcase";
import WhyFunLegacy from "@/components/sections/WhyFunLegacy";
import NewsSection from "@/components/sections/NewsSection";
import TeamSection from "@/components/sections/TeamSection";
import DownloadsSection from "@/components/sections/DownloadsSection";
import StatsSection from "@/components/sections/StatsSection";
import Reveal from "@/components/ui/Reveal";
import CopyServerAddress from "@/components/ui/CopyServerAddress";

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
        className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
      >
        <div className="absolute left-1/2 top-20 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[160px]" />

        <div className="absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-sky-500/10 blur-[150px]" />

        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-emerald-400/10 blur-[150px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal direction="left">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-200/15 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                </span>

                Die nächste Generation von FunLegacy
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                Minecraft.

                <span className="mt-2 block bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-transparent">
                  Neu gedacht.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                Willkommen bei FunLegacy. Entdecke eigene Fahrzeuge,
                einzigartige Projekte und eine moderne Minecraft-Community, die
                stetig wächst.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#spielen"
                  className="group relative overflow-hidden rounded-2xl bg-cyan-300 px-7 py-4 text-center font-black text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-200 hover:shadow-[0_0_55px_rgba(34,211,238,0.35)]"
                >
                  <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-[120%]" />

                  <span className="relative">Jetzt spielen</span>
                </a>

                <a
                  href="#discord"
                  className="rounded-2xl border border-cyan-200/15 bg-white/[0.04] px-7 py-4 text-center font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-cyan-300/10"
                >
                  Discord besuchen
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl gap-3 text-sm sm:grid-cols-2">
                <CopyServerAddress
                  label="Java"
                  address="play.funlegacy.de"
                />

                <CopyServerAddress
                  label="Bedrock"
                  address="play.funlegacy.de"
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2.5rem] bg-cyan-400/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-200/15 bg-slate-950/45 p-4 shadow-[0_30px_100px_rgba(2,8,23,0.65)] backdrop-blur-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-cyan-200/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.20),_transparent_45%),linear-gradient(145deg,_#101923,_#05070b)] p-8">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px]" />

                  <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]" />

                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                        <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                        SERVER ONLINE
                      </span>

                      <span className="text-sm text-slate-400">
                        FunLegacy Network
                      </span>
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/45">
                        Willkommen
                      </p>

                      <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                        Deine Welt.

                        <span className="block bg-gradient-to-r from-cyan-200 to-sky-400 bg-clip-text text-transparent">
                          Deine Geschichte.
                        </span>
                      </h2>

                      <p className="mt-4 max-w-sm leading-7 text-slate-400">
                        Starte dein nächstes Abenteuer und werde Teil einer
                        Community, die mehr aus Minecraft macht.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-cyan-200/10 bg-black/25 p-4 backdrop-blur-xl">
                        <p className="text-2xl font-black text-white">24/7</p>
                        <p className="mt-1 text-sm text-slate-400">Online</p>
                      </div>

                      <div className="rounded-2xl border border-cyan-200/10 bg-black/25 p-4 backdrop-blur-xl">
                        <p className="text-xl font-black text-white">
                          Java + Bedrock
                        </p>
                        <p className="mt-1 text-sm text-slate-400">Crossplay</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsSection />

      <Reveal>
        <ServerStatus />
      </Reveal>

      <Reveal delay={100}>
        <VehicleShowcase />
      </Reveal>

      <Reveal delay={100} direction="left">
        <WhyFunLegacy />
      </Reveal>

      <Reveal delay={100} direction="right">
        <NewsSection />
      </Reveal>

      <Reveal delay={100}>
        <TeamSection />
      </Reveal>

      <Reveal delay={100}>
        <DownloadsSection />
      </Reveal>

      <section className="relative overflow-hidden border-y border-cyan-200/10 bg-white/[0.015] px-6 py-16">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="relative mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 100}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-cyan-200/10 bg-slate-950/40 p-7 shadow-[0_20px_70px_rgba(2,8,23,0.4)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/30 hover:shadow-[0_25px_80px_rgba(34,211,238,0.12)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.15),_transparent_45%)] opacity-50 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/15 bg-cyan-300/10 text-sm font-black text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.10)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h2 className="text-xl font-black text-white transition group-hover:text-cyan-100">
                    {feature.title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}