# AchDebitFundPaymentMethod

## Example Usage

```typescript
import { AchDebitFundPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitFundPaymentMethod = {
  paymentMethodID: "917e9f4a-e58d-450f-b61b-521bf6ca6060",
  paymentMethodType: "ach-debit-fund",
  bankAccount: {
    bankAccountID: "69f92f32-56f8-4cc6-a11f-d5deee2c0c9b",
    fingerprint: "<value>",
    status: "verificationFailed",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-06-09T02:17:00.257Z"),
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the payment method.                                                                                                      |
| `paymentMethodType`                                                                                                            | [components.AchDebitFundPaymentMethodPaymentMethodType](../../models/components/achdebitfundpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `bankAccount`                                                                                                                  | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                   | :heavy_check_mark:                                                                                                             | A bank account as contained within a payment method.                                                                           |