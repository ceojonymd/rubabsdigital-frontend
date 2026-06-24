# Rubabs Digital Live Delivery Activation

## 1) Environment variables
Set these in `.env.local` for the website:
- `N8N_CONTACT_WEBHOOK_URL`
- `N8N_CONTACT_WEBHOOK_TOKEN`
- `RD_ADMIN_PASSWORD`
- `RD_ADMIN_SECRET`
- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASS`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

## 2) n8n activation
1. Open n8n.
2. Import `ops/rubabs-digital-enquiry-workflow.json`.
3. Add Telegram credentials.
4. Add SMTP credentials in the Send Email node.
5. Set the webhook authentication method to Header/Bearer.
6. Copy the production webhook URL.
7. Put it into `N8N_CONTACT_WEBHOOK_URL`.
8. Activate the workflow.

## 3) Website delivery check
- Open `/enquiries`
- Confirm health pills for n8n, SMTP, Telegram, and Admin Security
- Submit a test enquiry from `/contact`
- Confirm CSV export works
- Confirm Telegram/email delivery happens for live webhook path

## 4) Local-first note
This setup stays aligned with a local-first architecture. n8n must remain active for production webhook delivery to work.
