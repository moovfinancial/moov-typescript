# MinPerTransaction

Specifies the minimum allowable spending for a single transaction, working as a transaction floor.

## Example Usage

```typescript
import { MinPerTransaction } from "@moovio/sdk/models/components";

let value: MinPerTransaction = {
  currency: "USD",
  valueDecimal: "12.987654321",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                            | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | A 3-letter ISO 4217 currency code.                                                                                                    | USD                                                                                                                                   |
| `valueDecimal`                                                                                                                        | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | A decimal-formatted numerical string that represents up to 9 decimal place precision. <br/><br/>For example, $12.987654321 is '12.987654321'. | 12.987654321                                                                                                                          |