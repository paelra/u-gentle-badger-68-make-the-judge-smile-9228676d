import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
const line = "At 7:12 this morning, Mrs. Alvarez from 3B knocked with soup for my sick dog—then sat on the floor in her church dress, hand-feeding him noodles until his tail thumped.";
const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line + "\n", "utf8");
console.log(`wrote ${line.length} chars to ${out}`);
