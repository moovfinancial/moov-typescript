# RtpCreditPaymentMethod

## Example Usage

```typescript
import { RtpCreditPaymentMethod } from "@moovio/sdk/models/components";

let value: RtpCreditPaymentMethod = {
  paymentMethodID: "fc82a267-7308-4718-b1fb-5d1ea1699baa",
  paymentMethodType: "rtp-credit",
  bankAccount: {
    bankAccountID: "0f647fed-34da-43de-9af8-d4f512ac07c8",
    fingerprint: "<value>",
    status: "new",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "savings",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2023-11-09T07:17:45.765Z"),
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | ID of the payment method.                                                                                                |
| `paymentMethodType`                                                                                                      | [components.RtpCreditPaymentMethodPaymentMethodType](../../models/components/rtpcreditpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `bankAccount`                                                                                                            | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                             | :heavy_check_mark:                                                                                                       | A bank account as contained within a payment method.                                                                     |