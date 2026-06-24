# Rubabs Digital n8n Error Handoff + Schedule Integration

## 1) Error workflow handoff
In n8n, create a shared workflow that starts with **Error Trigger**. n8n supports setting an error workflow per workflow in Workflow Settings.

### Recommended nodes
1. Error Trigger
2. Set node
3. HTTP Request node
4. Optional Slack/Telegram alert

### HTTP Request target
- Method: POST
- URL: `https://YOUR_SITE/api/enquiries/error-handoff`
- Headers: `Content-Type: application/json`

### Suggested JSON body
```json
{
  "file": "enquiry-2026-06-24T10-00-00.000Z.json",
  "errorMessage": "SMTP timeout while sending ops email",
  "statusCode": 504,
  "sourceWorkflow": "Rubabs Digital Enquiry Delivery"
}
```

## 2) Auto-scheduled trigger integration
You can run the retry worker automatically by:
- n8n Schedule Trigger → HTTP Request → POST `/api/enquiries/run-retry-worker`
- or an external scheduler hitting the same endpoint

For webhook-based scheduling, configure the target workflow as a POST webhook with authentication and immediate response.

## 3) Replay from DLQ
Dead-letter items can be moved back to `pending-retry` from the analytics dashboard using the replay action.

## 4) Snapshot reports
Use:
- `/api/enquiries/analytics-export`
- `/api/enquiries/analytics-export?format=csv`
- optional query params: `from=YYYY-MM-DD&to=YYYY-MM-DD`
