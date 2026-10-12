# Commerce Bank - Digital Banking Frontend

A frontend prototype of a digital banking website, built with React, TypeScript and Vite. It covers the public landing page, banking service pages and a signed-in customer area. All content and account data is static sample data in the components; the app has no backend or API calls.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page: hero section with a login card, a help-topic dropdown, a new-customer registration dialog, and a services overview |
| `/dashboard` | Customer dashboard: quick actions, quick transfer, recent transactions and activity |
| `/accounts` | Account management, transaction history and account statements |
| `/payments` | Payments and transfers: external and scheduled transfers, bill payments and auto-pay, beneficiaries |
| `/profile` | Profile information, profile photo, contact details, account and notification settings |
| `/support` | Customer support and support tickets |
| `/services/*` | Service pages: banking cards, mortgages and loans, investment services, business banking, wealth management, digital security |

The login button goes straight to `/dashboard`. The registration form only logs its data to the browser console, because there is no authentication or persistence.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS and shadcn/ui (Radix UI) components
- React Router
- lucide-react icons

## Getting Started

Prerequisites: Node.js and npm.

```bash
npm install
npm run dev
```

The dev server runs on port 8080 (configured in `vite.config.ts`).

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

`run-app.sh` installs dependencies, builds the app and starts the dev server in one step.

## Project Structure

```
src/
  components/        Header, Footer, HeroSection, ServicesSection
  components/ui/     shadcn/ui components
  pages/             Dashboard, Accounts, Payments, Profile, Support, NotFound
  pages/services/    Service detail pages
  assets/            Service images
```

## Project Documents

- `Project charter doc.docx`: project charter (purpose, goals, scope, milestones)
- `project planning.docx`: project planning document
- `doc-architecture.pdf`: architecture document
