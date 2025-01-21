# BasicPaymentMethod

## Example Usage

```typescript
import { BasicPaymentMethod } from "moov-sdk/models/components";

let value: BasicPaymentMethod = {
  paymentMethodID: "43803657-49d1-482b-8692-275fcbe189f4",
  paymentMethodType: "ach-debit-fund",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `paymentMethodID`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | ID of the payment method.                                                    |
| `paymentMethodType`                                                          | [components.PaymentMethodType](../../models/components/paymentmethodtype.md) | :heavy_check_mark:                                                           | The payment method type that represents a payment rail and directionality    |