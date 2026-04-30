# GetSweepConfigResponse

## Example Usage

```typescript
import { GetSweepConfigResponse } from "@moovio/sdk/models/operations";

let value: GetSweepConfigResponse = {
  headers: {},
  result: {
    sweepConfigID: "<id>",
    walletID: "<id>",
    status: "disabled",
    pushPaymentMethod: {
      paymentMethodID: "<id>",
    },
    pullPaymentMethod: {
      paymentMethodID: "<id>",
    },
    createdOn: new Date("2026-09-17T09:21:48.954Z"),
    updatedOn: new Date("2024-10-07T15:07:33.412Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |