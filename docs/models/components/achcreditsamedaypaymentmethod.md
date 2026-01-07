# AchCreditSameDayPaymentMethod

## Example Usage

```typescript
import { AchCreditSameDayPaymentMethod } from "@moovio/sdk/models/components";

let value: AchCreditSameDayPaymentMethod = {
  paymentMethodID: "80bca603-5db2-41f1-989e-6f05d94de12a",
  paymentMethodType: "ach-credit-same-day",
  bankAccount: {
    bankAccountID: "844f0b74-3367-4ec6-bd20-31d80a5bd587",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-05-13T19:17:44.414Z"),
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | ID of the payment method.                                                                    |
| `paymentMethodType`                                                                          | *"ach-credit-same-day"*                                                                      | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `bankAccount`                                                                                | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md) | :heavy_check_mark:                                                                           | A bank account as contained within a payment method.                                         |