# GetResidualResponse

## Example Usage

```typescript
import { GetResidualResponse } from "@moovio/sdk/models/operations";

let value: GetResidualResponse = {
  headers: {},
  result: {
    residualID: "915b9286-b5bd-4d1b-b4ec-daef49e60e1c",
    partnerAccountID: "a7438f6d-f94a-46c9-a3a8-4cfed8d7ae12",
    periodStart: new Date("2026-07-16T15:15:55.948Z"),
    periodEnd: new Date("2024-12-10T09:00:23.990Z"),
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
    moovShare: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    createdOn: new Date("2024-02-27T09:21:19.609Z"),
    updatedOn: new Date("2025-02-05T09:20:22.869Z"),
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.Residual](../../models/components/residual.md) | :heavy_check_mark:                                         | N/A                                                        |