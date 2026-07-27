import { teamMembers } from "@/data/team";

export default function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden px-6 py-28">
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-green-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-400">
            Das FunLegacy-Team
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
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
            <article
              key={member.name}
              className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-green-400/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.16),_transparent_48%)] opacity-60 transition group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-slate-500">
                    0{index + 1}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-bold text-green-300">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    {member.status}
                  </span>
                </div>

                <div className="mt-8 flex flex-1 items-center justify-center">
                  <div className="flex h-48 w-36 items-center justify-center rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/10 to-transparent text-center text-xs uppercase tracking-[0.25em] text-slate-600">
                    Minecraft
                    <br />
                    Skin
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                    {member.role}
                  </p>

                  <h3 className="mt-2 text-2xl font-black">{member.name}</h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {member.description}
                  </p>

                  <a
                    href="#team"
                    className="mt-6 inline-flex items-center gap-2 font-bold text-white transition group-hover:gap-3 group-hover:text-green-400"
                  >
                    Mehr erfahren
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