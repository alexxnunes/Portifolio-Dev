export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  type: string;
  featured?: boolean;
  privateRepo?: boolean;
  showcase?: boolean;
  repoUrl?: string;
  liveUrl?: string;
}

export const portfolioData = {
  profile: {
    name: "Alexander Ricardo Nunes",
    role: "Desenvolvedor de Software",
    tagline: "Gosto de entender o problema antes de escolher a tecnologia. Construo software útil, seguro e bem estruturado, pensando em como funciona, roda, escala e se mantém.",
    about:
      "Desenvolvedor de software com foco em backend, infraestrutura e DevOps. Minha base principal é Java e Spring Boot, e construo aplicações completas — da arquitetura do backend e banco de dados até deploy, monitoramento e documentação. Trabalho com Docker, Linux, Nginx e Oracle Cloud Infrastructure para colocar e manter sistemas em produção. No frontend, utilizo JavaScript, HTML e CSS.\n\nAutomatizei pipelines de deploy com GitHub Actions, configurei ambientes de produção com Docker Compose e Nginx, e implementei soluções multi-tenant com autenticação JWT em sistemas ERP reais.\n\nTambém me preocupo com segurança, boas práticas de documentação técnica e conformidade com a LGPD nos projetos que desenvolvo.",
    certifications: [
      "Oracle Cloud Infrastructure (OCI) Foundations Associate",
    ],
    awards: [
      "2º Lugar — Hackathon ONE G9 Brasil (FinGuardian AI)",
    ],
  },
  social: {
    github: "https://github.com/alexxnunes",
    linkedin: "https://www.linkedin.com/in/alexander-ricardo-nunes/",
    email: "alexxnunes@gmail.com",
  },
  skills: [
    {
      category: "Backend",
      items: [
        "Java",
        "Spring Boot",
        "Spring",
        "Maven",
      ],
    },
    {
      category: "DevOps / Infraestrutura",
      items: [
        "Docker",
        "Linux",
        "Nginx",
        "Git",
        "GitHub",
        "Oracle Cloud (OCI)",
      ],
    },
    {
      category: "Frontend",
      items: ["JavaScript", "HTML", "CSS"],
    },
    {
      category: "Banco de Dados",
      items: ["PostgreSQL"],
    },
    {
      category: "Ferramentas",
      items: [
        "IntelliJ IDEA",
        "VS Code",
        "Postman",
        "Figma",
      ],
    },
  ],
  fundamentals: [
    "Orientação a Objetos",
    "Arquitetura de Aplicações",
    "APIs REST",
    "Banco de Dados Relacional",
    "Persistência de Dados (JPA/Hibernate)",
    "Testes Automatizados (JUnit/Mockito)",
    "Versionamento",
    "Multi-tenancy",
    "LGPD",
  ],
  timeline: [
    {
      year: "2025 – 2026",
      title: "Oracle Next Education (ONE) + Alura",
      description:
        "Estudei Java e desenvolvimento de software. Construí projetos práticos com Java, Spring Boot, APIs REST, Git e desenvolvimento web.",
      icon: "graduation",
    },
    {
      year: "2026",
      title: "2º Lugar — Hackathon ONE G9 Brasil",
      description:
        "Construí o FinGuardian AI com Java, Spring Boot, React, Go, Docker e Oracle Cloud. Desenvolvi o INFLINT Core, o Leoa Conecta e evoluí o Confeita ERP.",
      icon: "award",
    },
  ],
  projects: [
    {
      id: "doce-iolanda",
      title: "Doce Iolanda",
      subtitle: "Sistema de operação real",
      description:
        "Sistema ERP multi-tenant construído para a operação diária de uma confeitaria real. Implementei arquitetura multi-tenant, autenticação via JWT e módulos completos: pedidos, orçamentos, produtos, receitas, produção, estoque, clientes, financeiro, fiscal, integração WhatsApp e dashboard.",
      stack: ["Java", "Spring Boot", "PostgreSQL", "Nginx", "Docker"],
      type: "Sistema Comercial",
      featured: true,
      privateRepo: true,
      showcase: true,
      repoUrl: "https://github.com/alexxnunes/doce-iolanda-showcase",
    },
    {
      id: "confeita-erp",
      title: "Confeita ERP",
      subtitle: "SaaS para gestão de confeitarias",
      description:
        "SaaS multi-tenant que nasceu do sistema real da Doce Iolanda. Evoluí a aplicação para suportar múltiplas confeitarias em uma única base, com centralização de produtos, pedidos, clientes, vendas e processos internos.",
      stack: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
      type: "Produto SaaS",
      featured: true,
      privateRepo: true,
      showcase: true,
      repoUrl: "https://github.com/alexxnunes/confeita-showcase",
    },
    {
      id: "fin-guardian",
      title: "FinGuardian AI",
      subtitle: "2º lugar — Hackathon ONE G9 Brasil",
      description:
        "Solução financeira com IA para detecção de fraudes, análise de gastos e monitoramento de inadimplência. Atuei no desenvolvimento frontend, infraestrutura, arquitetura e deploy na Oracle Cloud. Ficamos em 2º lugar entre 9 equipes.",
      stack: [
        "Java 21",
        "Spring Boot 3",
        "PostgreSQL",
        "Docker",
        "React",
        "Oracle Cloud",
      ],
      type: "Hackathon",
      featured: true,
      repoUrl: "https://github.com/No-Country-simulation/S01-BR-G9-TEAM-08",
    },
    {
      id: "inflint-core",
      title: "INFLINT Core",
      subtitle: "Plataforma central do ecossistema INFLINT",
      description:
        "Projeto próprio — plataforma central da INFLINT para gerenciamento de projetos, usuários, permissões, processos, finanças e infraestrutura. Base centralizada para organizar e integrar todos os ecossistemas da empresa.",
      stack: [
        "Go",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Nginx",
        "Oracle Cloud",
      ],
      type: "Ecossistema",
      featured: true,
      privateRepo: true,
    },
    {
      id: "leoa-conecta",
      title: "Leoa Conecta",
      subtitle: "Em desenvolvimento",
      description:
        "Sistema em desenvolvimento para a operação da Leoa Conecta, com integração planejada ao INFLINT Core. Atualmente conta com estrutura web em Go e React.",
      stack: [
        "Go",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Oracle Cloud",
      ],
      type: "Produto",
      privateRepo: true,
    },
    {
      id: "forumhub",
      title: "ForumHub",
      subtitle: "API REST — Projeto de estudo",
      description:
        "Construí uma API REST com Spring Boot durante a formação Java. pratiquei criação de APIs, persistência de dados, autenticação e organização de uma aplicação backend.",
      stack: ["Java 17", "Spring Boot", "PostgreSQL", "Maven"],
      type: "Estudo",
      repoUrl: "https://github.com/alexxnunes/ForumHub",
    },
    {
      id: "controle-acesso",
      title: "Controle de Acesso",
      subtitle: "Aplicação desktop — POO",
      description:
        "Desenvolvi uma aplicação desktop para gerenciamento de controle de acesso, utilizando interface gráfica e conceitos de orientação a objetos.",
      stack: ["Java", "JavaFX"],
      type: "Estudo",
    },
    {
      id: "api-cep",
      title: "API de Consulta de CEP",
      subtitle: "Consumo de APIs externas",
      description:
        "Construí uma aplicação Java para consulta de endereços through uma API externa, trabalhando com consumo de APIs, requisições HTTP e processamento de JSON.",
      stack: ["Java", "HttpClient", "Gson", "API REST"],
      type: "Estudo",
    },
  ] as Project[],
};
