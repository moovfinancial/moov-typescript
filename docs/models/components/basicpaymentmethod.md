# BasicPaymentMethod

## Example Usage

```typescript
import { BasicPaymentMethod } from "@moovio/sdk/models/components";

let value: BasicPaymentMethod = {
  paymentMethodID: "118422d0-7127-43a6-bcaf-57a6304d90c0",
  paymentMethodType: "rtp-credit",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `paymentMethodID`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | ID of the payment method.                                                    |
| `paymentMethodType`                                                          | [components.PaymentMethodType](../../models/components/paymentmethodtype.md) | :heavy_check_mark:                                                           | The payment method type that represents a payment rail and directionality    |