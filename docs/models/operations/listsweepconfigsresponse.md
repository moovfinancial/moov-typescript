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
      sweepConfigID: "e50aba6d-58eb-41ce-bd7d-14d06d717b5e",
      walletID: "214723eb-9b02-4bbd-b986-dd760ca78ee2",
      status: "disabled",
      pushPaymentMethod: {
        paymentMethodID: "14ae19a4-c130-4841-ae39-49ab40dfe1c7",
      },
      pullPaymentMethod: {
        paymentMethodID: "98a992dc-fc9e-4a42-a9bd-4e9bce46ed67",
      },
      createdOn: new Date("2023-03-09T03:06:38.487Z"),
      updatedOn: new Date("2024-02-07T13:56:55.911Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.SweepConfig](../../models/components/sweepconfig.md)[] | :heavy_check_mark:                                                 | N/A                                                                |