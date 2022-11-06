<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/TOMO-YOSHI/mokumoku">
    <img src="assets/images/NicePng_github-icon-png_1787337.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">MokuMoku</h3>

  <p align="center">
    This project is aming to make a web platform to organize events.
    <br />
    <a href=/https://github.com/TOMO-YOSHI/mokumoku"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/TOMO-YOSHI/mokumoku">View Demo</a>
    ·
    <a href="https://github.com/TOMO-YOSHI/mokumoku/issues">Report Bug</a>
    ·
    <a href="https://github.com/TOMO-YOSHI/mokumoku/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#branching-strategy">Branching Strategy</a>
      <ul>
        <li><a href="#main-branches">Main branches</a></li>
        <li><a href="#supporting-branches">Supporting branches</a></li>
        <li><a href="#git-workflow">Git workflow</a></li>
      </ul>
    </li>
    <li>
      <a href="#cicd">CI/CD</a>
      <ul>
        <li><a href="#circleci">CircleCI</a></li>
        <li><a href="#vercel">Vercel</a></li>
      </ul>
    </li>
    <li>
      <a href="#codegen">Codegen</a>
      <ul>
        <li><a href="#backend-workflow">Backend workflow</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- node version - >=16.17.0
- `yarn` command

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
  Once you have npm installed you can run the following both to install and upgrade Yarn:
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo and enter the directory
   ```sh
   git clone https://github.com/TOMO-YOSHI/mokumoku.git
   cd mokumoku
   ```
2. Install packages
   ```sh
   yarn install
   ```
3. Run DB server by docker-compose
   ```sh
   docker-compose up
   ```
4. Make `.env` file and add `DATABASE_URL` var
   ```sh
   touch .env && echo 'DATABASE_URL="postgresql://test-user:test-password@localhost:5433"' >> .env
   ```
5. Set up DB schema
   ```sh
   npx prisma migrate dev --name init
   ```
6. Insert test data into DB
   ```sh
   npx ts-node ./src/prisma/seed.ts
   ```
7. Run prisma studio to see DB on browser
   ```sh
   npx prisma studio
   ```
   Open `http://localhost:5555` on your browser and confirm the DB is running and the test data was successfully inserted.

8. Run Next.js in dev-mode
   ```sh
   yarn dev
   ```
   - Open `http://localhost:3000/` for front-end
   - Open `http://localhost:3000/api/graphql` for back-end

9. Done 🚀🚀🚀

    You can start browsing the project in your local environment.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


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

    bugfix branches are used to fix bugs on the develop branch. When a developer fixes a bug, they should create a new branch with "bugfix-" prefix on its name from the develop branch. **One bugfix branch should be respnsible for only one bugfix.** A new branch should be created when fixing another issue to make peer-review and testing easy.

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
  2. Go to develop branch
  3. Pull remote develop branch
  4. Go back to a feature branch
  5. Merge develop branch to the feature branch
  6. Fix conflicts
  7. Add your changes to stage
  8. Commit the changes
  9. Push your commit to remote repo
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
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>


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
6. Create PR from `main` to `develop`
7. Merge `main` to `develop` so that both branches have the same git history

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Codegen

This project has adopted [GraphQL Code Generator](https://github.com/dotansimha/graphql-code-generator) to automatically generate Type code out of GrapuQL. Settings are written in `./codegen.yml`.

### Backend workflow
- Every time you edit `./pages/api/schemas/index.ts`, run the codegen command below:

```
yarn codegen
```
- The code is generated to `types/generated/graphql.ts`. Use generated code by importing types from the file.

Example:
```
import { Resolvers } from '@customTypes/generated/graphql';

...

export const resolvers: Resolvers = {
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues]/https://github.com/TOMO-YOSHI/mokumoku/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/TOMO-YOSHI/mokumoku](https://github.com/TOMO-YOSHI/mokumoku)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/TOMO-YOSHI/mokumoku.svg?style=for-the-badge
[contributors-url]: https://github.com/TOMO-YOSHI/mokumoku/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TOMO-YOSHI/mokumoku.svg?style=for-the-badge
[forks-url]: https://github.com/TOMO-YOSHI/mokumoku/network/members
[stars-shield]: https://img.shields.io/github/stars/TOMO-YOSHI/mokumoku.svg?style=for-the-badge
[stars-url]: https://github.com/TOMO-YOSHI/mokumoku/stargazers
[issues-shield]: https://img.shields.io/github/issues/TOMO-YOSHI/mokumoku.svg?style=for-the-badge
[issues-url]: https://github.com/TOMO-YOSHI/mokumoku/issues
[license-shield]: https://img.shields.io/github/license/TOMO-YOSHI/mokumoku.svg?style=for-the-badge
[license-url]: https://github.com/TOMO-YOSHI/mokumoku/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/tomohiro/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 