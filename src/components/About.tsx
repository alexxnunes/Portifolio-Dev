import { Award, BadgeCheck } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";

export function About() {
  const { profile } = portfolioData;

  return (
    <section id="sobre" className="border-t border-slate-100 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-['JetBrains_Mono'] text-xs font-medium text-blue-500">// sobre</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Um pouco sobre mim
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              {profile.about.split("\n\n").map((paragraph, i) => (
                <p key={i} className={`text-base leading-relaxed text-slate-600 ${i > 0 ? "mt-4" : ""}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={100}>
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-600">
                  <BadgeCheck size={18} />
                  <h3 className="text-sm font-semibold uppercase tracking-wide">Certificações</h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {profile.certifications.map((cert) => (
                    <li key={cert} className="text-sm text-slate-600">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-amber-600">
                  <Award size={18} />
                  <h3 className="text-sm font-semibold uppercase tracking-wide">Prêmios</h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {profile.awards.map((award) => (
                    <li key={award} className="text-sm text-slate-600">
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
