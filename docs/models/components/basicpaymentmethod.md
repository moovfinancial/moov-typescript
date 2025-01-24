# BasicPaymentMethod

## Example Usage

```typescript
import { BasicPaymentMethod } from "moov-sdk/models/components";

let value: BasicPaymentMethod = {
  paymentMethodID: "fb438036-5749-4d18-b2b6-92275fcbe189",
  paymentMethodType: "ach-debit-collect",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `paymentMethodID`                                                            | *string*                                                                     | :heavy_check_mark:                                                           | ID of the payment method.                                                    |
| `paymentMethodType`                                                          | [components.PaymentMethodType](../../models/components/paymentmethodtype.md) | :heavy_check_mark:                                                           | The payment method type that represents a payment rail and directionality    |