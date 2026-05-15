-- :params id
SELECT id, name, version, tags, description, icon, prompt, created, updated
FROM agents
WHERE id = $1;
