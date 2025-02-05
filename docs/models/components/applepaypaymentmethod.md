# ApplePayPaymentMethod

## Example Usage

```typescript
import { ApplePayPaymentMethod } from "@moovio/sdk/models/components";

let value: ApplePayPaymentMethod = {
  paymentMethodID: "df570336-d6b8-4a30-a31b-9c64d97e5642",
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