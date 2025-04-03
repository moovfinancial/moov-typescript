# AchDebitCollectPaymentMethod

## Example Usage

```typescript
import { AchDebitCollectPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitCollectPaymentMethod = {
  paymentMethodID: "469d45af-33dc-4506-a8ca-acc71d90c658",
  paymentMethodType: "ach-debit-collect",
  bankAccount: {
    bankAccountID: "e040db4c-aac2-4985-bb67-3b0784251b90",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "general-ledger",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-10-29T13:21:33.515Z"),
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                                    | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | ID of the payment method.                                                                                                            |
| `paymentMethodType`                                                                                                                  | [components.AchDebitCollectPaymentMethodPaymentMethodType](../../models/components/achdebitcollectpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `bankAccount`                                                                                                                        | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                         | :heavy_check_mark:                                                                                                                   | A bank account as contained within a payment method.                                                                                 |