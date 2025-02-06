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
    sweepConfigID: "479f3f8b-c2ff-4dd5-bde4-2c9165a6acb9",
    walletID: "38c33ace-7b25-4a2f-b2c5-b6be92f836be",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "d967cda0-c067-4846-9c4d-02e7097159ae",
    },
    pullPaymentMethod: {
      paymentMethodID: "1162e368-5a9f-4d97-9994-28460a0b329f",
    },
    createdOn: new Date("2025-08-10T18:34:10.779Z"),
    updatedOn: new Date("2023-03-09T18:39:44.610Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |