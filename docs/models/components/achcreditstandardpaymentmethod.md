# AchCreditStandardPaymentMethod

## Example Usage

```typescript
import { AchCreditStandardPaymentMethod } from "@moovio/sdk/models/components";

let value: AchCreditStandardPaymentMethod = {
  paymentMethodID: "c4c18e8f-689f-4b91-b318-fd780d60e7a8",
  paymentMethodType: "ach-credit-standard",
  bankAccount: {
    bankAccountID: "f9190514-e3c6-45d6-bf3e-481052730b52",
    fingerprint: "<value>",
    status: "verificationFailed",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2023-05-10T11:56:00.057Z"),
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                                        | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | ID of the payment method.                                                                                                                |
| `paymentMethodType`                                                                                                                      | [components.AchCreditStandardPaymentMethodPaymentMethodType](../../models/components/achcreditstandardpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `bankAccount`                                                                                                                            | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                             | :heavy_check_mark:                                                                                                                       | A bank account as contained within a payment method.                                                                                     |