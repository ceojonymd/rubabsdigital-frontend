# Rubabs Digital Digest Governance

## Added protections
- Timestamp validation
- Nonce validation
- Idempotency key validation
- Replay rejection for repeated machine requests

## New admin settings
- Ops recipients
- Executive recipients
- Daily ops digest enabled
- Weekly executive digest enabled
- Severity and escalation rules

## Machine request headers
- `x-rd-key`
- `x-rd-timestamp`
- `x-rd-signature`
- `x-rd-nonce`
- `x-rd-idempotency-key`

## Canonical string
`METHOD + "\n" + PATH + "\n" + TIMESTAMP + "\n" + NONCE + "\n" + IDEMPOTENCY_KEY + "\n" + BODY`

## Daily ops digest
Use `/api/enquiries/daily-ops-digest`

## Weekly executive summary
Use `/api/enquiries/weekly-executive-summary`
