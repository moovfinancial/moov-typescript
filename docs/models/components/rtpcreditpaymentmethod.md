# RtpCreditPaymentMethod

## Example Usage

```typescript
import { RtpCreditPaymentMethod } from "@moovio/sdk/models/components";

let value: RtpCreditPaymentMethod = {
  paymentMethodID: "8cf91905-14e3-4c65-9d6f-3e481052730b",
  paymentMethodType: "rtp-credit",
  bankAccount: {
    bankAccountID: "2f79f12b-8619-47a4-a643-8d07caf02508",
    fingerprint: "<value>",
    status: "verificationFailed",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-11-01T15:28:04.729Z"),
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | ID of the payment method.                                                                                                |
| `paymentMethodType`                                                                                                      | [components.RtpCreditPaymentMethodPaymentMethodType](../../models/components/rtpcreditpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `bankAccount`                                                                                                            | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                             | :heavy_check_mark:                                                                                                       | A bank account as contained within a payment method.                                                                     |