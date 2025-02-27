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
      sweepConfigID: "0bfc3466-3ccb-40e5-b0ab-a6d58eb1ced7",
      walletID: "14d06d71-7b5e-4f21-9472-3eb9b02bbd98",
      status: "disabled",
      pushPaymentMethod: {
        paymentMethodID: "d760ca78-ee2d-4814-aae1-9a4c130841e3",
      },
      pullPaymentMethod: {
        paymentMethodID: "49ab40df-e1c7-4a98-ba99-2dcfc9ea429b",
      },
      createdOn: new Date("2023-11-09T16:12:50.253Z"),
      updatedOn: new Date("2025-09-15T14:12:42.212Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.SweepConfig](../../models/components/sweepconfig.md)[] | :heavy_check_mark:                                                 | N/A                                                                |