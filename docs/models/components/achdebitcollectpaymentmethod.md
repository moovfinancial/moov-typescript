# AchDebitCollectPaymentMethod

## Example Usage

```typescript
import { AchDebitCollectPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitCollectPaymentMethod = {
  paymentMethodID: "6a8ac579-1154-487e-add5-20b146822c84",
  paymentMethodType: "ach-debit-collect",
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

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                                    | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | ID of the payment method.                                                                                                            |
| `paymentMethodType`                                                                                                                  | [components.AchDebitCollectPaymentMethodPaymentMethodType](../../models/components/achdebitcollectpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `bankAccount`                                                                                                                        | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                         | :heavy_check_mark:                                                                                                                   | A bank account as contained within a payment method.                                                                                 |