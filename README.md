# uesio docs

The Uesio documentation site (https://docs.ues.io)

All actual documentation is written in Markdown files, which live within [data/articles/docs](./data/articles/docs/)

## First-time setup

To get your local environment setup, first ensure that:

1. The [ues.io CLI](https://docs.ues.io/using-the-cli) is installed (Run `uesio -h` to ensure it's available)
2. [Node 18+](https://nodejs.org/en/download) is installed
3. You are added to the "Maintainers" team of the "uesio/docs" app. Ask someone at ues.io who is a maintainer to add you to the team, then verify that you can access the app by logging in to the Studio and verifying that you can see "uesio/docs" as one of the apps.
4. Run this to get setup locally:

```
git clone git@github.com:TheCloudMasters/docs.git
cd docs
npm run init
```

-   Select "uesio/docs" as the app.

## Development

You can develop both locally and/or in the Studio.

1. Pull (Studio to local): `npm run pull`
2. Push (local --> Studio): `npm run push`

This will push to whatever Studio workspace you have configured with `uesio work` (e.g. `dev`).

**NOTE** If working in a shared workspace, remember to pull before you push!

## Continuous integration

The `main` branch will automatically be built and deployed to the `uat` site (`https://docs-uat.ues.io`)

## Release to prod

Use the ["Release to Prod"](./github/workflows/release.yaml) Github Action to initiate a Prod deployment to the `prod` site (accessible at `https://docs.ues.io`)

To manually upsert documentation articles into a site, use `./seedprod.sh`, which will upsert doc article changes to whatever site is configured with `uesio siteadmin`

# Editing documentation articles

The docs site is built on the `uesio/cms` app, which includes an `article` collection. All documentation content is organized within articles, with the content being written in Markdown and stored as a User File attached to the "uesio/cms.content" field.

Markdown content can be written and previewed locally using VS Code's Markdown Preview plugin, or it can be previewed in a Studio Workspace or Site.

## Edit docs articles in a Workspace

1. Deploy uesio docs app
2. Upsert doc articles into your workspace

```
uesio deploy
./seed.sh
```
