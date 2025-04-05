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
    adjustmentID: "02ad327b-b5bd-4910-8528-53592495818c",
    walletID: "d911d7e6-0ed9-4cf0-808a-e4c79a36f9d6",
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    createdOn: new Date("2025-01-15T12:12:18.945Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.Adjustment](../../models/components/adjustment.md) | :heavy_check_mark:                                             | N/A                                                            |