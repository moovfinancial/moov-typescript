# PaymentMethod

A method of moving money


## Supported Types

### `components.MoovWalletPaymentMethod`

```typescript
const value: components.MoovWalletPaymentMethod = {
  paymentMethodID: "6e1096ce-4679-4fb6-94f2-bea635baedde",
  paymentMethodType: "moov-wallet",
  wallet: "<value>",
};
```

### `components.AchDebitFundPaymentMethod`

```typescript
const value: components.AchDebitFundPaymentMethod = {
  paymentMethodID: "568a4064-feda-458d-81c0-dc0a822c9fff",
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
  paymentMethodType: "ach-debit-fund",
};
```

### `components.AchDebitCollectPaymentMethod`

```typescript
const value: components.AchDebitCollectPaymentMethod = {
  paymentMethodID: "f37c3921-1506-4a61-a142-f2c998f5c86f",
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
  paymentMethodType: "ach-debit-collect",
};
```

### `components.AchCreditStandardPaymentMethod`

```typescript
const value: components.AchCreditStandardPaymentMethod = {
  paymentMethodID: "16cbe4c7-9ffd-45ea-b60c-8cbc4c87a014",
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
  paymentMethodType: "ach-credit-standard",
};
```

### `components.AchCreditSameDayPaymentMethod`

```typescript
const value: components.AchCreditSameDayPaymentMethod = {
  paymentMethodID: "25055fd6-0da2-4f1d-b46c-af91ecb062db",
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
  paymentMethodType: "ach-credit-same-day",
};
```

### `components.RtpCreditPaymentMethod`

```typescript
const value: components.RtpCreditPaymentMethod = {
  paymentMethodID: "fcf9005d-df10-4e48-9f6a-6c83448bfbc2",
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
  paymentMethodType: "rtp-credit",
};
```

### `components.CardPaymentPaymentMethod`

```typescript
const value: components.CardPaymentPaymentMethod = {
  paymentMethodID: "6a445c91-15cb-4bc4-888b-f4ca9cf02c18",
  card: {
    cardID: "01234567-89ab-cdef-0123-456789abcdef",
    fingerprint:
      "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
    brand: "Visa",
    cardType: "credit",
    cardCategory: "CLASSIC",
    lastFourCardNumber: "1234",
    bin: "123456",
    expiration: {
      month: "01",
      year: "21",
    },
    holderName: "Jules Jackson",
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
    issuer: "GRINGOTTS BANK",
    issuerCountry: "US",
    issuerURL: "HTTPS://WWW.EXAMPLE.COM/",
    issuerPhone: "8185551212",
    commercial: false,
    regulated: false,
    cardOnFile: true,
    merchantAccountID: "01234567-89ab-cdef-0123-456789abcdef",
    cardAccountUpdater: {
      updatedOn: new Date("2024-05-06T12:20:38.184Z"),
      updateType: "number-update",
    },
    domesticPushToCard: "standard",
    domesticPullFromCard: "supported",
    paymentMethods: [
      {
        paymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
        paymentMethodType: "card-payment",
      },
      {
        paymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
        paymentMethodType: "push-to-card",
      },
      {
        paymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
        paymentMethodType: "pull-from-card",
      },
    ],
  },
  paymentMethodType: "card-payment",
};
```

### `components.PushToCardPaymentMethod`

```typescript
const value: components.PushToCardPaymentMethod = {
  paymentMethodID: "4b0d788a-5152-485f-af99-fec5537fe10e",
  card: {
    cardID: "01234567-89ab-cdef-0123-456789abcdef",
    fingerprint:
      "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
    brand: "Visa",
    cardType: "credit",
    cardCategory: "CLASSIC",
    lastFourCardNumber: "1234",
    bin: "123456",
    expiration: {
      month: "01",
      year: "21",
    },
    holderName: "Jules Jackson",
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
    issuer: "GRINGOTTS BANK",
    issuerCountry: "US",
    issuerURL: "HTTPS://WWW.EXAMPLE.COM/",
    issuerPhone: "8185551212",
    commercial: false,
    regulated: false,
    cardOnFile: true,
    merchantAccountID: "01234567-89ab-cdef-0123-456789abcdef",
    cardAccountUpdater: {
      updatedOn: new Date("2024-05-06T12:20:38.184Z"),
      updateType: "number-update",
    },
    domesticPushToCard: "standard",
    domesticPullFromCard: "supported",
    paymentMethods: [
      {
        paymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
        paymentMethodType: "card-payment",
      },
      {
        paymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
        paymentMethodType: "push-to-card",
      },
      {
        paymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
        paymentMethodType: "pull-from-card",
      },
    ],
  },
  paymentMethodType: "push-to-card",
};
```

### `components.PullFromCardPaymentMethod`

```typescript
const value: components.PullFromCardPaymentMethod = {
  paymentMethodID: "3aa14032-3a01-4254-94cf-8f61647a7eeb",
  card: {
    cardID: "01234567-89ab-cdef-0123-456789abcdef",
    fingerprint:
      "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
    brand: "Visa",
    cardType: "credit",
    cardCategory: "CLASSIC",
    lastFourCardNumber: "1234",
    bin: "123456",
    expiration: {
      month: "01",
      year: "21",
    },
    holderName: "Jules Jackson",
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
    issuer: "GRINGOTTS BANK",
    issuerCountry: "US",
    issuerURL: "HTTPS://WWW.EXAMPLE.COM/",
    issuerPhone: "8185551212",
    commercial: false,
    regulated: false,
    cardOnFile: true,
    merchantAccountID: "01234567-89ab-cdef-0123-456789abcdef",
    cardAccountUpdater: {
      updatedOn: new Date("2024-05-06T12:20:38.184Z"),
      updateType: "number-update",
    },
    domesticPushToCard: "standard",
    domesticPullFromCard: "supported",
    paymentMethods: [
      {
        paymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
        paymentMethodType: "card-payment",
      },
      {
        paymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
        paymentMethodType: "push-to-card",
      },
      {
        paymentMethodID: "01234567-89ab-cdef-0123-456789abcdef",
        paymentMethodType: "pull-from-card",
      },
    ],
  },
  paymentMethodType: "pull-from-card",
};
```

### `components.ApplePayPaymentMethod`

```typescript
const value: components.ApplePayPaymentMethod = {
  paymentMethodID: "26b41eb9-cd7e-4e49-a88f-4fe7dca53ad0",
  paymentMethodType: "apple-pay",
  applePay: "<value>",
};
```

