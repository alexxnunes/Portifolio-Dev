import {
  SiSpringboot,
  SiSpring,
  SiApachemaven,
  SiDocker,
  SiLinux,
  SiNginx,
  SiGit,
  SiGithub,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiIntellijidea,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { TbCloud } from "react-icons/tb";

type IconType = (props: { size?: string | number; color?: string; className?: string }) => React.ReactNode;

export const techIcons: Record<string, IconType> = {
  Java: DiJava as IconType,
  "Spring Boot": SiSpringboot as IconType,
  Spring: SiSpring as IconType,
  Maven: SiApachemaven as IconType,
  Docker: SiDocker as IconType,
  Linux: SiLinux as IconType,
  Nginx: SiNginx as IconType,
  "Oracle Cloud (OCI)": TbCloud as IconType,
  Git: SiGit as IconType,
  GitHub: SiGithub as IconType,
  JavaScript: SiJavascript as IconType,
  HTML: SiHtml5 as IconType,
  CSS: SiCss as IconType,
  PostgreSQL: SiPostgresql as IconType,
  "IntelliJ IDEA": SiIntellijidea as IconType,
  "VS Code": VscVscode as IconType,
  Postman: SiPostman as IconType,
  Figma: SiFigma as IconType,
};
