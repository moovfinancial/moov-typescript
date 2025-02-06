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
    refundID: "5cc03a70-5af3-4258-8a53-0213516296ac",
    createdOn: new Date("2024-02-24T04:43:08.800Z"),
    updatedOn: new Date("2025-12-07T15:23:54.021Z"),
    status: "created",
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