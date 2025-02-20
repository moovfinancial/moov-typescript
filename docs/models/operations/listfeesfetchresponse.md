# ListFeesFetchResponse

## Example Usage

```typescript
import { ListFeesFetchResponse } from "@moovio/sdk/models/operations";

let value: ListFeesFetchResponse = {
  headers: {
    "key": [
      "<value>",
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