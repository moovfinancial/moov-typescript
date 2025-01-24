# PaymentMethod

A method of moving money


## Supported Types

### `components.MoovWalletPaymentMethod`

```typescript
const value: components.MoovWalletPaymentMethod = {
  paymentMethodID: "ebb49cc5-cb2d-4777-8997-da66c530ee15",
  paymentMethodType: "moov-wallet",
  wallet: "<value>",
};
```

### `components.AchDebitFundPaymentMethod`

```typescript
const value: components.AchDebitFundPaymentMethod = {
  paymentMethodID: "1e0f1d95-5c5a-487e-b8db-0c3e0517d425",
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
  paymentMethodID: "231b64b5-bd3f-4242-a578-de3917557b1e",
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
  paymentMethodID: "2f8f3844-9ecb-48e7-8dd3-c0538b18f3a9",
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
  paymentMethodID: "7b0e803f-9147-4067-b39c-39afcd72f271",
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
  paymentMethodID: "fb544282-5ab0-46ad-87f4-074d34cb8b60",
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
  paymentMethodID: "810fd20f-42b1-44fa-886c-2fd90be851ce",
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
  paymentMethodID: "c0f984e4-dfc8-4177-b365-27480ed8df1a",
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
  paymentMethodID: "f92903f5-a4fb-45c1-963a-16485b0a34cf",
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
  paymentMethodID: "d1ac26e1-096c-4e46-a79f-b64f2bea635b",
  paymentMethodType: "apple-pay",
  applePay: "<value>",
};
```

