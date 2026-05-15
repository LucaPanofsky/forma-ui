# forma-ui

A template for building schema-driven UI applications backed by a PostgreSQL data model.

## The idea

1. **Design your data model in PostgreSQL** — schema and queries are first-class source artifacts, not generated boilerplate.
2. **Design your static routes** — HTML pages live as templates in a workspace folder and are compiled into a flat, serveable site.
3. **Hydrate with whatever you like** — the compiled output is plain HTML. Wire it up with _hyperscript, React, Svelte, HTMX, or anything else. The template does not care.

The result is a clean separation: your data model drives what operations exist, your HTML templates drive what pages exist, and your choice of frontend library drives how the UI behaves. Nothing is coupled.

---

## Architecture

The two compilers are independent. Each takes a `--src <workspace>` root and an `--out <output-dir>`, and reads only the subfolder it cares about:

```
compile-queries --src <workspace> --out <out>
  reads:   workspace/sql/**/*.sql
  writes:  out/js/queries.js

compile-site --src <workspace> --out <out>
  reads:   workspace/html/**/*.html
           workspace/**  (for partial resolution)
  writes:  out/**/*.html  (mirrors html/ structure)

copy-assets --out <out>
  writes:  out/assets/*.wasm  (PGlite WASM files)

esbuild src/worker.js src/main.js
  writes:  out/assets/worker.js
           out/assets/main.js
```

You can point both compilers at the same workspace (if it contains both `sql/` and `html/`) or at separate folders — they do not know about each other. The suggested workspace layout is:

```
workspace/
├── sql/
│   ├── migrations/        # schema — CREATE TABLE, seed data
│   └── {entity}/          # named queries per entity
│       ├── list.sql
│       ├── get.sql
│       ├── create.sql
│       ├── update.sql
│       └── delete.sql
├── html/
│   └── {page}/
│       └── index.html     # page templates
└── partial/
    └── *.html             # reusable fragments (resolved relative to workspace root)
```

The canonical examples of this layout are in `test-plan/` — each subdirectory (`test_1/`, `test_2/`) is a self-contained workspace compiled and verified independently by the test suite.

Serve `out/` with any static file server. No backend required.

---

## SQL compilation

Each `.sql` file in `workspace/sql/` becomes a named query. The key mirrors the file path without the extension:

```
sql/users/create.sql  →  "users/create"
sql/users/list.sql    →  "users/list"
```

Parameters are declared on the first line of the file:

```sql
-- :params id name email
INSERT INTO users (id, name, email)
VALUES ($1, $2, $3)
RETURNING *;
```

Files without a parameter declaration take no arguments.

All queries are compiled into `out/js/queries.js` as `window.PGXQueries` — a plain JSON object loaded as a script tag. No runtime SQL parsing, no ORM.

---

## HTML compilation

Pages live in `workspace/html/`. Shared fragments (head, navigation, scripts) are declared as partials:

```html
<head>
  <meta name="partial" content="partial/head.html" />
</head>
<body>
  ...
  <meta name="partial" content="partial/scripts.html" />
</body>
```

`compile-site` resolves every `<meta name="partial">` directive inline and writes flat `.html` files to the output directory, preserving the folder structure. The compiled pages have no dependencies on the build system at runtime.

---

## Runtime SQL client

`src/main.js` and `src/worker.js` provide the in-browser SQL client. PGlite runs in a Web Worker to keep the main thread free.

**Initialise** once per page load, after running your migrations:

```js
await PGXQueries.init({ dataDir: 'idb://my-app' }, async (db) => {
  await db.exec(PGXQueries['migrations/001_init'].sql);
});
```

**Execute** any named query by key, passing parameters by name:

```js
const list   = await PGXQueries.execute('users/list');
const user   = await PGXQueries.execute('users/get',    { id: '42' });
const result = await PGXQueries.execute('users/create', { id: '42', name: 'Alice', email: 'alice@example.com' });
```

Parameter order in the SQL file does not matter — the client maps names to positional `$1 $2 ...` placeholders automatically.

---

## Getting started

Clone or fork this repository, create your workspace folder, and run the build:

```bash
yarn install
yarn build          # compiles plan/ → public/  (default in package.json)
npx serve public    # serve the output
```

The scripts are not tied to `plan/` — pass any workspace with `--src` and any output directory with `--out`:

```bash
# together, from a single workspace
node scripts/compile-queries.js --src my-workspace --out dist
node scripts/compile-site.js    --src my-workspace --out dist

# independently, from separate folders
node scripts/compile-queries.js --src my-sql   --out dist
node scripts/compile-site.js    --src my-html  --out dist
```

---

## Build scripts

| Command | What it does |
|---|---|
| `yarn build:js` | Bundle `src/worker.js` and `src/main.js` with esbuild |
| `yarn copy-assets` | Copy PGlite WASM files to `out/assets/` |
| `yarn compile-site` | Compile HTML templates (resolve partials) to `out/` |
| `yarn compile-queries` | Compile SQL files to `out/js/queries.js` |
| `yarn build` | Run all of the above |
| `yarn test` | Run Playwright tests |

---

## Backend options

This template is a POC backed by **PGlite** — PostgreSQL compiled to WASM, running entirely in the browser and persisting data in IndexedDB. No server required.

The same SQL-first approach is designed to extend to real backends without changing the data model or the queries:

**PostgREST** — expose a real PostgreSQL database as a REST API and replace the PGlite client with HTTP calls, while keeping the same named query conventions. See [postgrest.org](https://postgrest.org).

**PGlite local-first with sync** — run PGlite in the browser as the local replica and sync it with a real PostgreSQL instance using live queries. PGlite supports this model natively via [ElectricSQL](https://electric-sql.com), enabling offline-capable apps with real-time updates.

The data model you write today is valid in all three cases.

---

## Testing

Tests live in `tests/` and run against `test-public/` — a pre-compiled output used as a stable fixture. The test workspace is in `test-plan/`.

```bash
yarn test
```
