import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { vehicles } from "@/data/vehicles";

export default function VehicleShowcase() {
  return (
    <section id="fahrzeuge" className="relative overflow-hidden px-6 py-28">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            FunLegacy Vehicles
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
            Mehr als nur Fortbewegung.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Unsere Fahrzeuge sind ein zentraler Bestandteil von FunLegacy. Von
            Straßenfahrzeugen über Flugzeuge bis zu Speedbooten entsteht eine
            stetig wachsende Welt eigener Modelle.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {vehicles.map((vehicle, index) => (
            <Reveal key={vehicle.title} delay={index * 120}>
              <TiltCard className="h-full rounded-[2rem]">
                <article className="group relative h-full min-h-[440px] overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-slate-950/40 p-7 shadow-[0_20px_70px_rgba(2,8,23,0.45)] backdrop-blur-xl transition duration-500 hover:border-cyan-300/35 hover:shadow-[0_25px_90px_rgba(34,211,238,0.14)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.20),_transparent_45%)] opacity-50 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_40%)]" />

                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-300/20" />

                  <div className="absolute inset-x-7 top-7 z-10 flex items-center justify-between">
                    <span className="rounded-full border border-cyan-200/15 bg-slate-950/60 px-3 py-1 text-xs text-cyan-100 backdrop-blur-md">
                      {vehicle.category}
                    </span>

                    <span className="text-sm font-bold text-cyan-200/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="absolute inset-x-7 bottom-7 z-10">
                    <div className="relative mb-8 h-44 overflow-hidden rounded-2xl border border-cyan-200/10 bg-gradient-to-br from-cyan-300/10 via-sky-400/5 to-transparent transition duration-500 group-hover:scale-[1.03]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(125,211,252,0.12),_transparent_65%)]" />

                      <div className="relative flex h-full items-center justify-center text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100/35">
                        Fahrzeugbild
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white transition duration-300 group-hover:text-cyan-100">
                      {vehicle.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {vehicle.description}
                    </p>

                    <a
                      href="#fahrzeuge"
                      className="group/link mt-6 inline-flex items-center gap-2 font-bold text-cyan-300 transition duration-300 hover:text-cyan-200"
                    >
                      Kollektion ansehen

                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/link:translate-x-2"
                      >
                        →
                      </span>
                    </a>
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