# AchDebitCollectPaymentMethod

## Example Usage

```typescript
import { AchDebitCollectPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitCollectPaymentMethod = {
  paymentMethodID: "fc58a4c5-20a4-4dc1-88fd-d4b5d1aa4ae9",
  paymentMethodType: "ach-debit-collect",
  bankAccount: {
    bankAccountID: "454af8cf-50cb-444b-b2dd-93f347870d0e",
    fingerprint: "<value>",
    status: "errored",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2023-03-01T11:57:10.030Z"),
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                                    | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | ID of the payment method.                                                                                                            |
| `paymentMethodType`                                                                                                                  | [components.AchDebitCollectPaymentMethodPaymentMethodType](../../models/components/achdebitcollectpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `bankAccount`                                                                                                                        | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                         | :heavy_check_mark:                                                                                                                   | A bank account as contained within a payment method.                                                                                 |