# Generator LINE Bot with TypeScript

[![NPM](https://nodei.co/npm/generator-line-bot-typescript.png)](https://nodei.co/npm/generator-line-bot-typescript/)

## Install 

``` sh
npm install -g yo
npm install -g generator-line-bot-typescript
```

## Commands

`yo line-bot-typescript` generates scaffolds.

## Deploy to Heroku

1. [Install heroku cli.](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
2. Login to heroku.
   ```sh
   heroku login
   ```
3. [Deploy with git.](https://devcenter.heroku.com/articles/git)
4. Set environment variables.
   ```sh
   heroku config:set LINE_CHANNEL_ACCESS_TOKEN=<Your access token>
   heroku config:set LINE_CHANNEL_SECRET=<Your channel secret>
   heroku config:set NPM_CONFIG_PRODUCTION=false
   ```
