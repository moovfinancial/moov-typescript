# AchCreditSameDayPaymentMethod

## Example Usage

```typescript
import { AchCreditSameDayPaymentMethod } from "@moovio/sdk/models/components";

let value: AchCreditSameDayPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "ach-credit-same-day",
  bankAccount: {
    bankAccountID: "<id>",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2026-10-09T09:15:43.090Z"),
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | ID of the payment method.                                                                    |
| `paymentMethodType`                                                                          | *"ach-credit-same-day"*                                                                      | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `bankAccount`                                                                                | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md) | :heavy_check_mark:                                                                           | A bank account as contained within a payment method.                                         |