# CreateSweepConfigResponse

## Example Usage

```typescript
import { CreateSweepConfigResponse } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    sweepConfigID: "342973e3-c02d-48a6-a622-e77a08e667d9",
    walletID: "b0fb90e7-e69e-4726-96bd-0742ad83c8cf",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "4bf479f3-f8bc-42ff-bdd5-de42c9165a6a",
    },
    pullPaymentMethod: {
      paymentMethodID: "b9e38c33-ace7-4b25-9a2f-2c5b6be92f83",
    },
    createdOn: new Date("2025-03-01T07:37:06.526Z"),
    updatedOn: new Date("2025-10-22T02:08:30.992Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |