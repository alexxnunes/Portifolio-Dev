import { Menu, X } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { cn } from "../lib/cn";
import { GithubIcon, LinkedinIcon } from "./icons";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Fundamentos", href: "#fundamentos" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { profile, social } = portfolioData;

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="font-['JetBrains_Mono'] text-sm font-semibold tracking-tight text-slate-900">
          {profile.name.split(" ")[0].toLowerCase()}
          <span className="text-blue-600">_</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-slate-900"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 transition-colors hover:text-slate-900"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-500 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div className={cn("overflow-hidden border-t border-slate-100 md:hidden", open ? "max-h-96" : "max-h-0")}>
        <ul className="flex flex-col gap-1 px-5 py-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-slate-500 hover:text-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex gap-3 px-3 pt-2">
            <a href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-slate-900">
              <GithubIcon size={18} />
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-slate-900">
              <LinkedinIcon size={18} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
