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
    refundID: "b057b51d-0d12-422c-8c21-9b80cbb31f7b",
    createdOn: new Date("2024-07-07T09:44:17.770Z"),
    updatedOn: new Date("2024-07-06T11:45:30.620Z"),
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