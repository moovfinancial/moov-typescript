# CreatedTransfer

## Example Usage

```typescript
import { CreatedTransfer } from "@moovio/sdk/models/components";

let value: CreatedTransfer = {
  transferID: "7787207e-ac7e-48b1-b866-201c0ad8281d",
  createdOn: new Date("2026-03-10T06:52:08.646Z"),
  source: {
    paymentMethodID: "<id>",
    paymentMethodType: "pull-from-card",
    account: {
      accountID: "<id>",
      email: "Mason_Koepp@hotmail.com",
      displayName: "Concepcion46",
    },
    card: {
      cardID: "01234567-89ab-cdef-0123-456789abcdef",
      fingerprint:
        "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
      brand: "Visa",
      cardType: "credit",
      lastFourCardNumber: "<value>",
      bin: "<value>",
      expiration: {
        month: "01",
        year: "21",
      },
      billingAddress: {
        addressLine1: "123 Main Street",
        addressLine2: "Apt 302",
        city: "Boulder",
        stateOrProvince: "CO",
        postalCode: "80301",
        country: "US",
      },
      cardVerification: {
        cvv: "match",
        addressLine1: "match",
        postalCode: "match",
        accountName: {
          firstName: "match",
          lastName: "match",
          middleName: "match",
          fullName: "match",
        },
      },
      cardAccountUpdater: {
        updatedOn: new Date("2024-05-06T12:20:38.184Z"),
        updateType: "number-update",
      },
      domesticPushToCard: "standard",
      domesticPullFromCard: "supported",
    },
    applePay: {
      brand: "Visa",
      cardType: "credit",
      cardDisplayName: "Visa 1256",
      fingerprint:
        "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
      expiration: {
        month: "01",
        year: "21",
      },
      dynamicLastFour: "<value>",
      issuerCountry: "US",
    },
    terminalCard: {
      entryMode: "contactless",
      brand: "Visa",
      bin: "123456",
      cardType: "credit",
      expiration: {
        month: "01",
        year: "21",
      },
      fingerprint:
        "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
      holderName: "Jules Jackson",
      issuer: "GRINGOTTS BANK",
      issuerCountry: "US",
      lastFourCardNumber: "1234",
    },
    cardDetails: {
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
      feeProgram:
        "Visa Signature and Visa Infinite (Spend not-qualified) Product 1",
    },
    achDetails: {
      traceNumber: "124782618117",
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
      debitHoldPeriod: "2-days",
    },
  },
  destination: {
    paymentMethodID: "<id>",
    paymentMethodType: "ach-credit-same-day",
    account: {
      accountID: "<id>",
      email: "Mason_Koepp@hotmail.com",
      displayName: "Concepcion46",
    },
    card: {
      cardID: "01234567-89ab-cdef-0123-456789abcdef",
      fingerprint:
        "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
      brand: "Visa",
      cardType: "credit",
      lastFourCardNumber: "<value>",
      bin: "<value>",
      expiration: {
        month: "01",
        year: "21",
      },
      billingAddress: {
        addressLine1: "123 Main Street",
        addressLine2: "Apt 302",
        city: "Boulder",
        stateOrProvince: "CO",
        postalCode: "80301",
        country: "US",
      },
      cardVerification: {
        cvv: "match",
        addressLine1: "match",
        postalCode: "match",
        accountName: {
          firstName: "match",
          lastName: "match",
          middleName: "match",
          fullName: "match",
        },
      },
      cardAccountUpdater: {
        updatedOn: new Date("2024-05-06T12:20:38.184Z"),
        updateType: "number-update",
      },
      domesticPushToCard: "standard",
      domesticPullFromCard: "supported",
    },
    achDetails: {
      traceNumber: "124782618117",
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
      debitHoldPeriod: "2-days",
    },
    applePay: {
      brand: "Visa",
      cardType: "credit",
      cardDisplayName: "Visa 1256",
      fingerprint:
        "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
      expiration: {
        month: "01",
        year: "21",
      },
      dynamicLastFour: "<value>",
      issuerCountry: "US",
    },
    cardDetails: {
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
      feeProgram:
        "Visa Signature and Visa Infinite (Spend not-qualified) Product 1",
    },
  },
  amount: {
    currency: "USD",
    value: 1204,
  },
  description: "Pay Instructor for May 15 Class",
  metadata: {
    "optional": "metadata",
  },
  facilitatorFee: {
    totalDecimal: "12.987654321",
    markupDecimal: "0.987654321",
  },
  refundedAmount: {
    currency: "USD",
    value: 1204,
  },
  refunds: [
    {
      refundID: "5858b643-8e8b-42b5-9763-cc91a9e82c20",
      createdOn: new Date("2025-01-20T09:13:11.472Z"),
      updatedOn: new Date("2026-03-08T12:04:57.037Z"),
      status: "created",
      amount: {
        currency: "USD",
        value: 1204,
      },
    },
  ],
  disputedAmount: {
    currency: "USD",
    value: 1204,
  },
  disputes: [
    {
      disputeID: "2e8302f6-cd70-46fa-93af-2f3448109dee",
      createdOn: new Date("2024-05-12T10:26:33.460Z"),
      amount: {
        currency: "USD",
        value: 1204,
      },
    },
  ],
  salesTaxAmount: {
    currency: "USD",
    value: 1204,
  },
  lineItems: {
    items: [],
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `transferID`                                                                                                                                  | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `createdOn`                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `source`                                                                                                                                      | [components.TransferSource](../../models/components/transfersource.md)                                                                        | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `destination`                                                                                                                                 | [components.TransferDestination](../../models/components/transferdestination.md)                                                              | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `completedOn`                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `status`                                                                                                                                      | [components.TransferStatus](../../models/components/transferstatus.md)                                                                        | :heavy_minus_sign:                                                                                                                            | Status of a transfer.                                                                                                                         |                                                                                                                                               |
| `failureReason`                                                                                                                               | [components.TransferFailureReason](../../models/components/transferfailurereason.md)                                                          | :heavy_minus_sign:                                                                                                                            | Reason for a transfer's failure.                                                                                                              |                                                                                                                                               |
| `amount`                                                                                                                                      | [components.Amount](../../models/components/amount.md)                                                                                        | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `description`                                                                                                                                 | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | An optional description of the transfer that is used on receipts and for your own internal use.                                               | Pay Instructor for May 15 Class                                                                                                               |
| `metadata`                                                                                                                                    | Record<string, *string*>                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Free-form key-value pair list. Useful for storing information that is not captured elsewhere.                                                 | {<br/>"optional": "metadata"<br/>}                                                                                                            |
| `facilitatorFee`                                                                                                                              | [components.FacilitatorFee](../../models/components/facilitatorfee.md)                                                                        | :heavy_minus_sign:                                                                                                                            | Total or markup fee.                                                                                                                          |                                                                                                                                               |
| `moovFee`                                                                                                                                     | *number*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Fees charged to your platform account for transfers.                                                                                          |                                                                                                                                               |
| `moovFeeDecimal`                                                                                                                              | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Same as `moovFee`, but a decimal-formatted numerical string that represents up to 9 decimal place precision.                                  |                                                                                                                                               |
| `moovFeeDetails`                                                                                                                              | [components.MoovFeeDetails](../../models/components/moovfeedetails.md)                                                                        | :heavy_minus_sign:                                                                                                                            | Processing and pass-through costs that add up to the moovFee.                                                                                 |                                                                                                                                               |
| `groupID`                                                                                                                                     | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `cancellations`                                                                                                                               | [components.Cancellation](../../models/components/cancellation.md)[]                                                                          | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `refundedAmount`                                                                                                                              | [components.Amount](../../models/components/amount.md)                                                                                        | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `refunds`                                                                                                                                     | [components.CardAcquiringRefund](../../models/components/cardacquiringrefund.md)[]                                                            | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `disputedAmount`                                                                                                                              | [components.Amount](../../models/components/amount.md)                                                                                        | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `disputes`                                                                                                                                    | [components.CardAcquiringDispute](../../models/components/cardacquiringdispute.md)[]                                                          | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `sweepID`                                                                                                                                     | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `scheduleID`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `occurrenceID`                                                                                                                                | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `paymentLinkCode`                                                                                                                             | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
| `salesTaxAmount`                                                                                                                              | [components.Amount](../../models/components/amount.md)                                                                                        | :heavy_minus_sign:                                                                                                                            | Optional sales tax amount. `transfer.amount.value` should be inclusive of any sales tax and represents the total amount charged.              |                                                                                                                                               |
| `foreignID`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Optional alias from a foreign/external system which can be used to reference this resource.                                                   |                                                                                                                                               |
| `lineItems`                                                                                                                                   | [components.TransferLineItems](../../models/components/transferlineitems.md)                                                                  | :heavy_minus_sign:                                                                                                                            | An optional collection of line items for a transfer.<br/>When line items are provided, their total plus sales tax must equal the transfer amount. |                                                                                                                                               |