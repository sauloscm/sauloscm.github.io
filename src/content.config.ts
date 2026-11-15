import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projetos = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projetos' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(), // uma frase, aparece no card
    contexto: z.string(), // ex.: "Estágio — Virtus Consultoria"
    periodo: z.string(),
    papel: z.string(), // o que VOCÊ fez (solo, em equipe...)
    stack: z.array(z.string()),
    destaque: z.boolean().default(false), // aparece na página inicial
    ordem: z.number().default(99),
    codigo: z.enum(['publico', 'privado']).default('privado'),
    capa: z.string().optional(), // ex.: /projetos/mcp/capa.png
    links: z
      .object({ demo: z.string().optional(), repo: z.string().optional(), video: z.string().optional() })
      .default({}),
    rascunho: z.boolean().default(false), // true = não aparece no build final
  }),
});

export const collections = { projetos };
