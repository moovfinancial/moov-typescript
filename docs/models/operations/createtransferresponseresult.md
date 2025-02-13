# CreateTransferResponseResult


## Supported Types

### `components.TransferResponse`

```typescript
const value: components.TransferResponse = {
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
      "cardID": "aefd5563-93c6-413c-875e-1bd0ebfc116d",
      "fingerprint": "2f5d782ceef1c3bd31ed5...",
      "brand": "Visa",
      "cardType": "credit",
      "lastFourCardNumber": "2000",
      "bin": "400020",
      "expiration": {
        "month": "01",
        "year": "28",
      },
      "holderName": "Jules Jackson",
      "billingAddress": {
        "postalCode": "80301",
      },
      "cardVerification": {
        "cvv": "unavailable",
        "addressLine1": "unavailable",
        "postalCode": "unavailable",
        "accountName": {},
      },
      "issuer": "Moov Visa Sandbox",
      "issuerCountry": "US",
      "cardAccountUpdater": {},
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
      "walletID": "744b2e78-8cc8-4a6a-af42-611e3b844503",
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

### `components.AsyncTransfer`

```typescript
const value: components.AsyncTransfer = {
  transferID: "ec98c5ab-92fc-479c-a7bc-739880c86d34",
  createdOn: new Date("2024-03-03T12:05:11.807Z"),
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
      "cardID": "aefd5563-93c6-413c-875e-1bd0ebfc116d",
      "fingerprint": "2f5d782ceef1c3bd31ed5...",
      "brand": "Visa",
      "cardType": "credit",
      "lastFourCardNumber": "2000",
      "bin": "400020",
      "expiration": {
        "month": "01",
        "year": "28",
      },
      "holderName": "Jules Jackson",
      "billingAddress": {
        "postalCode": "80301",
      },
      "cardVerification": {
        "cvv": "unavailable",
        "addressLine1": "unavailable",
        "postalCode": "unavailable",
        "accountName": {},
      },
      "issuer": "Moov Visa Sandbox",
      "issuerCountry": "US",
      "cardAccountUpdater": {},
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
      "walletID": "744b2e78-8cc8-4a6a-af42-611e3b844503",
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

