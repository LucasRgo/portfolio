# Portfolio - Lucas R. Goveia

Portfólio pessoal em React para apresentar projetos, habilidades, certificações e currículo de forma interativa.

## Problema -> Solução -> Resultado

- Problema: recrutadores e clientes não conseguem avaliar rapidamente profundidade técnica e projetos reais.
- Solução: SPA com navegação clara (`Home`, `Projects`, `Resume`), animações e conteúdo bilíngue.
- Resultado: demonstração objetiva de experiência, com acesso rápido a cases, currículo e contato.

## Stack

- Front-end: React 18 + React Router
- Build tooling: Vite 6
- UI/estilo: Bootstrap, React Bootstrap, MUI, Font Awesome, React Icons
- Motion/UX: Framer Motion, AOS, tsParticles
- Documentos: React PDF + pdfjs-dist
- Deploy: build estático + `gh-pages` (domínio configurado via `public/CNAME`)

## Arquitetura

Projeto SPA front-end only.

```text
[Browser]
   |
   v
[React SPA (Vite build)]
   |
   +--> Rotas: /, /projects, /resume
   +--> Assets estáticos (public/)
   +--> PDFs de currículo

Serviços backend: não aplicável
DB: não aplicável
Filas: não aplicável
Webhooks: não aplicável
```

## Como rodar local (copy/paste)

```bash
npm install
npm run dev
```

`docker compose up` e `make dev`: não configurados neste repositório atualmente.

## Trade-offs e decisões

- SPA sem backend: reduz complexidade e custo operacional, mas limita observabilidade e recursos server-side.
- Roteamento client-side com fallback (`* -> Home`) e `404.html` no deploy: melhora compatibilidade em hospedagem estática, mas exige cuidado com deep links.
- Context API para idioma (`LanguageContext`) em vez de i18n completo: implementação simples e rápida, com menor escalabilidade para múltiplos idiomas/formatos avançados.

## Roadmap

- Adicionar testes de interface (React Testing Library) para fluxos críticos.
- Externalizar conteúdo de projetos para JSON/CMS leve para facilitar manutenção.
- Configurar pipeline CI/CD (lint + build + deploy) com validação automática em pull request.
