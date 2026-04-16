# InstantBankCreditPaymentMethod

Instantly send funds to a bank account.

## Example Usage

```typescript
import { InstantBankCreditPaymentMethod } from "@moovio/sdk/models/components";

let value: InstantBankCreditPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "instant-bank-credit",
  bankAccount: {
    bankAccountID: "<id>",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "guest",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2026-04-28T07:47:07.806Z"),
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | ID of the payment method.                                                                    |
| `paymentMethodType`                                                                          | *"instant-bank-credit"*                                                                      | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `bankAccount`                                                                                | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md) | :heavy_check_mark:                                                                           | A bank account as contained within a payment method.                                         |