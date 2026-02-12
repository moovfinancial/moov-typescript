# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "<id>",
      paymentMethodType: "instant-bank-credit",
      bankAccount: {
        bankAccountID: "<id>",
        fingerprint: "<value>",
        status: "verified",
        holderName: "<value>",
        holderType: "business",
        bankName: "<value>",
        bankAccountType: "checking",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2024-09-12T06:36:19.592Z"),
      },
    },
  ],
  destinationOptions: [
    {
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
    },
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `sourceOptions`              | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |
| `destinationOptions`         | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |