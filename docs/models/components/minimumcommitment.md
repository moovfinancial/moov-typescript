# MinimumCommitment

The minimum spending amount that must be met in the billing period. If actual usage is below the minimum amount, account is charged the difference.

## Example Usage

```typescript
import { MinimumCommitment } from "@moovio/sdk/models/components";

let value: MinimumCommitment = {
  currency: "USD",
  valueDecimal: "12.987654321",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                            | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | A 3-letter ISO 4217 currency code.                                                                                                    | USD                                                                                                                                   |
| `valueDecimal`                                                                                                                        | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | A decimal-formatted numerical string that represents up to 9 decimal place precision. <br/><br/>For example, $12.987654321 is '12.987654321'. | 12.987654321                                                                                                                          |