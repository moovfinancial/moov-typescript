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
      sweepConfigID: "fc34663c-cb0e-450a-9ba6-d58eb1ced7d1",
      walletID: "d06d717b-5ef2-4147-b23e-b9b02bbd986d",
      status: "enabled",
      pushPaymentMethod: {
        paymentMethodID: "60ca78ee-2d81-44ae-a19a-4c130841e394",
      },
      pullPaymentMethod: {
        paymentMethodID: "ab40dfe1-c7a9-48a9-b92d-cfc9ea429bd4",
      },
      createdOn: new Date("2024-09-25T10:57:23.220Z"),
      updatedOn: new Date("2025-03-03T12:14:22.956Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.SweepConfig](../../models/components/sweepconfig.md)[] | :heavy_check_mark:                                                 | N/A                                                                |