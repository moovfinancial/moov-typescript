# AchCreditStandardTransferPaymentMethod

## Example Usage

```typescript
import { AchCreditStandardTransferPaymentMethod } from "@moovio/sdk/models/components";

let value: AchCreditStandardTransferPaymentMethod = {
  paymentMethodID: "2a90b7ec-24bc-4dbc-bf70-da4459393b4a",
  paymentMethodType: "ach-credit-standard",
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
| `paymentMethodType`                                                                                          | *"ach-credit-standard"*                                                                                      | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `bankAccount`                                                                                                | [components.TransferPaymentMethodsBankAccount](../../models/components/transferpaymentmethodsbankaccount.md) | :heavy_check_mark:                                                                                           | A bank account as contained within a payment method.                                                         |