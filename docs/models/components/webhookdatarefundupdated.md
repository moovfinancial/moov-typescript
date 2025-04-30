# WebhookDataRefundUpdated

## Example Usage

```typescript
import { WebhookDataRefundUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataRefundUpdated = {
  accountID: "48966f9b-0e4b-4ee2-8e6e-5a27e8b04369",
  transferID: "3684169c-3f3a-4483-b88e-585235ce6f51",
  refundID: "73d2df31-5751-49bf-b76e-7884538111b6",
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