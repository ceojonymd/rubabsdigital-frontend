# Content Flow — Canonical Pipeline

## One-Directional Flow (HARD RULE)

```
Content Pipeline (Ollama writers / blog_scale_engine.py)
    ↓
WordPress (enrichment layer — SOURCE OF TRUTH for article content)
    ↓  one-way sync (sync_wp_to_d1.py, cron every 2h)
D1 (serving layer for rubabsdigital.com/blog — READ ONLY)
    ↓
Cloudflare Worker API (rubabsdigital-api.rdceojony.workers.dev)
    ↓
Next.js Frontend (rubabsdigital.com/blog)
```

## Rules

1. **D1 article content is NEVER edited directly** — every content change goes to WordPress first and reaches D1 only via `sync_wp_to_d1.py`.
2. **No script or agent may INSERT/UPDATE the `content` column in `rd_articles`** except `sync_wp_to_d1.py`.
3. The FTS table (`fts_rd_articles`) holds a truncated preview (3000 chars) for search indexing only — it is NOT a content source.
4. The `ingest_rd_articles.py` script may INSERT new article metadata rows (slug, title, category, etc.) but MUST NOT write to the `content` column.
5. `blog_scale_engine.py` enriches content IN WordPress (YouTube embeds, interlinks, affiliate tags) — never in D1.

## Sync Mechanism

- Script: `sync_wp_to_d1.py` on rdsrv
- Schedule: Every 2 hours via cron
- Method: Hash-based diff (SHA-256 of content+title+modified)
- Only writes rows whose hash has changed
- Skips posts modified <45 min ago (enrichment may still be running)
- Batch size: max 50 rows per D1 API call
- Idempotent: re-running with no changes writes zero rows

## Violation Policy

Any script that writes article content directly to D1 (bypassing WP→sync) is a CONTENT-FLOW violation.
Document violations in the completion report and disable the offending script.
