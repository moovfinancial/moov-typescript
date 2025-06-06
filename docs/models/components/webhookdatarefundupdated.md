# WebhookDataRefundUpdated

## Example Usage

```typescript
import { WebhookDataRefundUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataRefundUpdated = {
  accountID: "b6bd22cd-db57-43fb-b13d-7e2fa2f7bfc0",
  transferID: "83bde1cf-5cc8-4a0d-bdcd-749074d7e768",
  refundID: "1b303b50-49f0-483f-8708-254bbf41629f",
  status: "pending",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `transferID`                                                       | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `refundID`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `status`                                                           | [components.RefundStatus](../../models/components/refundstatus.md) | :heavy_check_mark:                                                 | N/A                                                                |