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
      sweepConfigID: "428460a0-b329-4f6d-a08a-6206bf74517a",
      walletID: "0aa8f4d2-43ec-4760-abfc-34663ccb0e50",
      status: "disabled",
      pushPaymentMethod: {
        paymentMethodID: "a6d58eb1-ced7-4d14-8d06-d717b5ef2147",
      },
      pullPaymentMethod: {
        paymentMethodID: "3eb9b02b-bd98-46dd-b760-ca78ee2d814a",
      },
      createdOn: new Date("2023-04-29T18:01:53.095Z"),
      updatedOn: new Date("2024-10-30T04:19:03.850Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.SweepConfig](../../models/components/sweepconfig.md)[] | :heavy_check_mark:                                                 | N/A                                                                |