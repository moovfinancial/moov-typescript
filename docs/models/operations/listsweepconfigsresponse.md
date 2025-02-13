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
      sweepConfigID: "58eb1ced-7d14-4d06-ad71-7b5ef214723e",
      walletID: "9b02bbd9-86dd-4760-aca7-8ee2d814ae19",
      status: "enabled",
      pushPaymentMethod: {
        paymentMethodID: "c130841e-3949-4ab4-b0df-e1c7a98a992d",
      },
      pullPaymentMethod: {
        paymentMethodID: "fc9ea429-bd4e-49bc-9e46-ed67b0538c2f",
      },
      createdOn: new Date("2025-04-27T05:25:51.367Z"),
      updatedOn: new Date("2024-01-22T05:57:34.526Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.SweepConfig](../../models/components/sweepconfig.md)[] | :heavy_check_mark:                                                 | N/A                                                                |