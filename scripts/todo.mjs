// Lista todos os <Todo> e comentários TODO pendentes no site: `npm run todo`
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const raiz = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const pastas = ['src'];
let total = 0;

function varrer(dir) {
  for (const nome of readdirSync(dir)) {
    const caminho = join(dir, nome);
    if (statSync(caminho).isDirectory()) varrer(caminho);
    else if (/\.(mdx|astro|ts)$/.test(nome) && !caminho.includes('Todo.astro')) {
      readFileSync(caminho, 'utf8').split('\n').forEach((linha, i) => {
        const m = linha.match(/<Todo>(.*?)<\/Todo>|TODO:?\s*(.*)/);
        if (m) {
          total++;
          console.log(`${relative(raiz, caminho)}:${i + 1}  ${(m[1] ?? m[2]).trim()}`);
        }
      });
    }
  }
}

pastas.forEach((p) => varrer(join(raiz, p)));
console.log(`\n${total} pendências`);
