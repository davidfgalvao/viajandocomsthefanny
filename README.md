# Viajando com Sthefanny

Landing page institucional da agência de viagens **Viajando com Sthefanny**, com foco em conversão via WhatsApp.

## Estrutura do projeto

- `index.html`: estrutura principal da página
- `styles.css`: estilos da landing page
- `script.js`: scripts simples (ano automático no rodapé)
- `public/logo-viajando-com-sthefanny.png`: logo da marca
- `vercel.json`: configuração para deploy na Vercel

## Como editar informações importantes

1. **WhatsApp**:
   - Abra `index.html`
   - Substitua `5500000000000` pelos números reais nos dois links de WhatsApp

2. **Textos da página**:
   - Edite títulos, descrições e depoimentos diretamente em `index.html`

3. **Cores e visual**:
   - Ajuste variáveis no topo do arquivo `styles.css`

## Deploy na Vercel (sem terminal)

1. Acesse [https://vercel.com/new](https://vercel.com/new)
2. Faça login com sua conta
3. Escolha:
   - **Import Git Repository** (recomendado), ou
   - **Upload** desta pasta do projeto
4. Clique em **Deploy**
5. Ao finalizar, a URL `*.vercel.app` será gerada automaticamente

## Deploy com GitHub (recomendado)

1. Suba este projeto para um repositório no GitHub
2. Na Vercel, clique em **Add New Project**
3. Conecte o repositório
4. Clique em **Deploy**

A cada novo commit no GitHub, o site será atualizado automaticamente.
