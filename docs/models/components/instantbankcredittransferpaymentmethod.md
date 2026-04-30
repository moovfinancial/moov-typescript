# InstantBankCreditTransferPaymentMethod

Instantly send funds to a bank account.

## Example Usage

```typescript
import { InstantBankCreditTransferPaymentMethod } from "@moovio/sdk/models/components";

let value: InstantBankCreditTransferPaymentMethod = {
  paymentMethodID: "3680ded1-cdd4-44d5-ab88-2744479aa35e",
  paymentMethodType: "instant-bank-credit",
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
| `paymentMethodType`                                                                                          | *"instant-bank-credit"*                                                                                      | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `bankAccount`                                                                                                | [components.TransferPaymentMethodsBankAccount](../../models/components/transferpaymentmethodsbankaccount.md) | :heavy_check_mark:                                                                                           | A bank account as contained within a payment method.                                                         |