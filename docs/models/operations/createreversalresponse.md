# CreateReversalResponse

## Example Usage

```typescript
import { CreateReversalResponse } from "@moovio/sdk/models/operations";

let value: CreateReversalResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    refund: {
      refundID: "f6c8006a-d0fe-4da7-bc34-2f3b701eb830",
      createdOn: new Date("2023-12-09T06:42:10.165Z"),
      updatedOn: new Date("2023-08-23T14:07:24.267Z"),
      status: "created",
      amount: {
        currency: "USD",
        value: 1204,
      },
    },
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `headers`                  | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |
| `result`                   | *components.Reversal*      | :heavy_check_mark:         | N/A                        |