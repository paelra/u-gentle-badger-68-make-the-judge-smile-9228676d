// A single good moment, saved to disk so the judge can read it.
// I keep the wording in one small helper so the rest of the
// program only has to worry about where the file goes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

function entryText(): string {
  return "At 7:12 this morning, Mrs. Alvarez from 3B knocked with soup for my sick dog—then sat on the floor in her church dress, hand-feeding him noodles until his tail thumped.";
}
function main(): void {
  const targetPath = "/output/entry.txt";
  const message = entryText();

  // The output folder may not exist on a fresh run, so create
  // it (and any parents) before attempting the write.
  mkdirSync(dirname(targetPath), { recursive: true });
  writeFileSync(targetPath, message + "\n", "utf8");

  console.log(`wrote ${message.length} chars to ${targetPath}`);
}

main();
