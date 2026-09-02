import { Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  const { profile, social } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <section id="contato" className="border-t border-slate-100 py-24">
      <div className="relative mx-auto max-w-5xl px-5 text-center">
        <Reveal>
          <p className="font-['JetBrains_Mono'] text-xs font-medium text-blue-500">// contato</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Vamos construir algo?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Estou aberto a projetos, parcerias e oportunidades. Da arquitetura ao deploy em produção.
          </p>
        </Reveal>

        <Reveal className="mt-8" delay={80}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${social.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:text-blue-600"
            >
              <Mail size={18} />
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
        </Reveal>
      </div>

      <footer className="mx-auto mt-16 max-w-7xl border-t border-slate-100 px-5 pt-8 text-sm text-slate-500">
        <p>© {year} {profile.name}</p>
      </footer>
    </section>
  );
}
