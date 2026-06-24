# Rubabs Digital Integrity, RBAC and Incident Layer

## Public preference links
- Signed token per recipient email
- Public preference page without admin login
- Token verification before read/write

## Tamper evidence
- SHA-256 hash chain for digest archive
- SHA-256 hash chain for digest audit trail
- Chain verification surfaced in admin archive view

## Role separation
- Environment-driven role: admin or operator
- Operator can view but cannot perform role-sensitive actions
- Admin can manage recipient preferences and acknowledge incidents

## Incident workflow
- Incident creation API
- Incident acknowledgment API
- Escalation due timestamp
- Incident timeline panel in analytics
