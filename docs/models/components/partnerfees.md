# PartnerFees

Monthly partner costs that are charged separately and not included in residual subtotal (e.g. platform fees, minimums).

## Example Usage

```typescript
import { PartnerFees } from "@moovio/sdk/models/components";

let value: PartnerFees = {
  minimumCommitment: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  monthlyPlatform: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  total: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `minimumCommitment`                                                                                                                                 | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                | :heavy_check_mark:                                                                                                                                  | The minimum spending amount that must be met in the billing period. If actual usage is below the minimum amount, account is charged the difference. |
| `monthlyPlatform`                                                                                                                                   | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                | :heavy_check_mark:                                                                                                                                  | Fixed recurring fee for the billing period regardless of usage.                                                                                     |
| `total`                                                                                                                                             | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                | :heavy_check_mark:                                                                                                                                  | Total partner fees.                                                                                                                                 |