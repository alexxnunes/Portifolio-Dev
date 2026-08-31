import { portfolioData } from "../data/portfolioData";
import { techIcons } from "../lib/techIcons";
import { Reveal } from "./Reveal";

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="habilidades" className="border-t border-slate-100 bg-slate-50/50 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="font-['JetBrains_Mono'] text-xs font-medium text-blue-500">// stack</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Habilidades & Tecnologias
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div className="h-full rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="text-base font-bold text-slate-900">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {group.items.map((item) => {
                    const Icon = techIcons[item];
                    if (Icon) {
                      return (
                        <div
                          key={item}
                          className="flex flex-col items-center gap-1.5 rounded-lg p-2 transition-transform hover:scale-110"
                        >
                          <Icon size={28} className="text-slate-600" />
                          <span className="font-['JetBrains_Mono'] text-[10px] text-slate-500 text-center leading-tight">
                            {item}
                          </span>
                        </div>
                      );
                    }
                    return (
                      <span
                        key={item}
                        className="flex items-center justify-center rounded-md border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
