# PaymentMethod

A method of moving money


## Supported Types

### `components.MoovWalletPaymentMethod`

```typescript
const value: components.MoovWalletPaymentMethod = {
  paymentMethodID: "230e5787-9448-4b31-b468-95e051e5a131",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "5b8fabc3-cfb4-4c3b-a98d-557a1ffd26cc",
  },
};
```

### `components.AchDebitFundPaymentMethod`

```typescript
const value: components.AchDebitFundPaymentMethod = {
  paymentMethodID: "bb2c562b-2639-464b-ad21-86a58fa17e0a",
  paymentMethodType: "ach-debit-fund",
  bankAccount: {
    bankAccountID: "0255092d-b50c-4d7d-99f0-8306c0e88c58",
    fingerprint: "<value>",
    status: "verificationFailed",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2023-12-20T18:43:52.800Z"),
  },
};
```

### `components.AchDebitCollectPaymentMethod`

```typescript
const value: components.AchDebitCollectPaymentMethod = {
  paymentMethodID: "6a8ac579-1154-487e-add5-20b146822c84",
  paymentMethodType: "ach-debit-collect",
  bankAccount: {
    bankAccountID: "d8ca0973-2561-44bc-acea-117f00074966",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "general-ledger",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-01-17T15:48:57.768Z"),
  },
};
```

### `components.AchCreditStandardPaymentMethod`

```typescript
const value: components.AchCreditStandardPaymentMethod = {
  paymentMethodID: "927a0836-74af-4b7a-9c60-2557fb5ac2b9",
  paymentMethodType: "ach-credit-standard",
  bankAccount: {
    bankAccountID: "4bccd718-00ba-431d-abf1-3b4095208294",
    fingerprint: "<value>",
    status: "verificationFailed",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-06-22T05:04:48.878Z"),
  },
};
```

### `components.AchCreditSameDayPaymentMethod`

```typescript
const value: components.AchCreditSameDayPaymentMethod = {
  paymentMethodID: "80bca603-5db2-41f1-989e-6f05d94de12a",
  paymentMethodType: "ach-credit-same-day",
  bankAccount: {
    bankAccountID: "349b35d9-b961-4381-ae4e-e76a3fc93921",
    fingerprint: "<value>",
    status: "verificationFailed",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "savings",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-03-09T11:19:15.484Z"),
  },
};
```

### `components.RtpCreditPaymentMethod`

```typescript
const value: components.RtpCreditPaymentMethod = {
  paymentMethodID: "d7c83ad0-ead3-413b-bcdf-21ca277acb5b",
  paymentMethodType: "rtp-credit",
  bankAccount: {
    bankAccountID: "2af545fc-2c96-45d6-9e1c-b1b0314b55a3",
    fingerprint: "<value>",
    status: "new",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "general-ledger",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2023-11-26T15:27:49.166Z"),
  },
};
```

### `components.CardPaymentPaymentMethod`

```typescript
const value: components.CardPaymentPaymentMethod = {
  paymentMethodID: "b12ab105-3914-4346-968b-1d169e449672",
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

### `components.PushToCardPaymentMethod`

```typescript
const value: components.PushToCardPaymentMethod = {
  paymentMethodID: "2b5fb00d-a820-4b04-a7e1-242bd9443f75",
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

### `components.PullFromCardPaymentMethod`

```typescript
const value: components.PullFromCardPaymentMethod = {
  paymentMethodID: "df50221c-af65-4d73-8bbc-9d4ad696b815",
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

### `components.ApplePayPaymentMethod`

```typescript
const value: components.ApplePayPaymentMethod = {
  paymentMethodID: "9ac77548-a29c-498e-832c-25f2675306d6",
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

### `components.CardPresentPaymentPaymentMethod`

```typescript
const value: components.CardPresentPaymentPaymentMethod = {
  paymentMethodID: "70d0dcac-2f06-402e-b2e9-61437f0e2872",
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

