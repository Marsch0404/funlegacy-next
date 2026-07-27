import { vehicles } from "@/data/vehicles";

export default function VehicleShowcase() {
  return (
    <section id="fahrzeuge" className="relative overflow-hidden px-6 py-28">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-green-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-400">
            FunLegacy Vehicles
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
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
            <article
              key={vehicle.title}
              className="group relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-green-400/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.18),_transparent_45%)] opacity-60 transition group-hover:opacity-100" />

              <div className="absolute inset-x-7 top-7 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-300 backdrop-blur-md">
                  {vehicle.category}
                </span>

                <span className="text-sm font-bold text-slate-500">
                  0{index + 1}
                </span>
              </div>

              <div className="absolute inset-x-7 bottom-7">
                <div className="mb-8 h-44 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent">
                  <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.3em] text-slate-600">
                    Fahrzeugbild
                  </div>
                </div>

                <h3 className="text-2xl font-black">{vehicle.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {vehicle.description}
                </p>

                <a
                  href="#fahrzeuge"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-green-400 transition group-hover:gap-3"
                >
                  Kollektion ansehen
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}