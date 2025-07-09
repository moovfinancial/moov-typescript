# ListFeesFetchResponse

## Example Usage

```typescript
import { ListFeesFetchResponse } from "@moovio/sdk/models/operations";

let value: ListFeesFetchResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.IncurredFee](../../models/components/incurredfee.md)[] | :heavy_check_mark:                                                 | N/A                                                                |