# AchCreditStandardPaymentMethod

## Example Usage

```typescript
import { AchCreditStandardPaymentMethod } from "@moovio/sdk/models/components";

let value: AchCreditStandardPaymentMethod = {
  paymentMethodID: "e5cc5b13-3a34-44ff-9d77-57242eb2650b",
  paymentMethodType: "ach-credit-standard",
  bankAccount: {
    bankAccountID: "52748446-9d45-4af3-a3dc-5068caacc71d",
    fingerprint: "<value>",
    status: "new",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "savings",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2023-12-11T06:25:32.252Z"),
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                                        | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | ID of the payment method.                                                                                                                |
| `paymentMethodType`                                                                                                                      | [components.AchCreditStandardPaymentMethodPaymentMethodType](../../models/components/achcreditstandardpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `bankAccount`                                                                                                                            | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                             | :heavy_check_mark:                                                                                                                       | A bank account as contained within a payment method.                                                                                     |