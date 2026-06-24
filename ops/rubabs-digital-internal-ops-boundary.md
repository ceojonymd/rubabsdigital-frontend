# Rubabs Digital Internal Ops Boundary

## Decision
- Public website has no human login and no public browser-based ops dashboard.
- Sensitive operational handlers moved under /api/internal/enquiries/*
- Old /api/enquiries/* operational paths now return 410 Gone so callers can be updated safely.

## Why
- Cleaner separation between public site and machine-to-machine operational surface
- Lower chance of accidental public discovery or misuse
- Easier documentation for n8n, cron, scheduler, and webhook callers

## Action items
- Update all scheduler, cron, webhook, and n8n callers to use /api/internal/enquiries/*
- Rotate M2M secrets after migration
- Remove old 410 endpoints later after all callers are updated
