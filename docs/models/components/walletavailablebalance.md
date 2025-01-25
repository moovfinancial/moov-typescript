# WalletAvailableBalance

## Example Usage

```typescript
import { WalletAvailableBalance } from "@moovio/sdk/models/components";

let value: WalletAvailableBalance = {
  currency: "USD",
  value: 1204,
  valueDecimal: "<value>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                    | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | A 3-letter ISO 4217 currency code.                                                                                            | USD                                                                                                                           |
| `value`                                                                                                                       | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | Quantity in the smallest unit of the specified currency. <br/><br/>In USD this is cents, for example, $12.04 is 1204 and $0.99 is 99. | 1204                                                                                                                          |
| `valueDecimal`                                                                                                                | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |                                                                                                                               |