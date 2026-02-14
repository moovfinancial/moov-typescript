# TransferPaymentMethod

A method of moving money


## Supported Types

### `components.MoovWalletTransferPaymentMethod`

```typescript
const value: components.MoovWalletTransferPaymentMethod = {
  paymentMethodID: "8b86744a-4586-494e-b644-1c26eba840b1",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "<id>",
    partnerAccountID: "13958078-06c5-489f-8acd-0aaf391c09eb",
    walletType: "default",
  },
};
```

### `components.AchDebitFundTransferPaymentMethod`

```typescript
const value: components.AchDebitFundTransferPaymentMethod = {
  paymentMethodID: "b5b897bc-da3b-44b0-a354-5341dfe2e154",
  paymentMethodType: "ach-debit-fund",
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

### `components.AchDebitCollectTransferPaymentMethod`

```typescript
const value: components.AchDebitCollectTransferPaymentMethod = {
  paymentMethodID: "fb4b3bfc-cf06-4b40-a01c-b1a9c33f10d3",
  paymentMethodType: "ach-debit-collect",
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

### `components.AchCreditStandardTransferPaymentMethod`

```typescript
const value: components.AchCreditStandardTransferPaymentMethod = {
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

### `components.AchCreditSameDayTransferPaymentMethod`

```typescript
const value: components.AchCreditSameDayTransferPaymentMethod = {
  paymentMethodID: "f7592044-e1e4-4004-b13b-01e2d015f5f9",
  paymentMethodType: "ach-credit-same-day",
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

### `components.RtpCreditTransferPaymentMethod`

```typescript
const value: components.RtpCreditTransferPaymentMethod = {
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

### `components.CardPaymentTransferPaymentMethod`

```typescript
const value: components.CardPaymentTransferPaymentMethod = {
  paymentMethodID: "be14aef0-f6c7-4171-9954-266baf7860db",
  paymentMethodType: "card-payment",
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
};
```

### `components.PushToCardTransferPaymentMethod`

```typescript
const value: components.PushToCardTransferPaymentMethod = {
  paymentMethodID: "c13e69e8-e3a7-40df-aca1-8b12be821c92",
  paymentMethodType: "push-to-card",
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
};
```

### `components.PullFromCardTransferPaymentMethod`

```typescript
const value: components.PullFromCardTransferPaymentMethod = {
  paymentMethodID: "f6d316e5-02a8-4883-90f1-cecaefee82c6",
  paymentMethodType: "pull-from-card",
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
};
```

### `components.ApplePayTransferPaymentMethod`

```typescript
const value: components.ApplePayTransferPaymentMethod = {
  paymentMethodID: "40bfa552-4183-4629-87dd-5887e9bd1d0e",
  paymentMethodType: "apple-pay",
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
};
```

### `components.CardPresentPaymentTransferPaymentMethod`

```typescript
const value: components.CardPresentPaymentTransferPaymentMethod = {
  paymentMethodID: "5df9f94b-81ff-48a9-a05a-6f8272a3295e",
  paymentMethodType: "card-present-payment",
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
};
```

### `components.InstantBankCreditTransferPaymentMethod`

```typescript
const value: components.InstantBankCreditTransferPaymentMethod = {
  paymentMethodID: "3680ded1-cdd4-44d5-ab88-2744479aa35e",
  paymentMethodType: "instant-bank-credit",
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

