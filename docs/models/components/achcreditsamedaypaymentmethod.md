# AchCreditSameDayPaymentMethod

## Example Usage

```typescript
import { AchCreditSameDayPaymentMethod } from "@moovio/sdk/models/components";

let value: AchCreditSameDayPaymentMethod = {
  paymentMethodID: "0c2c6f18-4180-4375-9d45-e2961cf69dc8",
  paymentMethodType: "ach-credit-same-day",
  bankAccount: {
    bankAccountID: "4d1977c2-f5d2-4cac-afa8-bc7330c5c2a0",
    fingerprint: "<value>",
    status: "new",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-03-27T23:35:54.981Z"),
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                                      | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | ID of the payment method.                                                                                                              |
| `paymentMethodType`                                                                                                                    | [components.AchCreditSameDayPaymentMethodPaymentMethodType](../../models/components/achcreditsamedaypaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `bankAccount`                                                                                                                          | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                           | :heavy_check_mark:                                                                                                                     | A bank account as contained within a payment method.                                                                                   |