# ListSweepConfigsResponse

## Example Usage

```typescript
import { ListSweepConfigsResponse } from "@moovio/sdk/models/operations";

let value: ListSweepConfigsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      sweepConfigID: "986dd760-ca78-4ee2-9d81-4ae19a4c1308",
      walletID: "1e3949ab-40df-4e1c-97a9-8a992dcfc9ea",
      status: "enabled",
      pushPaymentMethod: {
        paymentMethodID: "9bd4e9bc-e46e-4d67-8b05-38c2f7c57fb0",
      },
      pullPaymentMethod: {
        paymentMethodID: "4fca1c22-d01e-44ca-a1c3-b68f44459ce0",
      },
      createdOn: new Date("2024-10-11T06:36:37.814Z"),
      updatedOn: new Date("2024-10-20T15:06:03.630Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.SweepConfig](../../models/components/sweepconfig.md)[] | :heavy_check_mark:                                                 | N/A                                                                |