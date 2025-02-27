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
    sweepConfigID: "bf479f3f-8bc2-4ffd-ad5d-e42c9165a6ac",
    walletID: "9e38c33a-ce7b-425a-a2f2-c5b6be92f836",
    status: "disabled",
    pushPaymentMethod: {
      paymentMethodID: "e2d967cd-a0c0-4678-a46c-4d02e7097159",
    },
    pullPaymentMethod: {
      paymentMethodID: "e71162e3-685a-49fd-a979-9428460a0b32",
    },
    createdOn: new Date("2025-12-13T21:16:19.781Z"),
    updatedOn: new Date("2024-04-07T14:07:06.599Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |