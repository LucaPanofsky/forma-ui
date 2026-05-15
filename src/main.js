import { PGliteWorker } from "@electric-sql/pglite/worker";

window.PGXQueries.init = async function(config = {}, callback) {
  if (!config.dataDir) throw new Error("PGXQueries.init: config.dataDir is required");

  const db = new PGliteWorker(
    new Worker(new URL("worker.js", import.meta.url), { type: "module" }),
    config
  );

  await db.waitReady;

  window.PGXQueries.db = db;
  window.PGXQueries.execute = function(name, params = {}) {
    const query = window.PGXQueries[name];
    if (!query) throw new Error(`PGXQueries: unknown query "${name}"`);
    const values = query.params.map(p => params[p] ?? null);
    return db.query(query.sql, values);
  };

  if (callback) callback(db);
};
