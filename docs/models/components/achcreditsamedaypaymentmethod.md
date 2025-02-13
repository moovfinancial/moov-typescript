# AchCreditSameDayPaymentMethod

## Example Usage

```typescript
import { AchCreditSameDayPaymentMethod } from "@moovio/sdk/models/components";

let value: AchCreditSameDayPaymentMethod = {
  paymentMethodID: "ffd77572-42eb-4265-a0b7-527484469d45",
  paymentMethodType: "ach-credit-same-day",
  bankAccount: {
    bankAccountID: "f33dc506-8caa-4cc7-91d9-0c658ae040db",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "general-ledger",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-04-02T11:18:11.440Z"),
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                                      | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | ID of the payment method.                                                                                                              |
| `paymentMethodType`                                                                                                                    | [components.AchCreditSameDayPaymentMethodPaymentMethodType](../../models/components/achcreditsamedaypaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `bankAccount`                                                                                                                          | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                           | :heavy_check_mark:                                                                                                                     | A bank account as contained within a payment method.                                                                                   |