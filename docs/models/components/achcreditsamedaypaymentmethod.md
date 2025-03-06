# AchCreditSameDayPaymentMethod

## Example Usage

```typescript
import { AchCreditSameDayPaymentMethod } from "@moovio/sdk/models/components";

let value: AchCreditSameDayPaymentMethod = {
  paymentMethodID: "c71d69f9-8ee7-4aa4-8290-dcbef7afda7b",
  paymentMethodType: "ach-credit-same-day",
  bankAccount: {
    bankAccountID: "0c2c6f18-4180-4375-9d45-e2961cf69dc8",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-10-08T23:53:40.433Z"),
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethodID`                                                                                                                      | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | ID of the payment method.                                                                                                              |
| `paymentMethodType`                                                                                                                    | [components.AchCreditSameDayPaymentMethodPaymentMethodType](../../models/components/achcreditsamedaypaymentmethodpaymentmethodtype.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `bankAccount`                                                                                                                          | [components.PaymentMethodsBankAccount](../../models/components/paymentmethodsbankaccount.md)                                           | :heavy_check_mark:                                                                                                                     | A bank account as contained within a payment method.                                                                                   |