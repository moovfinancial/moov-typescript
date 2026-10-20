# CreateTransferResponse


## Supported Types

### `components.CreatedTransfer`

```typescript
const value: components.CreatedTransfer = {
  transferID: "<id>",
  transferType: "ach-debit",
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
        quantity: 734465,
        options: [
          {
            name: "<value>",
            quantity: 498160,
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
  },
  processingDetails: {
    achDebit: {
      status: "returned",
      traceNumber: "124782618117",
    },
    achCredit: {
      status: "canceled",
      traceNumber: "124782618117",
    },
  },
};
```

### `components.AsyncTransfer`

```typescript
const value: components.AsyncTransfer = {
  transferID: "<id>",
  createdOn: new Date("2024-09-12T14:46:37.589Z"),
};
```

