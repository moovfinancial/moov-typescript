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
      sweepConfigID: "bb512a04-acbc-40ce-8420-d6217c24f65b",
      walletID: "798048b9-5e2a-43dd-b0e8-53149b72bb44",
      status: "disabled",
      pushPaymentMethod: {
        paymentMethodID: "cb74fdaf-14de-43d7-95e6-270c9422550b",
      },
      pullPaymentMethod: {
        paymentMethodID: "6e6facf0-2f8e-47c2-b493-c9e1a43668ba",
      },
      createdOn: new Date("2025-12-07T19:04:27.292Z"),
      updatedOn: new Date("2023-06-09T17:53:29.548Z"),
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.SweepConfig](../../models/components/sweepconfig.md)[] | :heavy_check_mark:                                                 | N/A                                                                |