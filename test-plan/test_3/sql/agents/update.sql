-- :params name version tags description icon prompt id
UPDATE agents
SET name        = $1,
    version     = $2,
    tags        = $3::jsonb,
    description = $4,
    icon        = $5,
    prompt      = $6,
    updated     = now()
WHERE id = $7
RETURNING *;
