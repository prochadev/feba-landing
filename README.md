# LIVA Landing page - Next.js

## Como rodar

1. Instale dependências:
   ```
   npm install
   ```
2. Rode em dev:
   ```
   npm run dev
   # abre http://localhost:3000
   ```

## O que está incluído
- Componentes: Header, Hero (carousel placeholder), About, ContactForm (simula envio), PropertiesGrid, Footer.
- Mobile-first CSS em styles/globals.css
- Imagens em /public (extraidas do Figma)

## Observações
- O formulário faz um `fetch` para `/api/contact` que está mockado no frontend (não existe endpoint real).
