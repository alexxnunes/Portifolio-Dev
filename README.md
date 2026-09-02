<div align="center">

# Portfólio Dev — Alexander Nunes

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://alexxnunes.github.io/Portifolio-Dev/)
[![Portfólio ao vivo](https://img.shields.io/badge/Portfólio_ao_vivo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://alexxnunes.github.io/Portifolio-Dev/)

</div>

---

## 📖 Sobre

Site de portfólio pessoal desenvolvido como vitrine profissional. Apresenta-seção sobre mim, stack de tecnologias com hierarquia visual, trajetória, projetos e contato. Deploy automatizado via GitHub Actions.

---

## 🧰 Stack do Projeto

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 19 |
| Linguagem | TypeScript 6 |
| Bundler | Vite 8 |
| CSS | Tailwind CSS 4 (via plugin Vite) |
| Ícones | lucide-react, react-icons |
| Utilitários | clsx + tailwind-merge |
| Linter | oxlint |
| CI/CD | GitHub Actions → GitHub Pages |

---

## 🚀 Como rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/alexxnunes/Portifolio-Dev.git
cd Portifolio-Dev

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173/Portifolio-Dev/`

---

## 📦 Comandos disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Build de produção (tsc + vite build) |
| `npm run preview` | Pré-visualização do build |
| `npm run lint` | Lint com oxlint |

---

## 🏗️ Estrutura do Projeto

```
Portifolio-Dev/
├── public/                  # Assets estáticos (favicon, icons)
├── src/
│   ├── assets/              # Imagens (foto de perfil, hero)
│   ├── components/          # Componentes React
│   │   ├── Navbar.tsx       # Menu de navegação fixo
│   │   ├── Hero.tsx         # Seção principal (landing)
│   │   ├── About.tsx        # Sobre mim
│   │   ├── Skills.tsx       # Habilidades & Tecnologias
│   │   ├── Fundamentals.tsx # Fundamentos e Boas Práticas
│   │   ├── Timeline.tsx     # Trajetória profissional
│   │   ├── Projects.tsx     # Projetos em destaque
│   │   ├── Contact.tsx      # Contato e footer
│   │   ├── Reveal.tsx       # Wrapper de animação scroll
│   │   └── icons.tsx        # Ícones SVG customizados
│   ├── data/
│   │   └── portfolioData.ts # Dados centralizados do portfólio
│   ├── hooks/
│   │   └── useReveal.ts     # Hook de IntersectionObserver
│   ├── lib/
│   │   ├── cn.ts            # Utilitário clsx + tailwind-merge
│   │   └── techIcons.ts     # Mapeamento de ícones por tecnologia
│   ├── App.tsx              # Componente raiz
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais (Tailwind)
├── .github/workflows/
│   └── deploy.yml           # Pipeline de deploy automático
├── index.html
├── vite.config.ts
└── package.json
```

---

## ✨ Funcionalidades

- **SPA scroll** — Navegação por âncoras com `scroll-behavior: smooth`
- **Animações de entrada** — `IntersectionObserver` com `Reveal` wrapper e delays escalonados
- **Hierarquia visual** — Skills divididas em grupo principal (Backend/DevOps) e complementar
- **Design responsivo** — Layout adaptativo com Tailwind CSS
- **Navbar glass-morphism** — Efeito `backdrop-blur-md` com menu mobile
- **Foto interativa** — Efeito grayscale → color on hover
- **Dados centralizados** — Todo conteúdo em `portfolioData.ts`, fácil de atualizar

---

## 🚀 Deploy

O deploy é **automático** via GitHub Actions. A cada push na branch `main`:

1. `npm ci` → instala dependências
2. `npm run build` → build de produção
3. Deploy para GitHub Pages

---

## 📄 Licença

Este é um projeto pessoal. Não há licença de uso público.

