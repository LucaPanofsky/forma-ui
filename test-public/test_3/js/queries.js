window.PGXQueries = {
  "agents/create": {
    "params": [
      "id",
      "name",
      "version",
      "tags",
      "description",
      "icon",
      "prompt"
    ],
    "sql": "INSERT INTO agents (id, name, version, tags, description, icon, prompt)\nVALUES ($1, $2, $3, $4::jsonb, $5, $6, $7)\nRETURNING *;"
  },
  "agents/delete": {
    "params": [
      "id"
    ],
    "sql": "DELETE FROM agents WHERE id = $1;"
  },
  "agents/get": {
    "params": [
      "id"
    ],
    "sql": "SELECT id, name, version, tags, description, icon, prompt, created, updated\nFROM agents\nWHERE id = $1;"
  },
  "agents/list": {
    "params": [],
    "sql": "SELECT id, name, version, tags, description, icon, created, updated\nFROM agents\nORDER BY name ASC;"
  },
  "agents/update": {
    "params": [
      "name",
      "version",
      "tags",
      "description",
      "icon",
      "prompt",
      "id"
    ],
    "sql": "UPDATE agents\nSET name        = $1,\n    version     = $2,\n    tags        = $3::jsonb,\n    description = $4,\n    icon        = $5,\n    prompt      = $6,\n    updated     = now()\nWHERE id = $7\nRETURNING *;"
  },
  "migrations/001_init": {
    "params": [],
    "sql": "DROP TABLE IF EXISTS agents CASCADE;\n\nCREATE TABLE agents (\n  id          TEXT PRIMARY KEY,\n  name        TEXT NOT NULL,\n  version     TEXT NOT NULL DEFAULT '1.0.0',\n  tags        JSONB NOT NULL DEFAULT '[]',\n  created     TIMESTAMPTZ NOT NULL DEFAULT now(),\n  updated     TIMESTAMPTZ NOT NULL DEFAULT now(),\n  description TEXT NOT NULL DEFAULT '',\n  icon        TEXT NOT NULL DEFAULT 'psychology',\n  prompt      TEXT NOT NULL DEFAULT ''\n);\n\nINSERT INTO agents (id, name, version, tags, description, icon, prompt) VALUES\n  ('agt-001', 'Scout',    '1.0.0', '[\"reasoning\",\"exploration\"]', 'Explores and maps uncertainty.', 'psychology', ''),\n  ('agt-002', 'Analyst',  '1.0.0', '[\"analysis\",\"synthesis\"]',    'Synthesises patterns into insight.', 'insights', '');"
  }
};
