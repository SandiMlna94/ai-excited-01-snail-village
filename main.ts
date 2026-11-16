// ai-excited-01 entry (Node 22, standard library only).
// The image lives beside this file as entry.png.b64 — base64 text, so the
// repository stays text-only. The program decodes it and writes the image
// to /output/entry.png. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const encoded = readFileSync(new URL('./entry.png.b64', import.meta.url), 'utf8');
const image = Buffer.from(encoded, 'base64');
writeFileSync(join(outDir, 'entry.png'), image);
