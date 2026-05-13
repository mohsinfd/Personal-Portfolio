# Public Readiness

This repo is meant to be safe to publish as a portfolio project.

## Included

- Portfolio source code
- Static visual assets used by the site
- Public resume copy
- Build and local-development scripts

## Excluded

- Raw AI prompt exports
- Private writing briefs and scratch notes
- API keys, service tokens, secrets, and local environment files
- Unpublished partner documents or internal handoff files

## Pre-Publish Checklist

- Run `npm run build`
- Scan for secrets with `rg -i "api[_-]?key|secret|password|token|client[_-]?secret|private[_-]?key|OPENAI|SUPABASE|DATABASE_URL"`
- Confirm any linked demos or repositories are intentionally public
- Review resume PDF/contact details before each public update
