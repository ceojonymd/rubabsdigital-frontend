# Rubabs Digital Rotation and Audit Layer

## Dual-secret support
- Active machine key and secret
- Next machine key and secret
- Request verification against either slot during rotation
- Audit record includes matched key slot

## Recipient preference model
- Daily ops digest toggle
- Weekly executive digest toggle
- Critical alert toggle
- Universal unsubscribe-all control

## Critical fast lane
- Email webhook path for urgent alerts
- Telegram sendMessage path for urgent alerts
- Triggered when dead-letter count is greater than zero in live mode

## Archive and resend
- Digest archive listing API
- Admin resend endpoint
- Audit trail for preference saves, digest creation, and digest resend
