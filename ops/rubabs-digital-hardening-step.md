# Rubabs Digital Hardening Step

## Included
- Expiring public preference tokens with regeneration
- Incident state store split from append-only incident event log
- Scheduler-facing incident SLA breach detection API

## Environment
- RD_PREFERENCE_TOKEN_SECRET
- RD_PREFERENCE_TOKEN_MAX_AGE_SECONDS
- RD_MACHINE_KEY / RD_MACHINE_SECRET
- RD_MACHINE_NEXT_KEY / RD_MACHINE_NEXT_SECRET
- N8N_CRITICAL_ALERT_WEBHOOK_URL
- N8N_CRITICAL_ALERT_WEBHOOK_TOKEN
- TELEGRAM_BOT_TOKEN
- TELEGRAM_CHAT_ID
