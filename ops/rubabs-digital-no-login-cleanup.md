# Rubabs Digital No-Login Cleanup

## Removed
- Human login page
- Login and logout routes
- Cookie or session based admin auth helper
- Browser-based website admin access pattern

## Kept
- Public website pages
- Public signed preference links
- Machine-to-machine protected backend flows for scheduler, webhook, retry, digest, and SLA automation

## Notes
- If any remaining admin API route still imports admin-auth, remove that import manually.
- If any UI still links to /admin-login or /enquiries, remove those links manually.
- If you want zero public operational surface, remove the enquiries pages entirely instead of replacing them with disabled placeholders.
