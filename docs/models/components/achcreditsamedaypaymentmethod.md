# AchCreditSameDayPaymentMethod

## Example Usage

```typescript
import { AchCreditSameDayPaymentMethod } from "@moovio/sdk/models/components";

let value: AchCreditSameDayPaymentMethod = {
  paymentMethodID: "ede520b2-2343-498a-aad0-86c394351be0",
  paymentMethodType: "ach-credit-same-day",
  bankAccount: {
    bankAccountID: "9ea69223-7418-4b1b-90bf-714282f66191",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2023-05-02T03:21:18.336Z"),
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                                      | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | ID of the payment method.                                                                                                              |
| `paymentMethodType`                                                                                                                    | [components.AchCreditSameDayPaymentMethodPaymentMethodType](../../models/components/achcreditsamedaypaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `bankAccount`                                                                                                                          | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                           | :heavy_check_mark:                                                                                                                     | A bank account as contained within a payment method.                                                                                   |