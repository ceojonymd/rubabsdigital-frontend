# Rubabs Digital Machine Auth + Digest Setup

## Machine-to-machine auth
Use HMAC-SHA256 with:
- `x-rd-key`
- `x-rd-timestamp`
- `x-rd-signature`

Canonical string:
`METHOD + "\n" + PATH + "\n" + TIMESTAMP + "\n" + BODY`

Recommended env:
- `RD_MACHINE_KEY`
- `RD_MACHINE_SECRET`

Generate secret:
```bash
openssl rand -hex 32
```

## Protected machine endpoints
- `/api/enquiries/run-retry-worker`
- `/api/enquiries/error-handoff`
- `/api/enquiries/archive-snapshot`
- `/api/enquiries/weekly-executive-summary`

## Weekly executive summary webhook
Optional env:
- `N8N_EXEC_SUMMARY_WEBHOOK_URL`
- `N8N_EXEC_SUMMARY_WEBHOOK_TOKEN`

## Example scheduler payload
```json
{
  "from": "2026-06-18",
  "to": "2026-06-24"
}
```

## n8n signing logic
In n8n:
1. Create timestamp.
2. Build raw JSON string body.
3. Build canonical string.
4. HMAC SHA256 with `RD_MACHINE_SECRET`.
5. Send headers with key, timestamp, signature.
