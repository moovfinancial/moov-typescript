# ApplePayPaymentMethod

## Example Usage

```typescript
import { ApplePayPaymentMethod } from "moov-sdk/models/components";

let value: ApplePayPaymentMethod = {
  paymentMethodID: "3ad0a7e5-782b-4d04-80fa-f8c556a5ef03",
  paymentMethodType: "apple-pay",
  applePay: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                      | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | ID of the payment method.                                                                                              |
| `paymentMethodType`                                                                                                    | [components.ApplePayPaymentMethodPaymentMethodType](../../models/components/applepaypaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `applePay`                                                                                                             | *any*                                                                                                                  | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |