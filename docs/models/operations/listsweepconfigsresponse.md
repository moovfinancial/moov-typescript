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
      sweepConfigID: "d58eb1ce-d7d1-44d0-b6d7-17b5ef214723",
      walletID: "b9b02bbd-986d-4d76-a0ca-78ee2d814ae1",
      status: "disabled",
      pushPaymentMethod: {
        paymentMethodID: "4c130841-e394-49ab-b40d-fe1c7a98a992",
      },
      pullPaymentMethod: {
        paymentMethodID: "cfc9ea42-9bd4-4e9b-bce4-6ed67b0538c2",
      },
      createdOn: new Date("2024-05-26T22:54:23.147Z"),
      updatedOn: new Date("2025-04-27T05:25:51.367Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.SweepConfig](../../models/components/sweepconfig.md)[] | :heavy_check_mark:                                                 | N/A                                                                |