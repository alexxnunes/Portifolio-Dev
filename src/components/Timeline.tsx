import {
  GraduationCap,
  Award,
  type LucideIcon,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  award: Award,
};

export function Timeline() {
  const { timeline } = portfolioData;

  return (
    <section id="trajetoria" className="border-t border-slate-100 py-24">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal>
          <p className="font-['JetBrains_Mono'] text-xs font-medium text-blue-500">// jornada</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Trajetória
          </h2>
        </Reveal>

        <ol className="relative mt-12 border-l border-slate-200 pl-8 sm:pl-10">
          {timeline.map((item, i) => {
            const Icon = iconMap[item.icon] ?? GraduationCap;
            return (
              <Reveal as="li" key={`${item.year}-${i}`} delay={i * 60} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.6rem] flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-500 sm:-left-[3.1rem]">
                  <Icon size={16} />
                </span>
                <span className="font-['JetBrains_Mono'] text-xs font-medium text-slate-400">
                  {item.year}
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
