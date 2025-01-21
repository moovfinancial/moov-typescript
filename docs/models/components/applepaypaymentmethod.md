# ApplePayPaymentMethod

## Example Usage

```typescript
import { ApplePayPaymentMethod } from "moov-sdk/models/components";

let value: ApplePayPaymentMethod = {
  paymentMethodID: "6b525ef3-c4e2-4a1f-abd9-7987c22651dc",
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