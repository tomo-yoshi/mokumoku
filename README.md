# Vercel + GraphQL + Prisma
## Tips and resources

### Resources
- [Set up a free PostgreSQL database on Supabase to use with Prisma](https://dev.to/prisma/set-up-a-free-postgresql-database-on-supabase-to-use-with-prisma-3pk6)

*...when deploying your app, you'll use the pooled connection URL. and add the ?pgbouncer=true flag to the PostgreSQL connection URL.*

### Official Doc of Prisma
- [Quickstart](https://www.prisma.io/docs/getting-started/quickstart)

### Official Doc of Vercel
- [Step 3. Create your database schema with Prisma](https://vercel.com/guides/nextjs-prisma-postgres#step-3.-create-your-database-schema-with-prisma)

You should run `npx prisma db push` instead of `npx prisma migrate dev --name init` to make tables in DB

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.