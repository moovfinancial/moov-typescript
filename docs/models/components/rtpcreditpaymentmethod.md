# RtpCreditPaymentMethod

## Example Usage

```typescript
import { RtpCreditPaymentMethod } from "@moovio/sdk/models/components";

let value: RtpCreditPaymentMethod = {
  paymentMethodID: "8e2345c1-8145-42e6-9872-ff782f98cd3a",
  paymentMethodType: "rtp-credit",
  bankAccount: {
    bankAccountID: "2985fc24-0223-474c-832d-5d26035c6270",
    fingerprint: "<value>",
    status: "verificationFailed",
    holderName: "<value>",
    holderType: "guest",
    bankName: "<value>",
    bankAccountType: "general-ledger",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-07-25T21:58:34.788Z"),
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                        | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | ID of the payment method.                                                                                                |
| `paymentMethodType`                                                                                                      | [components.RtpCreditPaymentMethodPaymentMethodType](../../models/components/rtpcreditpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `bankAccount`                                                                                                            | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                             | :heavy_check_mark:                                                                                                       | A bank account as contained within a payment method.                                                                     |