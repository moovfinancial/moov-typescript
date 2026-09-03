# CreatedTransfer

## Example Usage

```typescript
import { CreatedTransfer } from "@moovio/sdk/models/components";

let value: CreatedTransfer = {
  transferID: "<id>",
  transferType: "ach-credit",
  createdOn: new Date("2025-06-14T12:45:31.209Z"),
  source: {
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
    googlePay: {
      tokenID: "dcd471ec-7d5c-4016-865c-1e78c733bea2",
      brand: "Visa",
      cardType: "credit",
      cardDisplayName: "7419",
      fingerprint:
        "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
      expiration: {
        month: "01",
        year: "21",
      },
      dynamicLastFour: "7419",
      issuerCountry: "US",
      authMethod: "PAN_ONLY",
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
  },
  destination: {
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
    googlePay: {
      tokenID: "dcd471ec-7d5c-4016-865c-1e78c733bea2",
      brand: "Visa",
      cardType: "credit",
      cardDisplayName: "7419",
      fingerprint:
        "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
      expiration: {
        month: "01",
        year: "21",
      },
      dynamicLastFour: "7419",
      issuerCountry: "US",
      authMethod: "PAN_ONLY",
    },
  },
  amount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  description: "Pay Instructor for May 15 Class",
  metadata: {
    "optional": "metadata",
  },
  facilitatorFee: {
    total: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    markup: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  moovFee: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  moovFeeDetails: {
    cardScheme: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    interchange: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    discount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    moovProcessing: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  refundedAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  disputedAmount: {
    currency: "USD",
    valueDecimal: "12.987654321",
  },
  lineItems: {
    items: [
      {
        name: "<value>",
        basePrice: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        quantity: 459250,
        options: [
          {
            name: "<value>",
            quantity: 129124,
            priceModifier: {
              currency: "USD",
              valueDecimal: "12.987654321",
            },
            images: [
              {
                imageID: "<id>",
                link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
                publicID: "<id>",
              },
            ],
          },
        ],
        images: [
          {
            imageID: "<id>",
            link: "https://api.moov.io/images/q7lKWleAy9fUNhEGezQ1g",
            publicID: "<id>",
          },
        ],
      },
    ],
  },
  amountDetails: {
    tip: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    tax: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    surcharge: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  authorization: {
    authorizationID: "<id>",
    requestedAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    authorizedAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    capturedAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    capturableAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  options: {
    cardPayment: {
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
    },
    pushToCard: {
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
    },
    pullFromCard: {
      dynamicDescriptor: "WhlBdy *Yoga 11-12",
    },
    achDebit: {
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
      debitHoldPeriod: "2-days",
    },
    achCredit: {
      companyEntryDescription: "Gym dues",
      originatingCompanyName: "Whole Body Fit",
    },
    wire: {
      beneficiaryReference: "INV-2026-001",
    },
  },
  processingDetails: {
    achDebit: {
      status: "",
      traceNumber: "124782618117",
    },
    achCredit: {
      status: "corrected",
      traceNumber: "124782618117",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                      | Example                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `transferID`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `transferType`                                                                                                                                                                                                                                                                                                                                   | [components.TransferType](../../models/components/transfertype.md)                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                               | The rail and direction used to move funds for a transfer.                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                  |
| `createdOn`                                                                                                                                                                                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `source`                                                                                                                                                                                                                                                                                                                                         | [components.TransferSource](../../models/components/transfersource.md)                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `destination`                                                                                                                                                                                                                                                                                                                                    | [components.TransferDestination](../../models/components/transferdestination.md)                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `completedOn`                                                                                                                                                                                                                                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `status`                                                                                                                                                                                                                                                                                                                                         | [components.TransferStatus](../../models/components/transferstatus.md)                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | Status of a transfer.                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                  |
| `failureReason`                                                                                                                                                                                                                                                                                                                                  | [components.TransferFailureReason](../../models/components/transferfailurereason.md)                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | Reason for a transfer's failure.                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                  |
| `amount`                                                                                                                                                                                                                                                                                                                                         | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | Amount associated with this transfer.<br/>In v2026.10 and later, an auth-capture `card-payment` transfer reports the approved authorization amount until a final capture is created.<br/>For these transfers, when a final capture is created, this is updated to the cumulative captured amount.<br/>For other transfer types, this is the transfer amount. |                                                                                                                                                                                                                                                                                                                                                  |
| `description`                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | An optional description of the transfer that is used on receipts and for your own internal use.                                                                                                                                                                                                                                                  | Pay Instructor for May 15 Class                                                                                                                                                                                                                                                                                                                  |
| `metadata`                                                                                                                                                                                                                                                                                                                                       | Record<string, *string*>                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | Free-form key-value pair list. Useful for storing information that is not captured elsewhere.                                                                                                                                                                                                                                                    | {<br/>"optional": "metadata"<br/>}                                                                                                                                                                                                                                                                                                               |
| `facilitatorFee`                                                                                                                                                                                                                                                                                                                                 | [components.FacilitatorFee](../../models/components/facilitatorfee.md)                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | Total or markup fee.                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                  |
| `moovFee`                                                                                                                                                                                                                                                                                                                                        | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | Fees charged to your platform account for transfers.                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                  |
| `moovFeeDetails`                                                                                                                                                                                                                                                                                                                                 | [components.MoovFeeDetails](../../models/components/moovfeedetails.md)                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | Processing and pass-through costs that add up to the moovFee.                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                  |
| `groupID`                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `refundedAmount`                                                                                                                                                                                                                                                                                                                                 | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `disputedAmount`                                                                                                                                                                                                                                                                                                                                 | [components.AmountDecimal](../../models/components/amountdecimal.md)                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `sweepID`                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `scheduleID`                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `occurrenceID`                                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `paymentLinkCode`                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `foreignID`                                                                                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | Optional alias from a foreign/external system which can be used to reference this resource.                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                  |
| `lineItems`                                                                                                                                                                                                                                                                                                                                      | [components.TransferLineItems](../../models/components/transferlineitems.md)                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | An optional collection of line items for a transfer.<br/>When line items are provided, their total plus tax must equal the transfer amount.                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                  |
| `amountDetails`                                                                                                                                                                                                                                                                                                                                  | [components.TransferAmountDetails](../../models/components/transferamountdetails.md)                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `authorization`                                                                                                                                                                                                                                                                                                                                  | [components.TransferAuthorization](../../models/components/transferauthorization.md)                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                               | Authorization amounts.<br/>This field is present only for an auth-capture `card-payment` transfer.                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                  |
| `options`                                                                                                                                                                                                                                                                                                                                        | [components.TransferRailOptions](../../models/components/transferrailoptions.md)                                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |
| `processingDetails`                                                                                                                                                                                                                                                                                                                              | [components.TransferProcessingDetails](../../models/components/transferprocessingdetails.md)                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                  |