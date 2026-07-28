import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { teamMembers } from "@/data/team";

export default function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden px-6 py-28">
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-sky-400/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Das FunLegacy-Team
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
            Menschen hinter der Welt.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Hinter FunLegacy steht ein engagiertes Team, das gemeinsam neue
            Inhalte entwickelt, die Community unterstützt und den Server
            kontinuierlich verbessert.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={(index % 3) * 120}>
              <TiltCard className="h-full rounded-[2rem]">
                <article className="group relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-cyan-200/10 bg-slate-950/45 p-7 shadow-[0_20px_70px_rgba(2,8,23,0.45)] backdrop-blur-xl transition duration-500 hover:border-cyan-300/35 hover:shadow-[0_25px_90px_rgba(34,211,238,0.14)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_48%)] opacity-50 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_42%)]" />

                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-300/20" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-black text-cyan-200/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
                        {member.status}
                      </span>
                    </div>

                    <div className="mt-8 flex flex-1 items-center justify-center">
                      <div className="relative flex h-48 w-36 items-center justify-center overflow-hidden rounded-[1.75rem] border border-cyan-200/10 bg-gradient-to-b from-cyan-300/10 via-sky-400/5 to-transparent text-center text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100/35 shadow-[0_20px_50px_rgba(2,8,23,0.45)] transition duration-500 group-hover:scale-[1.03] group-hover:border-cyan-200/25 group-hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.16),_transparent_60%)]" />

                        <span className="relative">
                          Minecraft
                          <br />
                          Skin
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-1 flex-col">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                        {member.role}
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-white transition duration-300 group-hover:text-cyan-100">
                        {member.name}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-400">
                        {member.description}
                      </p>

                      <a
                        href="#team"
                        className="group/link mt-auto inline-flex items-center gap-2 pt-6 font-bold text-cyan-300 transition duration-300 hover:text-cyan-200"
                      >
                        Mehr erfahren

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