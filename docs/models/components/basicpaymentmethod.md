# BasicPaymentMethod

## Example Usage

```typescript
import { BasicPaymentMethod } from "@moovio/sdk/models/components";

let value: BasicPaymentMethod = {
  paymentMethodID: "065a2c91-edc7-493c-8bcf-ee6cf4c3467b",
  paymentMethodType: "apple-pay",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `paymentMethodID`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | ID of the payment method.                                                    |
| `paymentMethodType`                                                          | [components.PaymentMethodType](../../models/components/paymentmethodtype.md) | :heavy_check_mark:                                                           | The payment method type that represents a payment rail and directionality    |