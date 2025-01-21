# Transfer

Details of a Transfer.

## Example Usage

```typescript
import { Transfer } from "moov-sdk/models/components";

let value: Transfer = {
  transferID: "e41b690f-e906-4fa2-a7f8-094168088c68",
  createdOn: new Date("2025-09-10T06:31:30.041Z"),
  source: {
    paymentMethodID: "<id>",
    paymentMethodType: "<value>",
    account: {
      accountID: "<id>",
      email: "Leann37@yahoo.com",
      displayName: "Jannie66",
    },
    bankAccount: {
      bankAccountID: "833fa3ef-14d3-4c97-ba45-6af66f739832",
      fingerprint:
        "dd4cbfe5fbaf47b392770b5b595bec604fd99394749b7d017153e2b9cfbea40e",
      status: "new",
      holderName: "John Doe",
      holderType: "individual",
      bankName: "Gringotts Bank",
      bankAccountType: "checking",
      routingNumber: "123456780",
      lastFourAccountNumber: "6789",
      updatedOn: new Date("2024-11-26T22:37:06Z"),
      statusReason: "bank-account-created",
    },
    cardDetails: {
      status: "confirmed",
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
      feeProgram:
        "Visa Signature and Visa Infinite (Spend not-qualified) Product 1",
    },
    achDetails: {
      status: "returned",
      traceNumber: "124782618117",
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
      debitHoldPeriod: "2-days",
    },
  },
  destination: {
    paymentMethodID: "<id>",
    paymentMethodType: "<value>",
    account: {
      accountID: "<id>",
      email: "Verdie25@yahoo.com",
      displayName: "Mozell_Emmerich",
    },
    bankAccount: {
      bankAccountID: "833fa3ef-14d3-4c97-ba45-6af66f739832",
      fingerprint:
        "dd4cbfe5fbaf47b392770b5b595bec604fd99394749b7d017153e2b9cfbea40e",
      status: "new",
      holderName: "John Doe",
      holderType: "individual",
      bankName: "Gringotts Bank",
      bankAccountType: "checking",
      routingNumber: "123456780",
      lastFourAccountNumber: "6789",
      updatedOn: new Date("2024-11-26T22:37:06Z"),
      statusReason: "bank-account-created",
    },
    achDetails: {
      status: "returned",
      traceNumber: "124782618117",
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
      debitHoldPeriod: "2-days",
    },
    cardDetails: {
      status: "settled",
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
      feeProgram:
        "Visa Signature and Visa Infinite (Spend not-qualified) Product 1",
    },
  },
  status: "pending",
  amount: {
    currency: "Pound Sterling",
    value: 313420,
  },
  description: "Pay Instructor for May 15 Class",
  metadata: {
    "optional": "metadata",
  },
  facilitatorFee: {
    totalDecimal: "12.987654321",
    markupDecimal: "0.987654321",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `transferID`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `createdOn`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `source`                                                                                                     | [components.TransferSource](../../models/components/transfersource.md)                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `destination`                                                                                                | [components.TransferDestination](../../models/components/transferdestination.md)                             | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `completedOn`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `status`                                                                                                     | [components.TransferStatus](../../models/components/transferstatus.md)                                       | :heavy_check_mark:                                                                                           | Status of a transfer.                                                                                        |                                                                                                              |
| `failureReason`                                                                                              | [components.TransferFailureReason](../../models/components/transferfailurereason.md)                         | :heavy_minus_sign:                                                                                           | Reason for a transfer's failure.                                                                             |                                                                                                              |
| `amount`                                                                                                     | [components.Amount](../../models/components/amount.md)                                                       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `description`                                                                                                | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | An optional description of the transfer for your own internal use.                                           | Pay Instructor for May 15 Class                                                                              |
| `metadata`                                                                                                   | Record<string, *string*>                                                                                     | :heavy_minus_sign:                                                                                           | Free-form key-value pair list. Useful for storing information that is not captured elsewhere.                | {<br/>"optional": "metadata"<br/>}                                                                           |
| `facilitatorFee`                                                                                             | [components.FacilitatorFee](../../models/components/facilitatorfee.md)                                       | :heavy_minus_sign:                                                                                           | Total or markup fee.                                                                                         |                                                                                                              |
| `moovFee`                                                                                                    | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Fees charged to your platform account for transfers.                                                         |                                                                                                              |
| `moovFeeDecimal`                                                                                             | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Same as `moovFee`, but a decimal-formatted numerical string that represents up to 9 decimal place precision. |                                                                                                              |
| `moovFeeDetails`                                                                                             | [components.MoovFeeDetails](../../models/components/moovfeedetails.md)                                       | :heavy_minus_sign:                                                                                           | Processing and pass-through costs that add up to the moovFee.                                                |                                                                                                              |
| `groupID`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `refundedAmount`                                                                                             | [components.Amount](../../models/components/amount.md)                                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `refunds`                                                                                                    | [components.CardAcquiringRefund](../../models/components/cardacquiringrefund.md)[]                           | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `disputedAmount`                                                                                             | [components.Amount](../../models/components/amount.md)                                                       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `disputes`                                                                                                   | [components.CardAcquiringDispute](../../models/components/cardacquiringdispute.md)[]                         | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `sweepID`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `scheduleID`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |
| `occurrenceID`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |