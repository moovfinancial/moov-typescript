# AchCreditStandardPaymentMethod

## Example Usage

```typescript
import { AchCreditStandardPaymentMethod } from "@moovio/sdk/models/components";

let value: AchCreditStandardPaymentMethod = {
  paymentMethodID: "b2234398-aad0-486c-8394-351be0a9ea69",
  paymentMethodType: "ach-credit-standard",
  bankAccount: {
    bankAccountID: "237418b1-b0bf-4714-9282-f66191441d17",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "general-ledger",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-05-20T00:02:58.462Z"),
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                                        | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | ID of the payment method.                                                                                                                |
| `paymentMethodType`                                                                                                                      | [components.AchCreditStandardPaymentMethodPaymentMethodType](../../models/components/achcreditstandardpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `bankAccount`                                                                                                                            | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                             | :heavy_check_mark:                                                                                                                       | A bank account as contained within a payment method.                                                                                     |