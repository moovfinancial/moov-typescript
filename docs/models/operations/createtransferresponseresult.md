# CreateTransferResponseResult


## Supported Types

### `components.CreatedTransfer`

```typescript
const value: components.CreatedTransfer = {
  transferID: "<id>",
  createdOn: new Date("2025-06-12T12:10:37.812Z"),
  source: {
    paymentMethodID: "<id>",
    paymentMethodType: "rtp-credit",
    account: {
      accountID: "<id>",
      email: "Jaeden92@yahoo.com",
      displayName: "Pearlie_Tromp70",
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
    paymentMethodType: "card-payment",
    account: {
      accountID: "<id>",
      email: "Jaeden92@yahoo.com",
      displayName: "Pearlie_Tromp70",
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
      refundID: "<id>",
      createdOn: new Date("2025-03-17T07:10:51.141Z"),
      updatedOn: new Date("2025-03-19T15:39:17.424Z"),
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
      disputeID: "<id>",
      createdOn: new Date("2024-01-18T18:20:12.179Z"),
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

### `components.AsyncTransfer`

```typescript
const value: components.AsyncTransfer = {
  transferID: "<id>",
  createdOn: new Date("2024-09-12T14:46:37.589Z"),
};
```

### `components.Transfer`

```typescript
const value: components.Transfer = {
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
      partnerAccountID: "65b57f28-49e9-4afb-9bf6-7e4fb6444917",
      walletType: "general",
    },
  },
  status: "pending",
  amount: {
    currency: "USD",
    value: 32945,
  },
  description: "Transfer from card to wallet",
  moovFees: [
    {
      accountID: "7e4b26c2-b399-49ef-8390-50e1ea44d550",
      transferParty: "source",
      totalAmount: {
        currency: "USD",
        valueDecimal: "0.1",
      },
      feeIDs: [
        "9d957d33-1a9a-47aa-9460-fe1a90f003dd",
      ],
    },
  ],
};
```

