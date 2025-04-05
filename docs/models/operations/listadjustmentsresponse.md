# ListAdjustmentsResponse

## Example Usage

```typescript
import { ListAdjustmentsResponse } from "@moovio/sdk/models/operations";

let value: ListAdjustmentsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      adjustmentID: "486122a4-7577-4fdb-a98e-5040301720b3",
      walletID: "5359d533-278c-484f-bee2-4f2dc9bd81f8",
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      createdOn: new Date("2025-07-07T16:13:57.766Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.Adjustment](../../models/components/adjustment.md)[] | :heavy_check_mark:                                               | N/A                                                              |