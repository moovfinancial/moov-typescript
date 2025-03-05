# PaymentMethod

A method of moving money


## Supported Types

### `components.MoovWalletPaymentMethod`

```typescript
const value: components.MoovWalletPaymentMethod = {
  paymentMethodID: "ddb243d7-204f-40e0-9a57-354bd6d0c8d3",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "bd7d8fe6-fc8f-4b31-84b8-6c0db2600f75",
  },
};
```

### `components.AchDebitFundPaymentMethod`

```typescript
const value: components.AchDebitFundPaymentMethod = {
  paymentMethodID: "cb0c1f57-0d48-4e2d-b8ed-710d7ae4e04c",
  paymentMethodType: "ach-debit-fund",
  bankAccount: {
    bankAccountID: "f4cf840c-2646-4e6e-8c45-59afe908680f",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "general-ledger",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-01-21T14:13:42.501Z"),
  },
};
```

### `components.AchDebitCollectPaymentMethod`

```typescript
const value: components.AchDebitCollectPaymentMethod = {
  paymentMethodID: "6ce24716-4e3b-43a9-87d3-7f2841d99829",
  paymentMethodType: "ach-debit-collect",
  bankAccount: {
    bankAccountID: "a0344c41-1263-4324-b8fc-2cbe6db46dc3",
    fingerprint: "<value>",
    status: "errored",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "savings",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-08-16T02:43:11.535Z"),
  },
};
```

### `components.AchCreditStandardPaymentMethod`

```typescript
const value: components.AchCreditStandardPaymentMethod = {
  paymentMethodID: "dbb49043-6b42-4de7-9346-c89f17782269",
  paymentMethodType: "ach-credit-standard",
  bankAccount: {
    bankAccountID: "7f077b4c-61a0-4b09-9db9-655682ea5fd9",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "savings",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2023-09-27T06:28:40.601Z"),
  },
};
```

### `components.AchCreditSameDayPaymentMethod`

```typescript
const value: components.AchCreditSameDayPaymentMethod = {
  paymentMethodID: "9b48cab3-a434-4573-b5e2-30b870fddec2",
  paymentMethodType: "ach-credit-same-day",
  bankAccount: {
    bankAccountID: "eb4079f2-16c5-4aec-b170-2c2892e0e1e5",
    fingerprint: "<value>",
    status: "verified",
    holderName: "<value>",
    holderType: "business",
    bankName: "<value>",
    bankAccountType: "loan",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2024-07-29T21:08:39.343Z"),
  },
};
```

### `components.RtpCreditPaymentMethod`

```typescript
const value: components.RtpCreditPaymentMethod = {
  paymentMethodID: "6600b62d-a755-45e6-a025-2df570336d6b",
  paymentMethodType: "rtp-credit",
  bankAccount: {
    bankAccountID: "a3031b9c-64d9-47e5-b642-9eaadb6c1d88",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "individual",
    bankName: "<value>",
    bankAccountType: "savings",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2025-02-18T00:00:07.712Z"),
  },
};
```

### `components.CardPaymentPaymentMethod`

```typescript
const value: components.CardPaymentPaymentMethod = {
  paymentMethodID: "144b0561-78fd-4e42-8a39-317a186423e0",
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
    issuer: "jcb",
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
  paymentMethodID: "a634abfb-638b-4103-a6a0-8456761276fc",
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
    issuer: "jcb",
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
  paymentMethodID: "0a98cc32-a570-46fb-ada9-f7c31257e9a6",
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
    issuer: "discover",
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
  paymentMethodID: "98411917-e9f4-4ae5-a8d5-0f61b521bf6c",
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

