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
      sweepConfigID: "e71162e3-685a-49fd-a979-9428460a0b32",
      walletID: "f6d08a62-06bf-4745-b17a-90aa8f4d243e",
      status: "enabled",
      pushPaymentMethod: {
        paymentMethodID: "60bfc346-63cc-4b0e-950a-ba6d58eb1ced",
      },
      pullPaymentMethod: {
        paymentMethodID: "d14d06d7-17b5-4ef2-a147-23eb9b02bbd9",
      },
      createdOn: new Date("2024-03-11T19:27:47.119Z"),
      updatedOn: new Date("2025-06-13T22:41:28.103Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.SweepConfig](../../models/components/sweepconfig.md)[] | :heavy_check_mark:                                                 | N/A                                                                |