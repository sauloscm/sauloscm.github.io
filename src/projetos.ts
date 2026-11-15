import { getCollection } from 'astro:content';

// Rascunhos aparecem no dev e somem no build final.
export async function listarProjetos() {
  const todos = await getCollection('projetos', (p) => import.meta.env.DEV || !p.data.rascunho);
  return todos.sort((a, b) => a.data.ordem - b.data.ordem);
}
