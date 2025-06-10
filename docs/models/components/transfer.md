# Transfer

Details of a Transfer.

## Example Usage

```typescript
import { Transfer } from "@moovio/sdk/models/components";

let value: Transfer = {
  transferID: "d835gf30-4b19-4850-a9b2-c0624c41ecb3",
  createdOn: new Date("2025-01-21T21:32:16Z"),
  source: {
    paymentMethodID: "9506dbf6-4208-44c3-ad8a-e4431660e1f2",
    paymentMethodType: "card-payment",
    account: {
      accountID: "7e4b26c2-b399-49ef-8390-50e1ea44d550",
      email: "jules@julesjackson.com",
      displayName: "Jules Jackson",
    },
    card: {
      cardID: "aefd5563-93c6-413c-875e-1bd0ebfc116d",
      fingerprint: "2f5d782ceef1c3bd31ed5...",
      brand: "Visa",
      cardType: "credit",
      lastFourCardNumber: "2000",
      bin: "400020",
      expiration: {
        month: "01",
        year: "28",
      },
      holderName: "Jules Jackson",
      billingAddress: {
        postalCode: "80301",
      },
      cardVerification: {
        cvv: "unavailable",
        addressLine1: "unavailable",
        postalCode: "unavailable",
        accountName: {
          firstName: "unavailable",
          lastName: "unavailable",
          middleName: "unavailable",
          fullName: "unavailable",
        },
      },
      issuer: "Moov Visa Sandbox",
      issuerCountry: "US",
      cardAccountUpdater: {},
      domesticPushToCard: "standard",
      domesticPullFromCard: "supported",
    },
    cardDetails: {
      status: "confirmed",
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
      confirmedOn: new Date("2025-01-21T21:32:16.799681237Z"),
    },
  },
  destination: {
    paymentMethodID: "3f9969cf-a1f3-4d83-8ddc-229a506651cf",
    paymentMethodType: "moov-wallet",
    account: {
      accountID: "34233b72-780c-4a0d-8b08-cbbe23k878f8",
      email: "john@wholebodyfitness.io",
      displayName: "Whole Body Fitness",
    },
    wallet: {
      walletID: "744b2e78-8cc8-4a6a-af42-611e3b844503",
    },
  },
  status: "pending",
  amount: {
    currency: "USD",
    value: 32945,
  },
  description: "Transfer from card to wallet",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `transferID`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `createdOn`                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                    | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `source`                                                                                                                         | [components.TransferSource](../../models/components/transfersource.md)                                                           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `destination`                                                                                                                    | [components.TransferDestination](../../models/components/transferdestination.md)                                                 | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `completedOn`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                    | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `status`                                                                                                                         | [components.TransferStatus](../../models/components/transferstatus.md)                                                           | :heavy_check_mark:                                                                                                               | Status of a transfer.                                                                                                            |                                                                                                                                  |
| `failureReason`                                                                                                                  | [components.TransferFailureReason](../../models/components/transferfailurereason.md)                                             | :heavy_minus_sign:                                                                                                               | Reason for a transfer's failure.                                                                                                 |                                                                                                                                  |
| `amount`                                                                                                                         | [components.Amount](../../models/components/amount.md)                                                                           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `description`                                                                                                                    | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | An optional description of the transfer that is used on receipts and for your own internal use.                                  | Pay Instructor for May 15 Class                                                                                                  |
| `metadata`                                                                                                                       | Record<string, *string*>                                                                                                         | :heavy_minus_sign:                                                                                                               | Free-form key-value pair list. Useful for storing information that is not captured elsewhere.                                    | {<br/>"optional": "metadata"<br/>}                                                                                               |
| `facilitatorFee`                                                                                                                 | [components.FacilitatorFee](../../models/components/facilitatorfee.md)                                                           | :heavy_minus_sign:                                                                                                               | Total or markup fee.                                                                                                             |                                                                                                                                  |
| `moovFee`                                                                                                                        | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Fees charged to your platform account for transfers.                                                                             |                                                                                                                                  |
| `moovFeeDecimal`                                                                                                                 | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Same as `moovFee`, but a decimal-formatted numerical string that represents up to 9 decimal place precision.                     |                                                                                                                                  |
| `moovFeeDetails`                                                                                                                 | [components.MoovFeeDetails](../../models/components/moovfeedetails.md)                                                           | :heavy_minus_sign:                                                                                                               | Processing and pass-through costs that add up to the moovFee.                                                                    |                                                                                                                                  |
| `moovFees`                                                                                                                       | [components.MoovFee](../../models/components/moovfee.md)[]                                                                       | :heavy_minus_sign:                                                                                                               | Fees charged to accounts involved in the transfer.                                                                               |                                                                                                                                  |
| `groupID`                                                                                                                        | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `cancellations`                                                                                                                  | [components.Cancellation](../../models/components/cancellation.md)[]                                                             | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `refundedAmount`                                                                                                                 | [components.Amount](../../models/components/amount.md)                                                                           | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `refunds`                                                                                                                        | [components.CardAcquiringRefund](../../models/components/cardacquiringrefund.md)[]                                               | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `disputedAmount`                                                                                                                 | [components.Amount](../../models/components/amount.md)                                                                           | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `disputes`                                                                                                                       | [components.CardAcquiringDispute](../../models/components/cardacquiringdispute.md)[]                                             | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `sweepID`                                                                                                                        | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `scheduleID`                                                                                                                     | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `occurrenceID`                                                                                                                   | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `paymentLinkID`                                                                                                                  | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |                                                                                                                                  |
| `salesTaxAmount`                                                                                                                 | [components.Amount](../../models/components/amount.md)                                                                           | :heavy_minus_sign:                                                                                                               | Optional sales tax amount. `transfer.amount.value` should be inclusive of any sales tax and represents the total amount charged. |                                                                                                                                  |