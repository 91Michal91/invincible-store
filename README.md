# Invincible Store

Invincible Store is a full-stack e-commerce project built for the Polish Invincible fan community.

The shop is part of the wider [invinciblepolska.pl](https://invinciblepolska.pl) project. I started it as a real online store rather than a tutorial application, and I am gradually turning the codebase into a reusable foundation for future e-commerce projects.

The current version uses Medusa for the commerce backend and administration panel, Next.js for the storefront, PostgreSQL for data storage and Docker for deployment.

## Why I built it

I wanted to work on a project that goes beyond a simple product catalogue.

Building the store has involved customer accounts, addresses, products, variants, carts, checkout, orders, shipping configuration, deployment and ongoing work on the production server.

It has also given me experience with maintaining a project over time: fixing problems, introducing changes in small steps, creating backups and testing each deployment before making it public.

The long-term goal is to separate the reusable shop logic from the Invincible-specific content so the project can become a practical starting point for other online stores.

## Current features

The project currently includes:

- a responsive Next.js storefront,
- products, categories and collections,
- product variants and inventory,
- customer registration and login,
- customer profiles and saved addresses,
- cart and checkout flows,
- order history and order details,
- Polish customer-facing interface,
- Medusa administration panel,
- PostgreSQL database,
- Docker-based local and production environments,
- project and database backup scripts,
- environment-based shop configuration,
- demo and production modes.

The storefront also contains custom product presentation work, including product image handling and previews for printed clothing variants.

## Project direction

Invincible Store currently serves two purposes.

First, it is the shop connected with the Invincible Polska fan website.

Second, it is becoming a reusable e-commerce template that can later be adapted for other brands and clients without rebuilding the entire technical foundation from scratch.

The reusable parts are intended to include:

- store configuration,
- product and category structure,
- customer accounts,
- checkout,
- order handling,
- deployment setup,
- backups,
- documentation,
- repeatable testing procedures.

Brand-specific content, styling and product data can then be replaced for each new store.

## Technology stack

| Area | Technology |
|---|---|
| Storefront | Next.js, React, TypeScript |
| Commerce backend | Medusa |
| Administration | Medusa Admin |
| Database | PostgreSQL |
| Styling | Tailwind CSS |
| Monorepo | npm workspaces, Turborepo |
| Deployment | Docker, Docker Compose |
| Infrastructure | Linux VPS, reverse proxy, Cloudflare |

## Repository structure

    apps/backend       Medusa backend and administration
    apps/storefront    Next.js customer-facing storefront
    docs               Deployment, security, QA and architecture notes
    scripts            Backup and database restore scripts

## Local setup

### Requirements

- Node.js 20 or newer
- npm
- Docker
- Docker Compose

Clone the repository:

    git clone https://github.com/91Michal91/invincible-store.git
    cd invincible-store

Create the local environment configuration:

    cp .env.example .env

Review the example environment files inside the application directories and provide your own local values.

Install dependencies:

    npm install

Start the development environment:

    npm run dev

By default, the applications use:

- storefront: `http://localhost:8000`
- Medusa backend and admin: `http://localhost:9000`

Exact URLs depend on the local environment configuration.

## Available commands

Start the development environment:

    npm run dev

Build all applications:

    npm run build

Create a project backup:

    npm run backup:project -- backup-name

Create a database backup:

    npm run backup:db -- backup-name

Create both backups:

    npm run backup:all -- backup-name

Database restoration is destructive and should only be used after creating a current backup.

## Configuration and security

Real passwords, API keys and production environment files are not included in the repository.

The repository contains example configuration files showing which variables are required. Anyone using the project must provide their own credentials and infrastructure settings.

Runtime data, database contents and production backups should never be committed to Git.

More detailed notes are available in:

- `docs/SECURITY.md`
- `docs/DEPLOYMENT.md`
- `docs/QA.md`
- `docs/ARCHITECTURE.md`

## Work in progress

This is an active project, not a finished commercial template.

Some parts are already running in production, while others are still being improved or prepared for future integrations. Planned work includes payment integration, courier integration, further storefront customization and continued separation of reusable code from project-specific content.

## Disclaimer

This is an independent fan-made project created for community, educational and portfolio purposes.

It is not affiliated with or endorsed by the owners of the Invincible franchise.

## Author

**Michał Majda**

GitHub: [91Michal91](https://github.com/91Michal91)
