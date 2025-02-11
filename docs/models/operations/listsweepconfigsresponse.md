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
      sweepConfigID: "ba6d58eb-1ced-47d1-94d0-6d717b5ef214",
      walletID: "23eb9b02-bbd9-486d-ad76-0ca78ee2d814",
      status: "disabled",
      pushPaymentMethod: {
        paymentMethodID: "19a4c130-841e-4394-a9ab-40dfe1c7a98a",
      },
      pullPaymentMethod: {
        paymentMethodID: "92dcfc9e-a429-4bd4-ae9b-ce46ed67b053",
      },
      createdOn: new Date("2025-04-26T05:22:55.984Z"),
      updatedOn: new Date("2023-05-23T09:32:37.289Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.SweepConfig](../../models/components/sweepconfig.md)[] | :heavy_check_mark:                                                 | N/A                                                                |