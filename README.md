# Portfólio — Saulo Maranhão

Site estático em **Astro + Tailwind + MDX**. Cada projeto é um arquivo `.mdx`.

## Comandos

```bash
npm run dev      # http://localhost:4321 (mostra os blocos TODO em amarelo)
npm run build    # gera dist/ (os TODOs somem)
npm run preview  # testa o build
npm run todo     # lista tudo que falta preencher
```

## Onde mexer

| O quê | Arquivo |
|---|---|
| Nome, frase, e-mail, GitHub, LinkedIn | `src/site.ts` |
| Projetos (texto) | `src/content/projetos/*.mdx` |
| Imagens dos projetos | `public/projetos/<projeto>/` |
| Currículo em PDF | `public/curriculo.pdf` |
| Página Sobre | `src/pages/sobre.astro` |
| Cores e fontes | `src/styles/global.css` |

### Novo projeto

Copie um `.mdx` existente e ajuste o cabeçalho:

- `destaque: true` faz o projeto aparecer na página inicial.
- `ordem` define a posição na lista.
- `rascunho: true` esconde o projeto do site publicado.
- `capa: '/projetos/<projeto>/capa.png'` define a imagem do card.

No texto, use `<Figura src="/projetos/x/tela.png" legenda="..." />` para imagens e GIFs, e `<Todo>...</Todo>` para lembretes.

## Roteiro do fim de semana

**Sábado**
- [x] Autorização da Virtus e do grupo do PET para mostrar o trabalho
- [ ] Preencher `src/site.ts` (LinkedIn) e escrever o texto da página Sobre
- [ ] Projeto MCP: gravar o GIF da pergunta → SQL → resposta e completar os TODOs
- [ ] Publicar na Vercel (importar o repositório; o Astro é detectado sozinho) e trocar `site` em `astro.config.mjs`

**Domingo**
- [ ] Capturas de tela e números de resultado: Central, Oluasin e Neolis
- [ ] Capas dos cards (1280×720)
- [ ] `npm run todo` até zerar e `npm run build` sem erros
- [ ] Link do portfólio no currículo e no LinkedIn

**Cuidados com as imagens:** usar só dados fictícios ou de demonstração. Nada de nomes de clientes, CNPJ, CPF ou dados de pacientes. Nunca publicar código da empresa.

**Gravar GIF no Windows:** ScreenToGif (gratuito). Ou grave em MP4 com Win+Alt+R e use `<video>`.
