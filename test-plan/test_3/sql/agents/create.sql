-- :params id name version tags description icon prompt
INSERT INTO agents (id, name, version, tags, description, icon, prompt)
VALUES ($1, $2, $3, $4::jsonb, $5, $6, $7)
RETURNING *;
