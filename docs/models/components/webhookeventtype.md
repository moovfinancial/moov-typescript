# WebhookEventType

The type of event that occurred.

## Example Usage

```typescript
import { WebhookEventType } from "@moovio/sdk/models/components";

let value: WebhookEventType = "cancellation.updated";
```

## Values

```typescript
"*" | "account.created" | "account.updated" | "account.disconnected" | "balance.updated" | "bankAccount.created" | "bankAccount.updated" | "bankAccount.deleted" | "cancellation.created" | "cancellation.updated" | "card.autoUpdated" | "capability.requested" | "capability.updated" | "dispute.created" | "dispute.updated" | "invoice.created" | "invoice.updated" | "networkID.updated" | "paymentMethod.enabled" | "paymentMethod.disabled" | "refund.created" | "refund.updated" | "representative.created" | "representative.updated" | "representative.deleted" | "sweep.created" | "sweep.updated" | "terminalApplication.created" | "terminalApplication.updated" | "ticket.created" | "ticket.updated" | "ticket.messageAdded" | "transfer.created" | "transfer.updated" | "wallet.created" | "wallet.updated" | "walletTransaction.updated" | "billingStatement.created"
```