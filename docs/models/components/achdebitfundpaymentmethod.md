# AchDebitFundPaymentMethod

## Example Usage

```typescript
import { AchDebitFundPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitFundPaymentMethod = {
  paymentMethodID: "52f79f12-b861-497a-a464-38d07caf0250",
  paymentMethodType: "ach-debit-fund",
  bankAccount: {
    bankAccountID: "a66e9453-4aa4-48d4-904f-012bf917c24a",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-08-27T04:32:02.162Z"),
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the payment method.                                                                                                      |
| `paymentMethodType`                                                                                                            | [components.AchDebitFundPaymentMethodPaymentMethodType](../../models/components/achdebitfundpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `bankAccount`                                                                                                                  | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                   | :heavy_check_mark:                                                                                                             | A bank account as contained within a payment method.                                                                           |