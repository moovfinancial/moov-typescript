# MonthlyPlatformFee

Fixed recurring amount paid in the billing period regardless of usage.

## Example Usage

```typescript
import { MonthlyPlatformFee } from "@moovio/sdk/models/components";

let value: MonthlyPlatformFee = {
  currency: "USD",
  valueDecimal: "12.987654321",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                            | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | A 3-letter ISO 4217 currency code.                                                                                                    | USD                                                                                                                                   |
| `valueDecimal`                                                                                                                        | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | A decimal-formatted numerical string that represents up to 9 decimal place precision. <br/><br/>For example, $12.987654321 is '12.987654321'. | 12.987654321                                                                                                                          |