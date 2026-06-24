# 🍔 The Best Burguer — Landing Page Next.js

Este é o código-fonte da landing page da hamburgueria **The Best Burguer (TBB Hamburgueria Grill)** em Teresópolis, RJ. O projeto foi estruturado com Next.js (Page Router), TypeScript, Tailwind CSS e Framer Motion para micro-animações, totalmente otimizado para SEO técnico e GEO (Generative Engine Optimization).

---

## 📁 Estrutura de Arquivos

```text
website/
├── components/
│   ├── FAQAccordion.tsx     # FAQ Interativo com Framer Motion e tags semânticas
│   ├── Footer.tsx           # Rodapé dinâmico com NAP (Name, Address, Phone)
│   ├── MenuItem.tsx         # Componente reutilizável de itens/combos com imagens lazy-loaded
│   └── Navbar.tsx           # Navbar fixa e drawer mobile responsivo
├── config/
│   └── site.ts              # Variáveis e configurações globais (NAP, WhatsApp, SEO)
├── pages/
│   ├── _app.tsx             # Configuração global de rotas e injeção de CSS
│   ├── _document.tsx        # Pré-carregamento de fontes (Lilita One e Montserrat), lang="pt-BR"
│   └── index.tsx            # Homepage contendo todas as seções (Hero, Combos, Abas, Storytelling, Depoimentos, etc.)
├── styles/
│   └── globals.css          # Variáveis de Design Tokens A6 e resets
├── package.json             # Dependências e scripts
├── postcss.config.js        # Configuração PostCSS
├── tailwind.config.js       # Tokens de cores e fontes estendidos no Tailwind
└── tsconfig.json            # Configuração do compilador TypeScript
```

---

## 🛠️ Tecnologias e Otimizações Utilizadas

1. **Next.js & TypeScript:** Desenvolvimento rápido, tipado e sem erros de tipagem física.
2. **Tailwind CSS & Design Tokens:** Tema estendido para mapear as cores da marca:
   * **Preto Carvão (`#121212`):** Fundo rústico ideal para noites frias.
   * **Amarelo Brasa (`#F5A623`):** Usado para CTAs principais e queijo derretido.
   * **Laranja Fogo (`#E65100`):** Usado para badges e badges de destaque.
   * **Off-White Rústico (`#FAF9F6`):** Papel kraft para textos e parágrafos altamente legíveis.
3. **Framer Motion:** Micro-animações elegantes no menu móvel, abas de cardápio e abertura do FAQAccordion.
4. **SEO Técnico & GEO:**
   * Scripts JSON-LD embutidos para `Restaurant` e `FAQPage`.
   * Tags meta de Open Graph e Twitter completas.
   * Acessibilidade completa: Skip Navigation Link, `aria-label` para links sem texto, contraste de cores e tags semânticas (`main`, `header`, `nav`, `section`, `footer`).
   * Protocolo de carregamento de imagens: LCP do Hero tem prioridade alta (`fetchPriority="high"`), outras imagens usam `loading="lazy"`.
5. **Configuração NAP Centralizada:** Toda a informação comercial pode ser atualizada em um único arquivo: `config/site.ts`.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
Certifique-se de possuir o **Node.js** (versão 18+) e um gerenciador de pacotes instalado (NPM ou Yarn).

### Passo 1: Instalar as dependências
Abra o terminal na pasta do projeto e execute:
```bash
npm install
```

### Passo 2: Executar em Modo de Desenvolvimento
Inicie o servidor local:
```bash
npm run dev
```
O site estará disponível no endereço: `http://localhost:3000`

### Passo 3: Compilar para Produção (Build)
Para gerar uma build otimizada de produção:
```bash
npm run build
npm run start
```
