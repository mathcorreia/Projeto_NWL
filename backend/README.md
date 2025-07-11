<div align="center">
  <img src="./web/src/assets/Gemini_Generated_Image_usjnwfusjnwfusjn.png" alt="Banner do Projeto de Programação com Luzes RGB">
  <br />
  <h1 align="center">Awesome Theme Project</h1>
  <p align="center">
    Um tema moderno, responsivo e personalizável construído com Tailwind CSS e cores OKLCH.
  </p>
  <br />
</div>
<div align="center">
  <br />
  <img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/.github/logo-dark.svg" width="200" alt="Logo do Tailwind CSS">
  <br />
  <h1 align="center">Awesome Theme Project</h1>
  <p align="center">
    Um tema moderno, responsivo e personalizável construído com Tailwind CSS e cores OKLCH.
  </p>
  <br />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/CSS-3-blue?logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/PostCSS-DD3A0A?logo=postcss&logoColor=white" alt="PostCSS">
  <img src="https://img.shields.io/badge/Theme-Light%20%26%20Dark-blueviolet" alt="Light & Dark Theme">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License MIT">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
</div>

---

## 📖 Sobre o Projeto

Este projeto é um sistema de design e theming de front-end criado para fornecer uma base visual coesa e moderna para aplicações web. Ele é construído sobre o **Tailwind CSS** e utiliza o espaço de cores **OKLCH** para uma manipulação de cores mais intuitiva e consistente.

A estrutura de theming é inspirada em soluções modernas como a utilizada pelo [shadcn/ui](https://ui.shadcn.com/), permitindo uma personalização profunda através de variáveis CSS para modo claro (light) e escuro (dark).

### ✨ Features

- **🎨 Theming Avançado:** Suporte nativo para modo **Claro** e **Escuro**.
- **🌈 Cores Modernas:** Utiliza `oklch()` para uma paleta de cores mais perceptualmente uniforme e fácil de manipular (Luz, Croma, Matiz).
- **🧩 Baseado em Componentes:** Todas as cores, raios de borda e outras propriedades são definidas com variáveis CSS, facilitando a consistência e a manutenção.
- **🚀 Construído com Tailwind CSS:** Aproveita todo o poder e a flexibilidade do framework utility-first mais popular do mundo.
- **🎬 Animações Prontas:** Inclui `tw-animate-css` para adicionar animações de forma simples.
- **🔧 Altamente Configurável:** Altere facilmente o tema principal modificando algumas variáveis CSS.

---

## 🚀 Começando

Para utilizar este tema em seu projeto, siga os passos abaixo.

### Pré-requisitos

Você precisa ter um ambiente de desenvolvimento com Node.js e um gerenciador de pacotes (npm, yarn, ou pnpm) configurado. O projeto deve estar configurado para usar Tailwind CSS.

### Instalação e Configuração

1.  **Clone o repositório (opcional):**
    ```bash
    git clone [https://github.com/seu-usuario/awesome-theme-project.git](https://github.com/seu-usuario/awesome-theme-project.git)
    ```

2.  **Copie o CSS:**
    Copie o conteúdo do arquivo `globals.css` (o código que você forneceu) para o arquivo CSS principal do seu projeto (geralmente `src/styles/globals.css` ou similar).

3.  **Importe o CSS:**
    Certifique-se de que seu arquivo CSS principal está sendo importado no ponto de entrada da sua aplicação. Por exemplo, em um arquivo `layout.tsx` de um projeto Next.js:
    ```javascript
    import '../styles/globals.css';
    ```

4.  **Instale as dependências do Tailwind:**
    Se ainda não o fez, instale as dependências necessárias.
    ```bash
    npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
    ```
    *Nota: `tw-animate-css` foi assumido pelo nome no import. O pacote oficial é `tailwindcss-animate`.*

5.  **Configure o `tailwind.config.js`:**
    Certifique-se de que seu arquivo de configuração do Tailwind esteja configurado para suportar o theming e os plugins.

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: ["class"], // Habilita o modo escuro baseado em classe
      content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      plugins: [require("tailwindcss-animate")],
    }
    ```

---

## 🎨 Uso e Customização

### Trocando entre Temas (Light/Dark)

O tema é controlado pela presença da classe `.dark` no elemento `<html>` ou `<body>` da sua página. Você pode usar JavaScript para alternar entre os temas.

**Exemplo de um Trocador de Tema em React/Next.js:**

```jsx
"use client" // Se estiver usando Next.js App Router

import { useTheme } from "next-themes"; // Usando a popular biblioteca next-themes
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}
```

### Customizando o Tema

A maneira mais fácil de personalizar o visual é editando as variáveis CSS no seu arquivo `globals.css`.

-   **Alterar Raio da Borda:**
    Modifique o valor de `--radius` na seção `:root`.
    ```css
    :root {
      --radius: 0.75rem; /* Altere este valor */
    }
    ```

-   **Alterar Cores:**
    As cores para os modos claro e escuro estão definidas nos seletores `:root` e `.dark`, respectivamente. Para alterar a cor primária, por exemplo, basta mudar os valores de `oklch()`.

    ```css
    /* Tema Claro */
    :root {
      --primary: oklch(0.45 0.15 250); /* Altere para a sua cor primária */
      --primary-foreground: oklch(0.985 0 0);
    }

    /* Tema Escuro */
    .dark {
      --primary: oklch(0.92 0.004 286.32);
      --primary-foreground: oklch(0.21 0.006 285.885);
    }
    ```

---

## 🤝 Contribuindo

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1.  Faça um Fork do projeto
2.  Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Faça o Commit de suas alterações (`git commit -m 'Add some AmazingFeature'`)
4.  Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5.  Abra um Pull Request

---

## 📜 Licença

Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.

---

## 📧 Contato

Matheus Correia - [Matheus Henrique de Carvalho Correia ](https://www.linkedin.com/in/matheus-henrique-de-carvalho-correia-336224211/) - matheushccorreia0910@gmail.com

Link do Projeto: [https://github.com/mathcorreia/Projeto_NWL](https://github.com/mathcorreia/Projeto_NWL)

<br/>
<div aligin="center">
  <p>Feito com ❤️ e muito café.</p>
</div>