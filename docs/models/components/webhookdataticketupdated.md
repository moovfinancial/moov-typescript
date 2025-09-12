# WebhookDataTicketUpdated

## Example Usage

```typescript
import { WebhookDataTicketUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataTicketUpdated = {
  accountID: "c30b987c-829b-4930-9b67-eddbaaa04887",
  ticketID: "506be12f-3fb7-497a-8491-ea865795164d",
  status: "on-hold",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `ticketID`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `foreignID`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `status`                                                           | [components.TicketStatus](../../models/components/ticketstatus.md) | :heavy_check_mark:                                                 | N/A                                                                |