# InitiateRefundResponse

## Example Usage

```typescript
import { InitiateRefundResponse } from "@moovio/sdk/models/operations";

let value: InitiateRefundResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    refundID: "688f136f-c16e-4ae5-83d5-d39f62ca3550",
    createdOn: new Date("2024-10-17T12:08:15.756Z"),
    amount: {
      currency: "USD",
      value: 1204,
    },
  },
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `headers`                                 | Record<string, *string*[]>                | :heavy_check_mark:                        | N/A                                       |
| `result`                                  | *operations.InitiateRefundResponseResult* | :heavy_check_mark:                        | N/A                                       |