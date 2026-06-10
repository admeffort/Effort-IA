# CopyAI PMES

Aplicação de automação inteligente com IA para PMES (Pequenas e Médias Empresas).

## 🚀 Stack Tecnológico

### Frontend
- **Vite** - Build tool rápido
- **React 18** - UI library
- **Clerk** - Autenticação
- **React Router** - Roteamento
- **Axios** - HTTP client

### Backend
- **Express.js** - Web framework
- **Node.js** - Runtime
- **Anthropic Claude** - IA para geração de conteúdo
- **Stripe** - Processamento de pagamentos
- **Supabase** - Database PostgreSQL

## 📋 Pré-requisitos

- Node.js 16+
- npm ou yarn
- Contas criadas em:
  - [Clerk](https://clerk.com) - Autenticação
  - [Anthropic](https://console.anthropic.com) - API Keys
  - [Stripe](https://stripe.com) - Chaves API
  - [Supabase](https://supabase.com) - Database

## 🛠️ Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/admeffort/Effort-IA.git
cd Effort-IA
```

### 2. Configure variáveis de ambiente

**Frontend (.env)**
```bash
cp .env.example .env
```
Edite `.env` com suas credenciais do Clerk:
```
VITE_CLERK_PUBLISHABLE_KEY=seu_clerk_key
VITE_API_URL=http://localhost:3001
```

**Backend (backend/.env)**
```bash
cd backend
cp .env.example .env
```
Edite `backend/.env` com suas credenciais:
```
PORT=3001
CLERK_SECRET_KEY=seu_secret
ANTHROPIC_API_KEY=seu_key
STRIPE_SECRET_KEY=seu_stripe_key
SUPABASE_URL=sua_url
SUPABASE_ANON_KEY=sua_key
```

### 3. Instale dependências

**Frontend**
```bash
npm install
```

**Backend**
```bash
cd backend
npm install
```

## 🎯 Executar localmente

### Opção 1: Dois terminais (recomendado)

Terminal 1 - Frontend:
```bash
npm run dev
# Acesse http://localhost:5173
```

Terminal 2 - Backend:
```bash
cd backend
npm run dev
# Backend rodando em http://localhost:3001
```

### Opção 2: Um terminal (com concurrently)
```bash
npm install -D concurrently
npm start
```

## 📁 Estrutura do Projeto

```
.
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Dashboard.jsx
│   └── styles/
│       ├── Home.css
│       └── Dashboard.css
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── vite.config.js
├── package.json
└── README.md
```

## 🔑 Configurações Importantes

### Clerk Authentication
1. Crie uma aplicação em https://dashboard.clerk.com
2. Copie a `Publishable Key`
3. Cole em `VITE_CLERK_PUBLISHABLE_KEY` no `.env`

### Anthropic API
1. Crie uma API key em https://console.anthropic.com
2. Cole em `ANTHROPIC_API_KEY` no `backend/.env`

### Stripe
1. Obtenha as chaves em https://dashboard.stripe.com
2. Use as keys de teste primeiro

### Supabase
1. Crie um projeto em https://supabase.com
2. Copie a URL e anon key
3. Configure no `backend/.env`

## 📝 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|------------|
| GET | `/health` | Verificar status |
| POST | `/api/generate` | Gerar conteúdo com IA |
| POST | `/api/create-payment-intent` | Criar pagamento Stripe |
| GET | `/api/data` | Buscar dados do Supabase |

## 🚀 Deploy

### Frontend (Vercel/Netlify)
```bash
npm run build
# Conectar repositório GitHub
```

### Backend (Render/Railway)
```bash
cd backend
# Conectar repositório GitHub
# Configurar variáveis de ambiente no painel
```

## 📖 Documentação

- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Clerk Docs](https://clerk.com/docs)
- [Anthropic API](https://docs.anthropic.com)
- [Stripe API](https://stripe.com/docs/api)
- [Supabase Docs](https://supabase.com/docs)

## 📄 Licença

MIT

## 👤 Autor

[@admeffort](https://github.com/admeffort)
