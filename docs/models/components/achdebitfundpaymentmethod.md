# AchDebitFundPaymentMethod

## Example Usage

```typescript
import { AchDebitFundPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitFundPaymentMethod = {
  paymentMethodID: "8f689fb9-1318-4fd7-980d-60e7a8cf9190",
  paymentMethodType: "ach-debit-fund",
  bankAccount: {
    bankAccountID: "14e3c65d-6f3e-4481-a052-730b52f79f12",
    fingerprint: "<value>",
    status: "verificationFailed",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-10-02T00:29:09.828Z"),
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                              | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | ID of the payment method.                                                                                                      |
| `paymentMethodType`                                                                                                            | [components.AchDebitFundPaymentMethodPaymentMethodType](../../models/components/achdebitfundpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `bankAccount`                                                                                                                  | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                   | :heavy_check_mark:                                                                                                             | A bank account as contained within a payment method.                                                                           |