# InstantBankCreditPaymentMethod

Instantly send funds to a bank account.

## Example Usage

```typescript
import { InstantBankCreditPaymentMethod } from "@moovio/sdk/models/components";

let value: InstantBankCreditPaymentMethod = {
  paymentMethodID: "2fbfbefd-2438-4326-87d5-920d7a52d533",
  paymentMethodType: "instant-bank-credit",
  bankAccount: {
    bankAccountID: "844f0b74-3367-4ec6-bd20-31d80a5bd587",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-05-13T19:17:44.414Z"),
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                                        | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | ID of the payment method.                                                                                                                |
| `paymentMethodType`                                                                                                                      | [components.InstantBankCreditPaymentMethodPaymentMethodType](../../models/components/instantbankcreditpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `bankAccount`                                                                                                                            | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                             | :heavy_check_mark:                                                                                                                       | A bank account as contained within a payment method.                                                                                     |