# Rubab's Digital — Be a Millionaire Program

A full Next.js 14 website for Rubab's Digital AI agency.

## Pages
- `/` — Home
- `/ai-automation` — AI Automation service
- `/custom-ai-agents` — Custom AI Agents service
- `/website-design` — Website Design service
- `/digital-marketing` — Digital Marketing service
- `/about` — About Us
- `/contact` — Contact (form → Email + Google Sheets)

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
```bash
cp .env.example .env.local
```
Fill in:
- `RESEND_API_KEY` → from [resend.com](https://resend.com) (free tier: 3000 emails/month)
- `GOOGLE_CLIENT_EMAIL` + `GOOGLE_PRIVATE_KEY` → from Google Cloud Service Account
- `GOOGLE_SHEET_ID` → from your Google Sheet URL

### 3. Google Sheets Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a Service Account → download JSON credentials
3. Enable Google Sheets API
4. Create a Google Sheet with headers: `Date | Name | Email | Phone | Service | Message`
5. Share the sheet with your service account email

### 4. Run locally
```bash
npm run dev
```

### 5. Deploy to Vercel
```bash
npx vercel
# Add all env variables in Vercel dashboard
```

## Tech Stack
- Next.js 14 App Router
- Resend (email delivery)
- Google Sheets API (lead storage)
- TypeScript
- Zero external UI libraries
