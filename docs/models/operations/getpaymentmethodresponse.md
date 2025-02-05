# GetPaymentMethodResponse

## Example Usage

```typescript
import { GetPaymentMethodResponse } from "@moovio/sdk/models/operations";

let value: GetPaymentMethodResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    paymentMethodID: "2937d4a7-15df-4d25-9d8c-c157fe6168e4",
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
  },
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `headers`                  | Record<string, *string*[]> | :heavy_check_mark:         | N/A                        |
| `result`                   | *components.PaymentMethod* | :heavy_check_mark:         | N/A                        |