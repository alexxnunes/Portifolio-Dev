import { portfolioData } from "../data/portfolioData";
import { techIcons } from "../lib/techIcons";
import { Reveal } from "./Reveal";

const mainCategories = ["Backend", "DevOps / Infraestrutura"];

function SkillCard({ group, variant, delay = 0 }: { group: { category: string; items: string[] }; variant: "main" | "complementary"; delay?: number }) {
  const isMain = variant === "main";

  return (
    <Reveal delay={delay}>
      <div
        className={`h-full rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
          isMain
            ? "border-l-4 border-l-blue-500 border-t-slate-100 border-r-slate-100 border-b-slate-100"
            : "border-slate-100"
        }`}
      >
        <h3 className={`text-base text-slate-900 ${isMain ? "font-bold" : "font-semibold"}`}>
          {group.category}
        </h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {group.items.map((item) => {
            const Icon = techIcons[item];
            if (Icon) {
              return (
                <div
                  key={item}
                  className={`flex flex-col items-center gap-1.5 rounded-lg p-2 transition-transform hover:scale-110 ${
                    isMain ? "" : "opacity-80"
                  }`}
                >
                  <Icon size={isMain ? 28 : 22} className="text-slate-600" />
                  <span className="font-['JetBrains_Mono'] text-slate-500 text-center leading-tight" style={{ fontSize: isMain ? "10px" : "9px" }}>
                    {item}
                  </span>
                </div>
              );
            }
            return (
              <span
                key={item}
                className={`flex items-center justify-center rounded-md border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ${
                  isMain ? "" : "text-[11px]"
                }`}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

export function Skills() {
  const { skills } = portfolioData;

  const mainSkills = skills.filter((g) => mainCategories.includes(g.category));
  const complementarySkills = skills.filter((g) => !mainCategories.includes(g.category));

  return (
    <section id="habilidades" className="border-t border-slate-100 bg-slate-50/50 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="font-['JetBrains_Mono'] text-xs font-medium text-blue-500">// stack</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Habilidades & Tecnologias
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {mainSkills.map((group, i) => (
            <SkillCard key={group.category} group={group} variant="main" delay={i * 60} />
          ))}
        </div>

        <Reveal delay={120}>
          <p className="font-['JetBrains_Mono'] mt-12 text-xs font-medium text-blue-500">// também trabalho com</p>
        </Reveal>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {complementarySkills.map((group, i) => (
            <SkillCard key={group.category} group={group} variant="complementary" delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
