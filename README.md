## Background
I want to split the automation for each platform into different repository. Hence, we need to bootstrap every automation project as easy as possible. The purpose of this template is to speed up the bootstrapping process when initializing new automation project for specific platform. This template is suitable for `Web Application`, and `API`.

## Requirement
- Node v18.17.0 or greater (Please consider use <a href="https://github.com/nvm-sh/nvm">NVM</a> to easily manage Node version)
-  NPM v9.8.1 or greater

## Getting Started
All the automation template must have a specific purpose such as for  Web App only. It's a very rare case where one project contains both platform, unless for the API.

After creating new repository using this template, these are things you need to do:

### A. Web Application
For Web Application project, you need to setup the endpoints which located in the `enums/web_url.type.ts`.

To run the cases for Web Application, you only need to run `npm run wdio-web`

### B. API
For Web Application project, you need to setup the endpoints which located in the `enums/web_endpoint.type.ts`.

To run the cases for API, you only need to run `npm run wdio-api`