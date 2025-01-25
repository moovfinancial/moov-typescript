# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "8be69b0c-6a7b-4b3a-ad3c-af4244cba3df",
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
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "84453ed7-5f38-4039-aa9d-fc7d1a82f59e",
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
    },
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `sourceOptions`              | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |
| `destinationOptions`         | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |