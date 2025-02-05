# UpdateSweepConfigResponse

## Example Usage

```typescript
import { UpdateSweepConfigResponse } from "@moovio/sdk/models/operations";

let value: UpdateSweepConfigResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    sweepConfigID: "1f7e2f00-dc33-47fa-add2-9f17cf16c9e1",
    walletID: "9dd790b0-a8f2-46d8-9d8a-e0e2c95fd435",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "eed7c5de-8783-416c-aad7-18063d276d87",
    },
    pullPaymentMethod: {
      paymentMethodID: "3851c540-045b-45c9-a520-665c1138be42",
    },
    createdOn: new Date("2023-11-25T08:28:43.546Z"),
    updatedOn: new Date("2025-12-15T00:04:42.925Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |