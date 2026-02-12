# WebhookDataRefundUpdated

## Example Usage

```typescript
import { WebhookDataRefundUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataRefundUpdated = {
  accountID: "<id>",
  transferID: "<id>",
  refundID: "<id>",
  status: "completed",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `transferID`                                                       | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `refundID`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `status`                                                           | [components.RefundStatus](../../models/components/refundstatus.md) | :heavy_check_mark:                                                 | N/A                                                                |