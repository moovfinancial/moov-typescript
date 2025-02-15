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
    adjustmentID: "0c1849fa-0688-4a42-a6f2-e87e7b6ebb5c",
    walletID: "32cf79d7-f9de-4d2a-b616-4d0f55026e1f",
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    createdOn: new Date("2024-05-12T18:17:15.678Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.Adjustment](../../models/components/adjustment.md) | :heavy_check_mark:                                             | N/A                                                            |