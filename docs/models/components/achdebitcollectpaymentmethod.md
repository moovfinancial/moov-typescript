# AchDebitCollectPaymentMethod

## Example Usage

```typescript
import { AchDebitCollectPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitCollectPaymentMethod = {
  paymentMethodID: "dc18fdd4-b5d1-4aa4-aae9-2454af8cf50c",
  paymentMethodType: "ach-debit-collect",
  bankAccount: {
    bankAccountID: "44b2dd93-f347-4870-ad0e-de520b223439",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2023-02-10T06:03:28.524Z"),
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                                    | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | ID of the payment method.                                                                                                            |
| `paymentMethodType`                                                                                                                  | [components.AchDebitCollectPaymentMethodPaymentMethodType](../../models/components/achdebitcollectpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `bankAccount`                                                                                                                        | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                         | :heavy_check_mark:                                                                                                                   | A bank account as contained within a payment method.                                                                                 |