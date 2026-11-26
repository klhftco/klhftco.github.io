# klhftco.github.io

Leo Huang's personal website. Each version of the site lives on its own branch, and GitHub Pages serves whichever branch is selected under Settings > Pages.

| Branch | Version |
|---|---|
| `site/barron` | Research site built from Jon Barron's template (live as of November 2026) |
| `site/vanilla` | Earlier HTML/CSS site (September 2024) |
| `site/react` | React version, source code (June 2024) |
| `site/react-build` | Built React site that Pages can serve |

## Switching versions

In Settings > Pages, set the source branch to the version you want and the folder to `/ (root)`. The change goes live in about a minute.

Pages cannot serve `site/react` directly because it holds source code. Run `npm run build` on that branch, commit the contents of `build/` to `site/react-build`, then point Pages at `site/react-build`.

## Archived versions

These tags keep older snapshots that are no longer branches:

- `archive/main-2024-07`: the July 2024 version of the vanilla site, which was `main` before this README
- `archive/dev-2024-09`: the old `dev` branch, with the same content as `site/vanilla`
- `archive/template-2024-08`: a reusable template stripped from the vanilla site

`main` holds only this README. Do not set it as the Pages source.
