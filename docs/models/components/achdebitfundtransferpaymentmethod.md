# AchDebitFundTransferPaymentMethod

## Example Usage

```typescript
import { AchDebitFundTransferPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitFundTransferPaymentMethod = {
  paymentMethodID: "b5b897bc-da3b-44b0-a354-5341dfe2e154",
  paymentMethodType: "ach-debit-fund",
  bankAccount: {
    bankAccountID: "<id>",
    fingerprint: "<value>",
    status: "verificationFailed",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "savings",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2026-11-26T20:14:56.616Z"),
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                            | *string*                                                                                                     | :heavy_check_mark:                                                                                           | ID of the payment method.                                                                                    |
| `paymentMethodType`                                                                                          | *"ach-debit-fund"*                                                                                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `bankAccount`                                                                                                | [components.TransferPaymentMethodsBankAccount](../../models/components/transferpaymentmethodsbankaccount.md) | :heavy_check_mark:                                                                                           | A bank account as contained within a payment method.                                                         |