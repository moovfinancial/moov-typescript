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
    sweepConfigID: "fdd5de42-c916-45a6-8acb-9e38c33ace7b",
    walletID: "5a2f2c5b-6be9-42f8-836b-ee2d967cda0c",
    status: "enabled",
    pushPaymentMethod: {
      paymentMethodID: "7846c4d0-2e70-4971-a59a-e71162e3685a",
    },
    pullPaymentMethod: {
      paymentMethodID: "fd979942-8460-4a0b-9329-f6d08a6206bf",
    },
    createdOn: new Date("2023-11-20T05:30:05.170Z"),
    updatedOn: new Date("2024-01-15T22:43:28.512Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |