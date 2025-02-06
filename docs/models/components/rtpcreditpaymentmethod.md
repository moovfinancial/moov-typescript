# RtpCreditPaymentMethod

## Example Usage

```typescript
import { RtpCreditPaymentMethod } from "@moovio/sdk/models/components";

let value: RtpCreditPaymentMethod = {
  paymentMethodID: "7433ac65-b4d4-4074-874f-f9e5cc5b133a",
  paymentMethodType: "rtp-credit",
  bankAccount: {
    bankAccountID: "44ffd775-7242-4eb2-9650-b7527484469d",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2023-09-10T22:04:09.629Z"),
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | ID of the payment method.                                                                                                |
| `paymentMethodType`                                                                                                      | [components.RtpCreditPaymentMethodPaymentMethodType](../../models/components/rtpcreditpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `bankAccount`                                                                                                            | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                             | :heavy_check_mark:                                                                                                       | A bank account as contained within a payment method.                                                                     |