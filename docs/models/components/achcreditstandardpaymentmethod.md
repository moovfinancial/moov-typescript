# AchCreditStandardPaymentMethod

## Example Usage

```typescript
import { AchCreditStandardPaymentMethod } from "@moovio/sdk/models/components";

let value: AchCreditStandardPaymentMethod = {
  paymentMethodID: "13622287-9f93-443c-a71d-69f98ee7aa42",
  paymentMethodType: "ach-credit-standard",
  bankAccount: {
    bankAccountID: "0dcbef7a-fda7-4b00-9c2c-6f184180375d",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-11-15T12:57:07.514Z"),
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                                        | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | ID of the payment method.                                                                                                                |
| `paymentMethodType`                                                                                                                      | [components.AchCreditStandardPaymentMethodPaymentMethodType](../../models/components/achcreditstandardpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `bankAccount`                                                                                                                            | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                             | :heavy_check_mark:                                                                                                                       | A bank account as contained within a payment method.                                                                                     |