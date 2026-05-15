#!/usr/bin/env node
// Compiles HTML templates from {src}/html/ to {out}/.
//
// Resolves <meta name="partial" content="some/path.html" /> directives
// by loading files relative to {src}/, mirroring the Clojure compiler.
//
// Usage: node scripts/compile-site.js --src <workspace> --out <output-dir>

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "fs";
import { join, relative, dirname } from "path";

function parseArgs() {
  const args = {};
  for (let i = 2; i < process.argv.length; i += 2)
    args[process.argv[i].replace(/^--/, "")] = process.argv[i + 1];
  return args;
}

const { src, out } = parseArgs();
if (!src || !out) {
  console.error("Usage: node scripts/compile-site.js --src <workspace> --out <output-dir>");
  process.exit(1);
}

const htmlDir   = join(src, "html");
const outputDir = out;
const partialRe = /<meta\s+name="partial"\s+content="([^"]+)"\s*\/>/g;

function loadPartial(path) {
  return readFileSync(join(src, path), "utf8");
}

function resolvePartials(html) {
  return html.replace(partialRe, (_, path) => loadPartial(path));
}

function* walkHtml(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* walkHtml(full);
    else if (entry.endsWith(".html")) yield full;
  }
}

for (const file of walkHtml(htmlDir)) {
  const rel = relative(htmlDir, file);
  const out  = join(outputDir, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, resolvePartials(readFileSync(file, "utf8")));
  console.log(`compiled ${file} → ${out}`);
}
