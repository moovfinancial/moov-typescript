# GetResidualResponse

## Example Usage

```typescript
import { GetResidualResponse } from "@moovio/sdk/models/operations";

let value: GetResidualResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    residualID: "<id>",
    partnerAccountID: "<id>",
    periodStart: new Date("2025-10-19T03:09:51.352Z"),
    periodEnd: new Date("2024-04-16T12:56:12.342Z"),
    merchantFees: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    partnerCost: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    netIncome: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    revenueShare: "2.25",
    residualAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    createdOn: new Date("2024-12-12T15:51:06.813Z"),
    updatedOn: new Date("2026-02-14T01:01:45.152Z"),
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.Residual](../../models/components/residual.md) | :heavy_check_mark:                                         | N/A                                                        |