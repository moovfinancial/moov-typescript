# RtpCreditPaymentMethod

## Example Usage

```typescript
import { RtpCreditPaymentMethod } from "@moovio/sdk/models/components";

let value: RtpCreditPaymentMethod = {
  paymentMethodID: "673b0784-251b-490f-bcfa-fc4c18e8f689",
  paymentMethodType: "rtp-credit",
  bankAccount: {
    bankAccountID: "b91318fd-780d-460e-97a8-cf9190514e3c",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "savings",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-12-12T17:13:53.718Z"),
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | ID of the payment method.                                                                                                |
| `paymentMethodType`                                                                                                      | [components.RtpCreditPaymentMethodPaymentMethodType](../../models/components/rtpcreditpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `bankAccount`                                                                                                            | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                             | :heavy_check_mark:                                                                                                       | A bank account as contained within a payment method.                                                                     |