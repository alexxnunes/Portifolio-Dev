<div align="center">

# Alexander Nunes — Portfólio

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://alexxnunes.github.io/alexandernunes-dev/)

</div>

---

## Preview

![Preview do portfólio](https://alexxnunes.github.io/alexandernunes-dev/og-image.svg)

**[Ver portfólio ao vivo →](https://alexxnunes.github.io/alexandernunes-dev/)**

---

## Sobre

Portfólio pessoal com seção sobre mim, stack de tecnologias, fundamentos, trajetória, projetos e contato. Deploy via GitHub Actions.

---

## Stack do Projeto

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

## Como rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/alexxnunes/alexandernunes-dev.git
cd alexandernunes-dev

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173/alexandernunes-dev/`

---

## Comandos disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Build de produção (tsc + vite build) |
| `npm run preview` | Pré-visualização do build |
| `npm run lint` | Lint com oxlint |

---

## Estrutura do Projeto

```
alexandernunes-dev/
├── public/                  # Assets estáticos (favicon, CV, og:image)
├── src/
│   ├── assets/              # Imagens (foto de perfil)
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

## Funcionalidades

- SPA com navegação por âncoras e `scroll-behavior: smooth`
- Animações de entrada com `IntersectionObserver` e delays escalonados
- Skills divididas em grupo principal (Backend/DevOps) e complementar
- Layout responsivo com Tailwind CSS
- Navbar com efeito `backdrop-blur-md` e menu mobile
- Foto com efeito grayscale → color no hover
- Todo conteúdo centralizado em `portfolioData.ts`

---

## Decisões de Arquitetura

- **React + Vite**: Escolhido por build rápido e HMR eficiente. Vite oferece melhor experiência de dev que Webpack para projetos de tamanho moderado.
- **Tailwind CSS 4 via plugin Vite**: Permite styling utilitário sem CSS extra, com tree-shaking automático das classes não utilizadas.
- **Dados centralizados**: Todo o conteúdo textual está em `portfolioData.ts`, facilitando atualizações sem mexer em componentes.
- **Animações com IntersectionObserver**: Preferido sobre bibliotecas de animação por ser mais leve e nativo do browser.
- **GitHub Pages + Actions**: Deploy estático gratuito e automático a cada push na main.

---

## Deploy

O deploy é **automático** via GitHub Actions. A cada push na branch `main`:

1. `npm ci` → instala dependências
2. `npm run lint` → verifica código
3. `npm run build` → build de produção
4. Deploy para GitHub Pages

---

## Licença

Este é um projeto pessoal. Não há licença de uso público.
