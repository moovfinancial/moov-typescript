# BasicPaymentMethod

## Example Usage

```typescript
import { BasicPaymentMethod } from "@moovio/sdk/models/components";

let value: BasicPaymentMethod = {
  paymentMethodID: "e6252d93-d702-461a-8390-251f3eafee9f",
  paymentMethodType: "ach-credit-same-day",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `paymentMethodID`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | ID of the payment method.                                                    |
| `paymentMethodType`                                                          | [components.PaymentMethodType](../../models/components/paymentmethodtype.md) | :heavy_check_mark:                                                           | The payment method type that represents a payment rail and directionality    |