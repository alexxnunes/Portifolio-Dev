export const portfolioData = {
  profile: {
    name: "Alexander Ricardo Nunes",
    role: "Desenvolvedor de Software",
    tagline: "Java • Spring Boot • DevOps • Docker • Oracle Cloud",
    philosophy:
      "Gosto de entender o problema antes de escolher a tecnologia. Construo software útil, seguro e bem estruturado — pensando não só em como ele funciona, mas em como ele roda, escala e se mantém.",
    about:
      "Sou desenvolvedor de software em formação, com foco em backend, infraestrutura e DevOps. Minha base principal é Java e Spring Boot, com experiência prática em Docker, Linux, Nginx e Oracle Cloud Infrastructure para deploy e gerenciamento de aplicações.\n\nNo frontend, trabalho com JavaScript, HTML e CSS; para stacks mais complexas (React, TypeScript), já venho utilizando com apoio de IA no desenvolvimento.\n\nTenho experiência prática desenvolvendo aplicações completas, desde a arquitetura do backend e banco de dados até infraestrutura, deploy e documentação — com interesse crescente em automação de processos e cultura DevOps.\n\nMinha formação em desenvolvimento inclui o programa Oracle Next Education (ONE) com Alura, com estudos em Java, lógica de programação, orientação a objetos, Git/GitHub, desenvolvimento web e Spring Boot.\n\nGosto de projetos que envolvem problemas reais de negócio, arquitetura, infraestrutura e automação de sistemas que possam evoluir de forma organizada.\n\nTambém me preocupo com segurança, boas práticas de documentação técnica e conformidade com a LGPD nos projetos que desenvolvo.",
    certifications: [
      "Oracle Cloud Infrastructure (OCI) Foundations Associate",
      "Oracle Next Education (ONE) — Formação em Desenvolvimento de Software com Alura",
    ],
    awards: [
      "2º Lugar — Hackathon ONE G9 Brasil (FinGuardian AI)",
      "1º Lugar — Categoria Exatas e Engenharia, JDTEC 2017",
      "3º Lugar — Categoria Química, FETEC 2017",
      "1º Lugar — Categoria Química, FETEC 2018",
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
        "Docker Compose",
        "Linux",
        "Ubuntu",
        "Nginx",
        "Git",
        "GitHub",
      ],
    },
    {
      category: "Frontend",
      items: ["JavaScript", "HTML", "CSS", "React", "TypeScript"],
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
        "GitHub",
        "Canva",
        "Terminal",
        "Insomnia",
        "Docker Desktop",
        "Figma",
        "Notion",
        "GitHub Actions",
      ],
    },
  ],
  fundamentals: [
    "Orientação a Objetos",
    "Arquitetura de Aplicações",
    "APIs REST",
    "Banco de Dados Relacional",
    "Persistência de Dados (JPA/Hibernate)",
    "Autenticação e Autorização (JWT)",
    "Testes Automatizados (JUnit/Mockito)",
    "Multi-tenancy",
    "Versionamento",
    "LGPD",
  ],
  timeline: [
    {
      year: "2025 – 2026",
      title: "Oracle Next Education (ONE) + Alura",
      description:
        "Formação e estudos em Java e desenvolvimento de software. Desenvolvimento de projetos práticos com Java, Spring Boot, APIs REST, Git e desenvolvimento web.",
      icon: "graduation",
    },
    {
      year: "2026",
      title: "2º Lugar — Hackathon ONE G9 Brasil",
      description:
        "FinGuardian AI. Desenvolvimento de projetos utilizando Java, Spring Boot, React, Go, Docker e Oracle Cloud. Desenvolvimento do INFLINT Core, Leoa Conecta e evolução do Confeita ERP.",
      icon: "award",
    },
  ],
  projects: [
    {
      id: "doce-iolanda",
      title: "Doce Iolanda",
      subtitle: "Sistema de operação real",
      description:
        "Sistema ERP desenvolvido para a operação diária de uma confeitaria real. Cobrindo gestão de produtos, pedidos e operação com foco em usabilidade e confiabilidade.",
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
        "Sistema de gestão para confeitaria, desenvolvido para centralizar operações como produtos, pedidos, clientes, vendas e processos internos. Projeto baseado em uma aplicação real utilizada como base para evolução de um SaaS.",
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
        "Aplicação desenvolvida para o Hackathon ONE G9 Brasil, com foco em soluções financeiras utilizando inteligência artificial. Atuação no desenvolvimento frontend, infraestrutura, arquitetura e deploy na Oracle Cloud.",
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
        "Plataforma central da INFLINT para gerenciamento de projetos, usuários, permissões, processos, finanças e infraestrutura. Base centralizada para organizar e integrar os projetos da empresa.",
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
      subtitle: "Sistema de operação e gestão",
      description:
        "Sistema voltado para a operação da Leoa Conecta, planejado para integração com o INFLINT Core. A plataforma terá estrutura web e futuramente aplicativos para Android e iOS.",
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
        "API REST desenvolvida durante a formação Java, utilizando Spring Boot. Trabalha conceitos de criação de APIs, persistência de dados, autenticação e organização de uma aplicação backend.",
      stack: ["Java 17", "Spring Boot", "PostgreSQL", "Maven"],
      type: "Estudo",
      repoUrl: "https://github.com/alexxnunes",
    },
    {
      id: "controle-acesso",
      title: "Controle de Acesso",
      subtitle: "Aplicação desktop — POO",
      description:
        "Aplicação desktop desenvolvida para gerenciamento de controle de acesso, utilizando interface gráfica e conceitos de orientação a objetos.",
      stack: ["Java", "JavaFX"],
      type: "Estudo",
      repoUrl: "https://github.com/alexxnunes",
    },
    {
      id: "api-cep",
      title: "API de Consulta de CEP",
      subtitle: "Consumo de APIs externas",
      description:
        "Aplicação Java desenvolvida para consulta de endereços através de uma API externa, trabalhando consumo de APIs, requisições HTTP e processamento de JSON.",
      stack: ["Java", "HttpClient", "Gson", "API REST"],
      type: "Estudo",
      repoUrl: "https://github.com/alexxnunes",
    },
  ],
};
