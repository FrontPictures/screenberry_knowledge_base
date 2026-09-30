# Screenberry User Guide

## Project map

- Bilingual Next.js App Router / Nextra documentation site. `app/[lang]/` owns routing/layout; `app/[lang]/[[...mdxPath]]/page.tsx` loads pages and metadata.
- `content/en/` and `content/jp/` hold MDX; `_meta.ts` defines navigation. Preserve `/en` and `/jp` URLs and `lang="ja"`; do not restore locale-suffixed MDX filenames.
- `components/`, `elements/`, and `shared/` hold UI and shared code. Tokens and typography live in `shared/styles/global.css` and `tailwind.config.js`; `mdx-components.tsx` controls MDX rendering.
- `next.config.mjs` owns Nextra, locale configuration, and redirects; `proxy.ts` exports the locale proxy. Change `next-sitemap.config.js` for sitemap/robots generation.

## Runtime and commands

- Use Node.js `>=22.13.0` and the `pnpm` version declared in `package.json`. Do not introduce npm or Yarn lockfiles.
- Install dependencies with `pnpm install --frozen-lockfile` when the lockfile should remain unchanged; use `pnpm install` only when dependency changes are part of the task.
- Start local development with `pnpm dev`. Turbopack is used only by the local development script.
- Run TypeScript validation with `pnpm typecheck`.
- Run the production build with `pnpm build`. Production uses Webpack (`next build --webpack`); never use Turbopack for production builds.
- `pnpm build` also runs Pagefind and `next-sitemap` through `postbuild`. Expect regenerated search and sitemap output; inspect `git status` afterward and do not attribute unrelated generated timestamp noise to the task.
- There is currently no lint or test script. Do not invent a command or add test/lint infrastructure unless the task requires it.

## Implementation rules

- Preserve the explicit `/en` and `/jp` URL structure, canonical metadata, locale switching, and `lang="ja"` mapping for Japanese. Do not reintroduce legacy locale-suffixed MDX filenames.
- When changing documentation structure, inspect the corresponding `_meta.ts`. When changing one locale, inspect the counterpart for structural parity, but do not silently translate or rewrite the other locale outside the requested scope.
- Keep redirects in `next.config.mjs`; do not solve established legacy URLs by duplicating content pages.
- Update generators or configuration instead of editing generated output alone. In particular, change `next-sitemap.config.js` rather than only generated sitemap or robots files.
- Preserve Next.js server/client boundaries. Add `'use client'` only when a component actually needs client-only state, effects, events, or browser APIs.
- Reuse existing components, utilities, tokens, and patterns before adding new abstractions or dependencies. Ask before adding a production dependency unless it is explicitly requested.
- Prefer stable project/Nextra selectors such as `.nextra-sidebar`, `.nextra-toc`, and semantic article selectors. Do not depend on generated internal `x:` classes when a stable container can express the override.
- Reuse typography and color definitions from `shared/styles/global.css` and `tailwind.config.js`. To share component typography with generated Nextra markup, group the target selector with the existing `.title-*`, `.text-*`, or `.list-*` rule; do not duplicate declarations or `@apply` a custom component class.
- For sizing and spacing, prefer existing semantic utilities or Tailwind's spacing scale, including supported decimal units. Use arbitrary values only when no equivalent exists or the value requires calc(), a CSS variable, or a genuinely non-scale value.
- Preserve exact visual values when converting Tailwind classes. Numeric `text-*` utilities are not automatically equivalent to arbitrary font sizes.
- Keep MDX accessible: use meaningful image `alt` text, descriptive link text, valid heading order, and semantic markup. Preserve useful Nextra static-image behavior; use raw `<img>` only when the asset needs behavior the Markdown/Nextra image pipeline cannot provide.
- Publish ordinary informational notes in MDX as Markdown blockquotes using the established form `> **Note:** Note text`. Use a Nextra `Callout` only when the content genuinely requires stronger semantic or visual emphasis, such as an important warning; do not use a `Callout` for routine notes.
- Bold exact application, node, widget, option, parameter, window, tab, button, and other interface names in User Guide prose, for example **Screenberry Server**, **Media Player**, **Image**, and **Installed Licenses**. Do not bold the standalone product name Screenberry when it is used generically rather than as part of an interface or application name.
- Before creating or editing graphics for the User Guide, inspect the site's current design tokens and rendered UI, then use the same established color family for accents. Do not introduce an approximate or unrelated accent hue; in particular, documentation graphics with link-like actions must match the site's bright blue link treatment rather than violet or purple.
- Keep external integrations intact, including GTM, Cookiebot-related styles, search, sitemap generation, locale routing, and metadata, unless the task explicitly targets them.

## Validation

- Always inspect the final task-specific diff and run `git diff --check`.
- For `.ts`, `.tsx`, configuration, routing, or component changes, run `pnpm typecheck`.
- For build pipeline, dependency, Nextra, Tailwind configuration, metadata, or route-generation changes, run `pnpm build` when the environment permits it.
- For visual or interactive changes, verify the rendered result in a browser at the affected `/en/...` and/or `/jp/...` route. Check the relevant desktop and mobile widths and exercise the affected interaction; source inspection or `git diff --check` alone is not visual verification.
- For content-only changes, verify frontmatter, local links, image paths, and the affected navigation entry. Use the full build when the change could affect MDX compilation, Pagefind, sitemap generation, or routing.
- Report exactly which checks ran and which did not. Do not describe a change as browser-verified or build-verified without that evidence.

## Code review rules

- Flag accidental loss of locale prefixes, broken English/Japanese navigation parity, or redirects that bypass the established localized route model.
- Flag production builds switched to Turbopack; the supported project path is `next build --webpack`.
- Flag direct edits to generated search/sitemap/robots output when the generator or configuration should be changed instead.
- Flag duplicated raw design values when an existing project token or component-style selector is equivalent.
- Flag missing image alternative text, client components introduced without a client-only requirement, and changes that remove or bypass the registered Nextra patch without compatibility evidence.

## Handoff

- Keep the final response concise and factual: summarize changed files, behavior, validation, and any remaining limitation.
- Use the language of the user's request unless the user asks for another language. Keep commands, paths, identifiers, and product names in their original form.
- Do not silently replace a requested full or complete deliverable with a shortened, condensed, summarized, sampled, or otherwise reduced-scope version. Complete large tasks in manageable chunks when necessary. If a scope reduction is genuinely needed or preferable, disclose it before implementation and obtain the user's approval; if any unplanned reduction occurs, state it prominently and never describe the result as complete.

## Local project records

- Maintain `.local/screenberry-docs-log.md` as the local documentation work journal. At your discretion, add or update an entry when work reaches a meaningful milestone, such as creating or substantially revising a guide page, completing a documentation audit, or validating a significant workflow. Include relevant production URLs, validation performed, deployment status, and material remaining work. Do not add entries for trivial wording or formatting edits.
- Maintain `.local/screenberry-ux-suggestions.md` as the cumulative product UX reference. At your discretion, add or update a feature section when documentation work reveals a reusable UX issue, terminology decision, accessibility concern, risky interaction, missing feedback or recovery behavior, or other actionable product recommendation. Preserve useful rationale and acceptance criteria; do not record speculative or low-value observations merely to create an entry.
- Both files are intentionally local and Git-excluded. Update them automatically when appropriate without requiring a separate user request, but never treat them as substitutes for changes required in the published guide.
