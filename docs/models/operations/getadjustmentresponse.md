# GetAdjustmentResponse

## Example Usage

```typescript
import { GetAdjustmentResponse } from "@moovio/sdk/models/operations";

let value: GetAdjustmentResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    adjustmentID: "<id>",
    walletID: "<id>",
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    createdOn: new Date("2024-06-26T00:18:45.111Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.Adjustment](../../models/components/adjustment.md) | :heavy_check_mark:                                             | N/A                                                            |