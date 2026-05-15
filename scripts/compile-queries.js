#!/usr/bin/env node
// Compiles SQL files from {src}/sql/ into {out}/js/queries.js.
//
// Each .sql file may declare its parameters on the first line:
//   -- :params name description body
//
// Keys mirror the file path under sql/, without the extension:
//   agents/create.sql → "agents/create"
//
// Usage: node scripts/compile-queries.js --src <workspace> --out <output-dir>

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
  console.error("Usage: node scripts/compile-queries.js --src <workspace> --out <output-dir>");
  process.exit(1);
}

const sqlDir  = join(src, "sql");
const outFile = join(out, "js", "queries.js");
const paramsRe = /^--\s*:params\s+(.+)$/;

function parseSql(content) {
  const lines = content.split("\n");
  const match = paramsRe.exec(lines[0]);
  if (match) {
    return {
      params: match[1].trim().split(/\s+/),
      sql: lines.slice(1).join("\n").trim(),
    };
  }
  return { params: [], sql: content.trim() };
}

function* walkSql(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* walkSql(full);
    else if (entry.endsWith(".sql")) yield full;
  }
}

const queries = {};
for (const file of walkSql(sqlDir)) {
  const rel = relative(sqlDir, file);
  const key = rel.replace(/\.sql$/, "");
  queries[key] = parseSql(readFileSync(file, "utf8"));
  console.log(`compiled ${rel} → ${key}`);
}

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, `window.PGXQueries = ${JSON.stringify(queries, null, 2)};\n`);
console.log(`written ${outFile}`);
