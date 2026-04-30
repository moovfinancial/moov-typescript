# WebhookDataTicketUpdated

## Example Usage

```typescript
import { WebhookDataTicketUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataTicketUpdated = {
  accountID: "<id>",
  ticketID: "<id>",
  status: "closed",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `ticketID`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `foreignID`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `status`                                                           | [components.TicketStatus](../../models/components/ticketstatus.md) | :heavy_check_mark:                                                 | N/A                                                                |