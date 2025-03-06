# AchDebitCollectPaymentMethod

## Example Usage

```typescript
import { AchDebitCollectPaymentMethod } from "@moovio/sdk/models/components";

let value: AchDebitCollectPaymentMethod = {
  paymentMethodID: "f012bf91-7c24-4a5b-bcd8-6923dd676733",
  paymentMethodType: "ach-debit-collect",
  bankAccount: {
    bankAccountID: "af2ec8ad-8afb-41bf-960b-4e260739b421",
    fingerprint: "<value>",
    status: "errored",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2023-11-07T20:47:35.531Z"),
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethodID`                                                                                                                    | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | ID of the payment method.                                                                                                            |
| `paymentMethodType`                                                                                                                  | [components.AchDebitCollectPaymentMethodPaymentMethodType](../../models/components/achdebitcollectpaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `bankAccount`                                                                                                                        | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                         | :heavy_check_mark:                                                                                                                   | A bank account as contained within a payment method.                                                                                 |