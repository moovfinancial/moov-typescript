# ListSweepConfigsResponse

## Example Usage

```typescript
import { ListSweepConfigsResponse } from "@moovio/sdk/models/operations";

let value: ListSweepConfigsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      sweepConfigID: "<id>",
      walletID: "<id>",
      status: "disabled",
      pushPaymentMethod: {
        paymentMethodID: "<id>",
      },
      pullPaymentMethod: {
        paymentMethodID: "<id>",
      },
      createdOn: new Date("2026-03-06T11:27:32.268Z"),
      updatedOn: new Date("2025-01-15T06:29:08.249Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.SweepConfig](../../models/components/sweepconfig.md)[] | :heavy_check_mark:                                                 | N/A                                                                |