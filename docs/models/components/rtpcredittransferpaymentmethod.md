# RtpCreditTransferPaymentMethod

## Example Usage

```typescript
import { RtpCreditTransferPaymentMethod } from "@moovio/sdk/models/components";

let value: RtpCreditTransferPaymentMethod = {
  paymentMethodID: "d49158c0-890e-4ec8-be81-e88bfe794891",
  paymentMethodType: "rtp-credit",
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
| `paymentMethodType`                                                                                          | *"rtp-credit"*                                                                                               | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `bankAccount`                                                                                                | [components.TransferPaymentMethodsBankAccount](../../models/components/transferpaymentmethodsbankaccount.md) | :heavy_check_mark:                                                                                           | A bank account as contained within a payment method.                                                         |