#!/usr/bin/env node
// Copies PGlite WASM assets and vendored scripts to {out}/assets/.
//
// Usage: node scripts/copy-assets.js --out <output-dir>

import { copyFileSync, mkdirSync } from "fs";
import { join } from "path";

function parseArgs() {
  const args = {};
  for (let i = 2; i < process.argv.length; i += 2)
    args[process.argv[i].replace(/^--/, "")] = process.argv[i + 1];
  return args;
}

const { out } = parseArgs();
if (!out) {
  console.error("Usage: node scripts/copy-assets.js --out <output-dir>");
  process.exit(1);
}

const outAssets = join(out, "assets");
mkdirSync(outAssets, { recursive: true });

const assets = [
  "node_modules/@electric-sql/pglite/dist/pglite.wasm",
  "node_modules/@electric-sql/pglite/dist/pglite.data",
  "node_modules/@electric-sql/pglite/dist/initdb.wasm",
  "node_modules/@electric-sql/pglite/dist/initdb.js",
];

for (const src of assets) {
  const filename = src.split("/").pop();
  const dest = join(outAssets, filename);
  copyFileSync(src, dest);
  console.log(`copied ${src} → ${dest}`);
}
