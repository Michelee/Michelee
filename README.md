# Dynamic GitHub Profile Readme Template

## Get Started

- Click on `Use this template` button on the top right corner
- Name your repository as GitHub username
- Clone the repository
- Run `yarn install`
- Run `yarn dev`
- Edit [./main.mustache](./main.mustache) and save
- See changes being made to [./README.md](./README.md)

## Features

- Templating through [Mustache](https://github.com/janl/mustache.js)
- Load data for Mustache template in [./index.js](./index.js)
- Auto update README.md on file changes
- CRON job to update README.md with GitHub Actions
- Make sure to allow the GitHub action to commit changes by going to `Settings > Actions > General > Workflow permissions` and select 'Read and write permissions'
- Edit or disable with [./.github/workflows/main.yml](./.github/workflows/main.yml)
