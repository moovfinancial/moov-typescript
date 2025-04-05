# InitiateRefundResponse

## Example Usage

```typescript
import { InitiateRefundResponse } from "@moovio/sdk/models/operations";

let value: InitiateRefundResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    refundID: "6e80e688-f136-4fc1-a6ea-e53d5d39f62c",
    createdOn: new Date("2023-09-20T16:52:53.584Z"),
    updatedOn: new Date("2024-01-17T05:26:15.154Z"),
    status: "pending",
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