# GetAdjustmentResponse

## Example Usage

```typescript
import { GetAdjustmentResponse } from "@moovio/sdk/models/operations";

let value: GetAdjustmentResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    adjustmentID: "70c1849f-a068-48a4-b26f-2e87e7b6ebb5",
    walletID: "a32cf79d-7f9d-4ed2-ba61-64d0f55026e1",
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    createdOn: new Date("2025-08-10T23:01:34.707Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.Adjustment](../../models/components/adjustment.md) | :heavy_check_mark:                                             | N/A                                                            |