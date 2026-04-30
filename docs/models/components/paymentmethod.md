# PaymentMethod

A method of moving money


## Supported Types

### `components.MoovWalletPaymentMethod`

```typescript
const value: components.MoovWalletPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "moov-wallet",
  wallet: {
    walletID: "<id>",
    partnerAccountID: "<id>",
    walletType: "default",
  },
};
```

### `components.AchDebitFundPaymentMethod`

```typescript
const value: components.AchDebitFundPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "ach-debit-fund",
  bankAccount: {
    bankAccountID: "<id>",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "guest",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2026-04-28T07:47:07.806Z"),
  },
};
```

### `components.AchDebitCollectPaymentMethod`

```typescript
const value: components.AchDebitCollectPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "ach-debit-collect",
  bankAccount: {
    bankAccountID: "<id>",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "guest",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2026-04-28T07:47:07.806Z"),
  },
};
```

### `components.AchCreditStandardPaymentMethod`

```typescript
const value: components.AchCreditStandardPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "ach-credit-standard",
  bankAccount: {
    bankAccountID: "<id>",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "guest",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2026-04-28T07:47:07.806Z"),
  },
};
```

### `components.AchCreditSameDayPaymentMethod`

```typescript
const value: components.AchCreditSameDayPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "ach-credit-same-day",
  bankAccount: {
    bankAccountID: "<id>",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "guest",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2026-04-28T07:47:07.806Z"),
  },
};
```

### `components.RtpCreditPaymentMethod`

```typescript
const value: components.RtpCreditPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "rtp-credit",
  bankAccount: {
    bankAccountID: "<id>",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "guest",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2026-04-28T07:47:07.806Z"),
  },
};
```

### `components.CardPaymentPaymentMethod`

```typescript
const value: components.CardPaymentPaymentMethod = {
  paymentMethodID: "<id>",
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
  paymentMethodID: "<id>",
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
  paymentMethodID: "<id>",
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
  paymentMethodID: "<id>",
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
  paymentMethodID: "<id>",
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

### `components.InstantBankCreditPaymentMethod`

```typescript
const value: components.InstantBankCreditPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "instant-bank-credit",
  bankAccount: {
    bankAccountID: "<id>",
    fingerprint: "<value>",
    status: "pending",
    holderName: "<value>",
    holderType: "guest",
    bankName: "<value>",
    bankAccountType: "checking",
    routingNumber: "<value>",
    lastFourAccountNumber: "<value>",
    updatedOn: new Date("2026-04-28T07:47:07.806Z"),
  },
};
```

### `components.PushToApplePayPaymentMethod`

```typescript
const value: components.PushToApplePayPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "push-to-apple-pay",
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

### `components.PullFromApplePayPaymentMethod`

```typescript
const value: components.PullFromApplePayPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "pull-from-apple-pay",
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

### `components.GooglePayPaymentMethod`

```typescript
const value: components.GooglePayPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "google-pay",
  googlePay: {
    brand: "Visa",
    cardDetails: "1234",
    fingerprint:
      "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
    expiration: {
      month: "01",
      year: "21",
    },
    issuerCountry: "US",
  },
};
```

### `components.PushToGooglePayPaymentMethod`

```typescript
const value: components.PushToGooglePayPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "push-to-google-pay",
  googlePay: {
    brand: "Visa",
    cardDetails: "1234",
    fingerprint:
      "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
    expiration: {
      month: "01",
      year: "21",
    },
    issuerCountry: "US",
  },
};
```

### `components.PullFromGooglePayPaymentMethod`

```typescript
const value: components.PullFromGooglePayPaymentMethod = {
  paymentMethodID: "<id>",
  paymentMethodType: "pull-from-google-pay",
  googlePay: {
    brand: "Visa",
    cardDetails: "1234",
    fingerprint:
      "9948962d92a1ce40c9f918cd9ece3a22bde62fb325a2f1fe2e833969de672ba3",
    expiration: {
      month: "01",
      year: "21",
    },
    issuerCountry: "US",
  },
};
```

