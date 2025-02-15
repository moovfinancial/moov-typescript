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
      adjustmentID: "9dad4c2f-a3fb-4438-8036-5749d182b692",
      walletID: "75fcbe18-9f43-410e-bac4-917fe5f3ffca",
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      createdOn: new Date("2023-11-18T03:36:20.029Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.Adjustment](../../models/components/adjustment.md)[] | :heavy_check_mark:                                               | N/A                                                              |