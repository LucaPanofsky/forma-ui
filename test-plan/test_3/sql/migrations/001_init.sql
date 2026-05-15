DROP TABLE IF EXISTS agents CASCADE;

CREATE TABLE agents (
  id          TEXT PRIMARY KEY,
  name        TEXT NOT NULL,
  version     TEXT NOT NULL DEFAULT '1.0.0',
  tags        JSONB NOT NULL DEFAULT '[]',
  created     TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated     TIMESTAMPTZ NOT NULL DEFAULT now(),
  description TEXT NOT NULL DEFAULT '',
  icon        TEXT NOT NULL DEFAULT 'psychology',
  prompt      TEXT NOT NULL DEFAULT ''
);

INSERT INTO agents (id, name, version, tags, description, icon, prompt) VALUES
  ('agt-001', 'Scout',    '1.0.0', '["reasoning","exploration"]', 'Explores and maps uncertainty.', 'psychology', ''),
  ('agt-002', 'Analyst',  '1.0.0', '["analysis","synthesis"]',    'Synthesises patterns into insight.', 'insights', '');
