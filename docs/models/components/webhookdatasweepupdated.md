# WebhookDataSweepUpdated

## Example Usage

```typescript
import { WebhookDataSweepUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataSweepUpdated = {
  walletID: "ad8fb5b4-2ac2-4342-8b3f-97aae49f87f0",
  sweepID: "e0fdf225-5f09-4553-92cd-47e19b95ef89",
  status: "failed",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `walletID`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `sweepID`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `transferID`                                                     | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `status`                                                         | [components.SweepStatus](../../models/components/sweepstatus.md) | :heavy_check_mark:                                               | N/A                                                              |