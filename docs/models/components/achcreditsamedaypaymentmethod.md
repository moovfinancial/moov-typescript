# AchCreditSameDayPaymentMethod

## Example Usage

```typescript
import { AchCreditSameDayPaymentMethod } from "@moovio/sdk/models/components";

let value: AchCreditSameDayPaymentMethod = {
  paymentMethodID: "65b4d407-474f-4f9e-95cc-5b133a344ffd",
  paymentMethodType: "ach-credit-same-day",
  bankAccount: {
    bankAccountID: "757242eb-2650-4b75-b274-84469d45af33",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-04-15T18:02:33.861Z"),
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                                      | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | ID of the payment method.                                                                                                              |
| `paymentMethodType`                                                                                                                    | [components.AchCreditSameDayPaymentMethodPaymentMethodType](../../models/components/achcreditsamedaypaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `bankAccount`                                                                                                                          | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                           | :heavy_check_mark:                                                                                                                     | A bank account as contained within a payment method.                                                                                   |