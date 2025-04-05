# AchDebitFundPaymentMethod

## Example Usage

```typescript
import { AchDebitFundPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitFundPaymentMethod = {
  paymentMethodID: "b0faaeb3-b025-4fd3-b9fd-0c79688a7e97",
  paymentMethodType: "ach-debit-fund",
  bankAccount: {
    bankAccountID: "ed949a79-f519-4773-8fdd-0d0ba20ffa12",
    fingerprint: "<value>",
    status: "errored",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "savings",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-06-15T22:41:33.987Z"),
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the payment method.                                                                                                      |
| `paymentMethodType`                                                                                                            | [components.AchDebitFundPaymentMethodPaymentMethodType](../../models/components/achdebitfundpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `bankAccount`                                                                                                                  | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                   | :heavy_check_mark:                                                                                                             | A bank account as contained within a payment method.                                                                           |