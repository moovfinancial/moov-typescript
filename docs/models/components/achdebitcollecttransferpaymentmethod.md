# AchDebitCollectTransferPaymentMethod

## Example Usage

```typescript
import { AchDebitCollectTransferPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitCollectTransferPaymentMethod = {
  paymentMethodID: "fb4b3bfc-cf06-4b40-a01c-b1a9c33f10d3",
  paymentMethodType: "ach-debit-collect",
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
| `paymentMethodType`                                                                                          | *"ach-debit-collect"*                                                                                        | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `bankAccount`                                                                                                | [components.TransferPaymentMethodsBankAccount](../../models/components/transferpaymentmethodsbankaccount.md) | :heavy_check_mark:                                                                                           | A bank account as contained within a payment method.                                                         |