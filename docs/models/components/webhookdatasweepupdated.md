# WebhookDataSweepUpdated

## Example Usage

```typescript
import { WebhookDataSweepUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataSweepUpdated = {
  accountID: "<id>",
  walletID: "<id>",
  sweepID: "<id>",
  status: "canceled",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `accountID`                                                      | *string*                                                         | :heavy_check_mark:                                               | The accountID associated with the wallet being swept.            |
| `walletID`                                                       | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `sweepID`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `transferID`                                                     | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `status`                                                         | [components.SweepStatus](../../models/components/sweepstatus.md) | :heavy_check_mark:                                               | N/A                                                              |