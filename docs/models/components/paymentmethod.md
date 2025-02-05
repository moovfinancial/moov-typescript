# PaymentMethod

A method of moving money


## Supported Types

### `components.MoovWalletPaymentMethod`

```typescript
const value: components.MoovWalletPaymentMethod = {
  paymentMethodID: "cf2e0aae-328f-44c5-94ac-0986c586772c",
  paymentMethodType: "moov-wallet",
  wallet: "<value>",
};
```

### `components.AchDebitFundPaymentMethod`

```typescript
const value: components.AchDebitFundPaymentMethod = {
  paymentMethodID: "84ddf5ed-92bf-4d10-b7eb-faec812d594e",
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
  paymentMethodID: "fe99f5a7-5e97-4028-bf7a-de52f8e41e67",
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
  paymentMethodID: "69b34bc3-406e-46c0-a9ff-90db0cb188e7",
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
  paymentMethodID: "88dfe3d5-0817-4bd5-bd09-5833dcd7a730",
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
  paymentMethodID: "bc1e2dcb-a3a1-4d37-9ec0-78d916af6f87",
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
  paymentMethodID: "966f7c83-fe2e-439e-9934-ab942a322bbe",
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
  paymentMethodID: "9e37ff87-f938-4986-82d1-220de1762ddb",
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
  paymentMethodID: "43d7204f-0e0a-4573-b54b-d6d0c8d36bd7",
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
  paymentMethodID: "8fe6fc8f-b314-4b86-bc0d-b2600f753cb0",
  paymentMethodType: "apple-pay",
  applePay: "<value>",
};
```

