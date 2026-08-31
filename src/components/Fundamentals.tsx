import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";

export function Fundamentals() {
  const { fundamentals } = portfolioData;

  return (
    <section id="fundamentos" className="border-t border-slate-100 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-['JetBrains_Mono'] text-xs font-medium text-blue-500">// fundamentos</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Fundamentos e Boas Práticas
          </h2>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 flex flex-wrap gap-3">
            {fundamentals.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
