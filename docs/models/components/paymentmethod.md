# PaymentMethod

A method of moving money


## Supported Types

### `components.MoovWalletPaymentMethod`

```typescript
const value: components.MoovWalletPaymentMethod = {
  paymentMethodID: "e230b870-fdde-4c2f-8eb4-079f216c5aec",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "702c2892-e0e1-4e5c-96bd-86600b62da75",
  },
};
```

### `components.AchDebitFundPaymentMethod`

```typescript
const value: components.AchDebitFundPaymentMethod = {
  paymentMethodID: "5e60252d-f570-4336-ad6b-8a3031b9c64d",
  paymentMethodType: "ach-debit-fund",
  bankAccount: {
    bankAccountID: "7e56429e-aadb-46c1-8d88-ea14b144b056",
    fingerprint: "<value>",
    status: "verificationFailed",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-08-15T09:01:20.024Z"),
  },
};
```

### `components.AchDebitCollectPaymentMethod`

```typescript
const value: components.AchDebitCollectPaymentMethod = {
  paymentMethodID: "e42a3931-7a18-4642-a3e0-28a634abfb63",
  paymentMethodType: "ach-debit-collect",
  bankAccount: {
    bankAccountID: "b1036a08-4567-4612-976f-c980a98cc32a",
    fingerprint: "<value>",
    status: "verificationFailed",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "savings",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-10-29T06:23:43.138Z"),
  },
};
```

### `components.AchCreditStandardPaymentMethod`

```typescript
const value: components.AchCreditStandardPaymentMethod = {
  paymentMethodID: "bda9f7c3-1257-4e9a-a6a6-98411917e9f4",
  paymentMethodType: "ach-credit-standard",
  bankAccount: {
    bankAccountID: "e58d50f6-1b52-41bf-86ca-6060f69f92f3",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-08-30T05:51:37.577Z"),
  },
};
```

### `components.AchCreditSameDayPaymentMethod`

```typescript
const value: components.AchCreditSameDayPaymentMethod = {
  paymentMethodID: "cc611fd5-deee-42c0-bc9b-8900c4cb9116",
  paymentMethodType: "ach-credit-same-day",
  bankAccount: {
    bankAccountID: "36a70be9-9dd2-46db-8d27-bb1ba540646b",
    fingerprint: "<value>",
    status: "verificationFailed",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-08-04T14:21:14.678Z"),
  },
};
```

### `components.RtpCreditPaymentMethod`

```typescript
const value: components.RtpCreditPaymentMethod = {
  paymentMethodID: "e11a8ec8-1174-4fa4-b513-5a2a1ea92b3c",
  paymentMethodType: "rtp-credit",
  bankAccount: {
    bankAccountID: "fc58a4c5-20a4-4dc1-88fd-d4b5d1aa4ae9",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "savings",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-01-20T02:39:15.832Z"),
  },
};
```

### `components.CardPaymentPaymentMethod`

```typescript
const value: components.CardPaymentPaymentMethod = {
  paymentMethodID: "f8cf50cb-44b2-4dd9-83f3-47870d0ede52",
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
    issuer: "mastercard",
    issuerCountry: "<value>",
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
  paymentMethodID: "2234398a-ad08-46c3-8943-51be0a9ea692",
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
    issuer: "diners_club",
    issuerCountry: "<value>",
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
  paymentMethodID: "7418b1b0-bf71-4428-82f6-6191441d1743",
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
    issuer: "mastercard",
    issuerCountry: "<value>",
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
  paymentMethodID: "c65b4d40-7474-4ff9-be5c-c5b133a344ff",
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
  paymentMethodID: "7757242e-b265-40b7-8527-484469d45af3",
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

