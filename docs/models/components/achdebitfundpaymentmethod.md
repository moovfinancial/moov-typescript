# AchDebitFundPaymentMethod

## Example Usage

```typescript
import { AchDebitFundPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitFundPaymentMethod = {
  paymentMethodID: "bb2c562b-2639-464b-ad21-86a58fa17e0a",
  paymentMethodType: "ach-debit-fund",
  bankAccount: {
    bankAccountID: "9b467f1c-9448-436e-ae4c-b66a00f95edd",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "general-ledger",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-10-01T01:34:04.625Z"),
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | ID of the payment method.                                                                    |
| `paymentMethodType`                                                                          | *"ach-debit-fund"*                                                                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `bankAccount`                                                                                | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md) | :heavy_check_mark:                                                                           | A bank account as contained within a payment method.                                         |