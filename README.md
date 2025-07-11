# NLW Agents - Q&A com IA 🤖

![Badge de Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Badge de Licença](https://img.shields.io/badge/license-MIT-green)

Este projeto é uma aplicação web de Perguntas e Respostas (Q&A) onde os usuários podem entrar em salas temáticas, fazer perguntas e receber respostas geradas por Inteligência Artificial através da API do Gemini.

Este repositório foi desenvolvido durante a **Next Level Week (NLW) Agents** da [Rocketseat](https://www.rocketseat.com.br/).

---

## ✨ Funcionalidades Principais

-   **Criação de Salas:** Os usuários podem criar salas com temas específicos (ex: "React", "Culinária Japonesa").
-   **Sistema de Perguntas:** Dentro de uma sala, é possível enviar perguntas.
-   **Respostas com IA:** O backend utiliza a API do Google Gemini para gerar respostas inteligentes e contextuais, baseadas no tema da sala.
-   **Listagem e Visualização:** Interface limpa para visualizar salas existentes e o histórico de perguntas e respostas.

---

## 🚀 Tecnologias Utilizadas

Este projeto é um monorepo dividido em `backend` e `frontend`.

### **Backend**

| Tecnologia | Descrição |
| :--- | :--- |
| **Node.js** | Ambiente de execução JavaScript. |
| **Fastify** | Framework web focado em performance e baixo overhead. |
| **Prisma** | ORM para interação com o banco de dados. |
| **Zod** | Biblioteca para validação de esquemas e tipos. |
| **Google Gemini**| API de Inteligência Artificial para geração das respostas. |
| **PostgreSQL**| Banco de dados relacional (utilizado com Docker). |
| **TypeScript**| Superset do JavaScript que adiciona tipagem estática. |

### **Frontend**

| Tecnologia | Descrição |
| :--- | :--- |
| **React** | Biblioteca para construção de interfaces de usuário. |
| **Vite** | Ferramenta de build extremamente rápida para o frontend. |
| **TypeScript** | Garante a tipagem e a segurança do código. |
| **Tailwind CSS** | Framework CSS utility-first para estilização rápida. |
| **TanStack Query**| Gerenciamento de estado do servidor, cache e fetching de dados. |
| **React Hook Form**| Gerenciamento de formulários de forma performática. |
| **Axios** | Cliente HTTP para fazer requisições ao backend. |

---

## 🏁 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar a aplicação localmente.

### **Pré-requisitos**

-   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
-   [Docker](https://www.docker.com/products/docker-desktop/) e Docker Compose
-   Um editor de código, como o [VS Code](https://code.visualstudio.com/)
-   Uma chave de API do **Google Gemini** (obtenha no [Google AI Studio](https://aistudio.google.com/))

### **1. Configurando o Backend**

```bash
# Clone o repositório (se ainda não o fez)
# git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
# cd seu-repositorio

# Navegue até a pasta do backend
cd backend

# Inicie o container do PostgreSQL com Docker
docker-compose up -d

# Instale as dependências
npm install

# Crie o arquivo de variáveis de ambiente
# (renomeie .env.example para .env se houver, ou crie um novo)
touch .env

```

Adicione as seguintes variáveis ao arquivo `.env` que você acabou de criar:

```env
# backend/.env
DATABASE_URL="postgresql://docker:docker@localhost:5432/agents?schema=public"
GOOGLE_API_KEY="sua_chave_secreta_do_gemini_aqui"
```

Continue com os comandos no terminal:

```bash
# Execute as migrações do Prisma para criar as tabelas no banco
npx prisma migrate dev

# (Opcional) Execute o seed para popular o banco com dados iniciais
npx prisma db seed

# Inicie o servidor do backend
npm run dev
```

O servidor backend estará rodando em `http://localhost:3333`.

### **2. Configurando o Frontend**

Abra um **novo terminal** e navegue até a pasta do frontend.

```bash
# A partir da raiz do projeto, navegue até a pasta do frontend
cd frontend/web

# Instale as dependências
npm install

# Inicie a aplicação frontend
npm run dev
```

A aplicação frontend estará acessível em `http://localhost:5173` (ou outra porta indicada no terminal).

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
