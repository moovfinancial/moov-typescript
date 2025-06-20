# AchDebitFundPaymentMethod

## Example Usage

```typescript
import { AchDebitFundPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitFundPaymentMethod = {
  paymentMethodID: "bb2c562b-2639-464b-ad21-86a58fa17e0a",
  paymentMethodType: "ach-debit-fund",
  bankAccount: {
    bankAccountID: "ff5fe8cb-b736-4d3b-827e-cd3aabf157fe",
    fingerprint: "<value>",
    status: "new",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-03-02T11:13:45.697Z"),
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the payment method.                                                                                                      |
| `paymentMethodType`                                                                                                            | [components.AchDebitFundPaymentMethodPaymentMethodType](../../models/components/achdebitfundpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `bankAccount`                                                                                                                  | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                   | :heavy_check_mark:                                                                                                             | A bank account as contained within a payment method.                                                                           |