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
      adjustmentID: "69dad4c2-fa3f-4b43-8803-65749d182b69",
      walletID: "275fcbe1-89f4-4310-aeac-4917fe5f3ffc",
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      createdOn: new Date("2025-08-16T05:16:14.427Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.Adjustment](../../models/components/adjustment.md)[] | :heavy_check_mark:                                               | N/A                                                              |