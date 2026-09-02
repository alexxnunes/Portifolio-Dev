import { ExternalLink, Star } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { Reveal } from "./Reveal";
import { GithubIcon } from "./icons";

export function Projects() {
  const projects = portfolioData.projects;

  return (
    <section id="projetos" className="border-t border-slate-100 bg-slate-50/50 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="font-['JetBrains_Mono'] text-xs font-medium text-blue-500">// projetos</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Projetos em destaque
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <article
                className={`group flex h-full flex-col rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
                  project.featured ? "border-blue-200" : "border-slate-200"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-md border border-slate-100 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-500">
                    {project.type}
                  </span>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600">
                        <Star size={14} className="fill-amber-500" /> Destaque
                      </span>
                    )}
                    {project.showcase && (
                      <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                        Showcase
                      </span>
                    )}
                    {project.privateRepo && !project.showcase && (
                      <span className="rounded-md border border-slate-100 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-500">
                        Privado
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-600">{project.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 font-['JetBrains_Mono'] text-xs text-slate-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.repoUrl || project.liveUrl) && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
                      >
                        <GithubIcon size={14} /> {project.showcase ? "Ver showcase" : "Código"}
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 transition-colors hover:bg-blue-100"
                      >
                        <ExternalLink size={14} /> Ver online
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center" delay={60}>
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50"
          >
            <GithubIcon size={16} /> Ver mais no GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
