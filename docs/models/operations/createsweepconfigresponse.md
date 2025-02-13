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
    sweepConfigID: "36bee2d9-67cd-4a0c-9067-846c4d02e709",
    walletID: "159ae711-62e3-4685-8a9f-d9799428460a",
    status: "disabled",
    pushPaymentMethod: {
      paymentMethodID: "329f6d08-a620-46bf-9745-17a90aa8f4d2",
    },
    pullPaymentMethod: {
      paymentMethodID: "3ec760bf-c346-463c-8cb0-e50aba6d58eb",
    },
    createdOn: new Date("2025-05-01T17:51:17.309Z"),
    updatedOn: new Date("2025-09-15T06:04:46.672Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.SweepConfig](../../models/components/sweepconfig.md) | :heavy_check_mark:                                               | N/A                                                              |