# GetAdjustmentResponse

## Example Usage

```typescript
import { GetAdjustmentResponse } from "@moovio/sdk/models/operations";

let value: GetAdjustmentResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    adjustmentID: "2ad327bb-5bd9-4105-b285-3592495818c0",
    walletID: "911d7e60-ed9c-4f00-a8ae-4c79a36f9d63",
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    createdOn: new Date("2024-03-01T09:23:37.713Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.Adjustment](../../models/components/adjustment.md) | :heavy_check_mark:                                             | N/A                                                            |