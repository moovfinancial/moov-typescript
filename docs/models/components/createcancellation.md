# CreateCancellation

Cancellation request.

## Example Usage

```typescript
import { CreateCancellation } from "@moovio/sdk/models/components";

let value: CreateCancellation = {
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
};
```

## Fields

| Field                                                                                                                                                                                 | Type                                                                                                                                                                                  | Required                                                                                                                                                                              | Description                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                                                              | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                    | Amount to void. This field can only be set for an auth-capture `card-payment` transfer.<br/>This cannot exceed `capturableAmount`.<br/>Omit this field to void the entire `capturableAmount`. |