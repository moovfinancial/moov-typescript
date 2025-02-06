# BasicPaymentMethod

## Example Usage

```typescript
import { BasicPaymentMethod } from "@moovio/sdk/models/components";

let value: BasicPaymentMethod = {
  paymentMethodID: "6caf57a6-304d-490c-80f8-eee6252d93d7",
  paymentMethodType: "ach-debit-fund",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `paymentMethodID`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | ID of the payment method.                                                    |
| `paymentMethodType`                                                          | [components.PaymentMethodType](../../models/components/paymentmethodtype.md) | :heavy_check_mark:                                                           | The payment method type that represents a payment rail and directionality    |