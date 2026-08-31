import { ArrowDown, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./icons";
import heroImg from "../assets/Alex.jpg";

export function Hero() {
  const { profile, social } = portfolioData;

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center pt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-5 py-16 text-center md:flex-row md:text-left md:gap-16">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Disponível para projetos
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-3 font-['JetBrains_Mono'] text-lg font-medium text-slate-500 sm:text-xl">
            {profile.role}
          </p>

          <p className="mt-2 font-['JetBrains_Mono'] text-sm text-slate-400">
            {profile.tagline}
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-500 md:mx-0">
            {profile.philosophy}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              <Mail size={16} /> Contato
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:text-slate-900"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:text-slate-900"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <div className="flex h-56 w-56 items-center justify-center rounded-3xl border border-blue-100 bg-blue-50/50 p-2 sm:h-64 sm:w-64">
            <img
              src={heroImg}
              alt={profile.name}
              className="h-full w-full rounded-2xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-300 transition-colors hover:text-slate-500"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
