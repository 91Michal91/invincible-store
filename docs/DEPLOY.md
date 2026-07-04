# Deploy

Docelowy deploy produkcyjny:

- Docker,
- PostgreSQL,
- Redis,
- Medusa Backend,
- Next.js Storefront,
- Caddy,
- Cloudflare.

## Docelowe domeny dla Invincible Polska

- sklep.invinciblepolska.pl → Storefront,
- medusa.invinciblepolska.pl → Medusa Backend / Admin.

## Docelowe kontenery

- invincible-shop-storefront,
- invincible-shop-backend,
- invincible-shop-postgres,
- invincible-shop-redis.

## Ważne

Na produkcję wdrażamy dopiero wtedy, gdy lokalnie działa:

- panel admina,
- produkty,
- stock,
- koszyk,
- checkout,
- zamówienie testowe,
- płatność testowa,
- backup.
