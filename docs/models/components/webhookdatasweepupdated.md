# WebhookDataSweepUpdated

## Example Usage

```typescript
import { WebhookDataSweepUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataSweepUpdated = {
  walletID: "6c14b3a4-f315-44a8-bb1c-980fbf714605",
  sweepID: "3fb38463-61bb-4a28-8094-d2c59be60262",
  status: "canceled",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `walletID`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `sweepID`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `transferID`                                                     | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `status`                                                         | [components.SweepStatus](../../models/components/sweepstatus.md) | :heavy_check_mark:                                               | N/A                                                              |