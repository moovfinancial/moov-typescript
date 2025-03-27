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
    refundID: "1f31aafc-699c-496a-a351-d14e83fe13a3",
    createdOn: new Date("2023-07-01T18:48:05.220Z"),
    updatedOn: new Date("2025-01-07T06:50:44.539Z"),
    status: "completed",
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