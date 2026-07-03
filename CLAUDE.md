# RD PERMANENT MEMORY v1 (2026-07-04)

### G — Git & Deployment (the lesson of this sprint — never repeat)

- **G1. GitHub account:** The real GitHub user for RD projects is **`mdjonyrd`**, and pushes happen **from rdsrv via SSH** — never from any other machine/account. Before any push: `git remote -v` and `ssh -T git@github.com` to confirm identity is mdjonyrd@rdsrv.
- **G2. Vercel is NOT connected to the repo via Git integration.** `git push` NEVER triggers a build. Deploying requires either (a) Jony reconnecting the repo in the vercel.com dashboard, or (b) Vercel CLI with a token Jony provides. Until one exists, code on origin/main is NOT live.
- **G3. "Deployed" may only be reported when verified from OUTSIDE:** fetch the live URL and confirm the actual change is present (e.g., a shipped `/_next/static/chunks/*.js` contains the new component string, page HTML contains the new CSS). `x-vercel-cache: MISS` + `age: 0` with old content = old build serving fresh, i.e., NOT deployed. Git push ≠ deploy. Commit hash ≠ live.
- **G4. Never block on a Vercel build** — trigger, continue other work, verify later.

### C — Blog Content Architecture (rubabsdigital.com/blog)

- **C1. Canonical flow (CONTENT-FLOW.md, binding):** content pipeline → **WordPress = source of truth** → one-way hash-based sync (`sync_wp_to_d1.py`, cron every 2h) → **D1 = read-only serving layer** → Next.js frontend + Worker API (`rubabsdigital-api.rdceojony.workers.dev/api/articles/<slug>`). No script ever writes article content directly to D1 except the sync.
- **C2. Blog route is `/blog/<slug>`.** All internal links in content MUST be `/blog/<slug>` — the sync rewrites WP-relative links (`/<slug>/`) to `/blog/<slug>`. Any content with non-`/blog/` internal links is a bug.
- **C3. FTS table 3000-char truncation is BY DESIGN (search index only).** Full text lives in `rd_articles.content`. Worker read priority: content column → R2 → FTS. Never render from FTS.
- **C4. Sync is hash-based and idempotent:** SHA-256(content+title+modified) in `sync_hash`; second run with no changes = 0 writes; skip posts modified <45 min (enrichment collision guard); D1 batch max 50.
- **C5. WordPress timezone is UTC+6 (Asia/Dhaka), NOT UTC.** All freshness/time comparisons against WP `modified` must convert — the UTC bug once silently skipped 133 articles.
- **C6. MarkdownRenderer security:** YouTube embeds ONLY via whitelist component (`youtube.com/embed/` or `youtube-nocookie.com/embed/`, VIDEO_ID `[A-Za-z0-9_-]{11}`), sandboxed iframe, lazy 16:9. All other HTML sanitized; no raw `dangerouslySetInnerHTML` on untrusted content. `.blog-content` carries `overflow-wrap:anywhere; word-break:break-word`; img/iframe `max-width:100%`.

### P — Blog Pipeline (crons on rdsrv)

- **P1.** Ingest: `ingest_to_wp.py` on cron — writers → quality check → image gen → WP publish (rate-limited, dedup by slug, SEO meta).
- **P2.** Enrichment: 2-hour processor — cluster-first YouTube engine (one Data API search per topic cluster, top-5 pool, rotation among neighbors, quota hard-stop 9,500 units/day, cache in `youtube_cluster_cache.json`) + interlinks (Ollama embeddings in `blog_embeddings.db`, 3–5 in-body links + Related Guides block, orphan rule ≥3 inbound). Idempotency markers: `<!-- rd-video-rec -->`, `<!-- rd-interlinks -->`.
- **P3.** Video/interlink counters are SEPARATE (shared-counter starvation bug fixed — video phase once ate all 40 slots leaving interlinks 0).
- **P4.** WP→D1 sync cron every 2h with logs in `sync_logs/`.
- **P5.** Video placement rule: review/roundup → video immediately BEFORE first affiliate CTA; how-to → after intro; max 1/article (2 if >2,500 words); never inside/after the FTC disclosure block.

### A — RD API Platform (Cloudflare, 13 workers on rdceojony.workers.dev)

- **A1.** 7 APIs: rubabapi-api (gateway), newsapi, cyberguard-api, financeflow-api, smarttext-api, socialpulse-api, shopradar-api. 6 frontends: rubab-api-hub (canonical marketing surface), rubabapi-web, newsapi-web, rubab-api-pages (product pages), rubab-api-page (showcase), api-dashboards, ghostops-ui.
- **A2.** Gateway auth EXISTS and works: `/auth/register`, `/auth/login` (session cookie `rubabapi_session` — needs `Secure` flag), `/auth/me`. Missing: `/keys`, `/usage`, `/plans` — the monetization spine, defined in RD-API-PLATFORM-V2-UPGRADE-MASTER-PLAN.md (Phases 0–4, still pending execution).
- **A3.** Known open bugs until V2 sprint runs: newsapi 500 (`users.is_active` missing in D1), api-dashboards all sub-routes 500 (error 1101), hub has a dead `pages.dev` link, financeflow+shopradar enforce no auth, financeflow serves stub data, env label says development, no security headers, GhostOps admin routes ungated.
- **A4.** Tiers: FREE $0 100/day · STARTER $29 10k · PRO $99 100k · ENTERPRISE $299 unlimited.

### R — Standing Rules (always, all projects)

- **R1.** 7 Code Safety Rules: single-purpose commits · diff review · dry-run before deploy · post-deploy smoke test · no silent regressions · export verification · rollback protocol (`wrangler deployments list` before, `wrangler rollback` on failed smoke).
- **R2.** D1: always `--remote` · batch INSERT/UPDATE max 50 rows · content payloads via `--file`, never inline `--command` · two-phase extract→JSON→batch.
- **R3.** Python: `sys.stdout.reconfigure(encoding='utf-8')` first line.
- **R4.** NEVER reference ANTHROPIC_API_KEY in any env/code/prompt — subscription-only Claude Code access. AI backends: CF Workers AI, Groq, Ollama (local).
- **R5.** No fake reports: every number from a live query; PP re-verifies from outside; report "done" only after your own outside-style verification passes.
- **R6.** Autopilot: no confirmation loops on approved plans; "do it" = execute; parallelize independent work; errors logged then continue.
