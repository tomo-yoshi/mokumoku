# MokuMoku Project
## Prerequisite
- node version - >=16.17.0
- `yarn` command

## Branching Strategy
This repository has adopted customized [Git flow](https://nvie.com/posts/a-successful-git-branching-model/). Our team does not use *release(staging) branch* at this point. Instead, *bugfix beanch* is used to fix bugs on the develop branch.

  ### Main branches
  - main

    The main branch is a production branch as well. A most stable version of the code is stored on the branch. In addition, the branch is connected to a deployment pipeline of [Vercel](https://vercel.com/). Commits on this branch will be released as a production.

  - develop

    The develop branch is a default branch for developers to work on. Supporting branches, such as *feature* and *bugfix*, should be created from this branch.

  ### Supporting branches
  - feature

    feature branches are used to implement new features. When a developer develops a new feature, they should create a new branch with "feature-" prefix on its name from the develop branch. **One feature branch should be respnsible for only one feature.** A new branch should be created when implementing another feature to make peer-review and testing easy.

  - bugfix

    bugfix branches are used to fix bugs on the develop branch. When a developer fixes a bug, they should create a new branch with "bugfix-" prefix on its name from the develop branch. **One bugfix branch should be respnsible for only one bugfix.** A new branch should be created when fixing another issues to make peer-review and testing easy.

    However, **in the case when several bugs are fixed in a same file at the same time, several issues may be fixed on a same bugfix branch.**

  - hotfix

    hotfix branches are used to fix bugs on the main branch. When a developer fixes a bug, they should create a new branch with "hotfix-" prefix on its name from the main branch. **One hotfix branch should be respnsible for only one issue.** And then, **the branch should be merged to both main and develop.**

  ### Git workflow

  #### Implement a new feature
  ##### Start working
  1. Go to develop branch in your local
  2. Pull the latest version of the code
  3. Create a new feature branch from develop branch
  ```
  git checkout develop
  git pull origin develop
  git checkout -b feature-example
  ```
  #####  Push commits of a feature branch to remote repository
  1. See changed files
  2. See differences of files
  3. Add your changes to stage
  4. Commit the changes
  5. Push your commit to remote repo
  ```
  git status 
  git diff <filename>
  git add .
  git commit -m "one line summary of your commit"
  git push origin feature-example
  ```

  #### Merge feature branch to develop branch
  ##### Create Pull Request
  1. Leave a comment to explan your commits
  2. Set at least one reviewer among team members except for yourself
  3. Select yourself as an assignee
  4. Confirm all checks have passed
  5. Ask the reviewer to review the PR
  
  Wait for the reviewer's feedback

  6. Merge the feature branch to develop branch with "Create a merge commit" or "Squash and merge"
  7. Delete the feature branch if it is no longer needed
  
  Fix a conflict if it occurs.

  #####  Fix conflicts at local
  1. Confirm the branch is clean
  2. Go to a feature branch
  3. Pull remote develop branch
  4. Fix conflicts
  5. Add your changes to stage
  6. Commit the changes
  7. Push your commit to remote repo
  ```
  git status
  git checkout develop
  git pull origin develop
  git checkout featurre-example
  git merge develop

  <FIX CONFLICTS IN FILES>

  git add .
  git commit -m "fix conflicts in xxx file at the local repo"
  git push origin feature-example
  ```
  Or you will be able to fix conflicts on GitHub console

  ##### Review PR
  1. Click `Visit Preview` to see a preview page
  2. Click the `Files changed` tab
  3. Confirm updates
  4. Click the `Review changes` button
  5. If it tooks good

  a. Leave a comment(e.g. LGTM)

  b. Select `Approve`

  c. Click `Submit review`

  5. If there is something to fix

  a. Leave a comment about an issue you found

  b. Select `Request changes`

  c. Click `Submit review`

  6. Tell your review result to an asignee

  ##### Resolve an issue reported by Peer Review
  1. Work on your local to fix an issue on the same branch
  2. Push your code to the remote repo
  3. Change the status of comments of the review to `resolved`
  4. Ask the reviewer to review your commit again
  

## CI/CD
### CircleCI
#### Unit test
Every commit triggers unit tests on GitHub. The tests are running on CircleCI.

### Vercel
#### Deployment
The main branch is connected to Vercel. Therefore, the main branch is always synchronized to production.

1. Create PR from `develop` to `main`
2. See a Preview page
3. Confirm `All checks have passed`
4. Confirm there are no conflicts
5. Click the `Squash and merge` button

---

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