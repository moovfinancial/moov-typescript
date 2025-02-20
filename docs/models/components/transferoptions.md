# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "92161ac7-1936-43ad-bdc8-8308b6a556d3",
      paymentMethodType: "ach-debit-collect",
      bankAccount: {
        bankAccountID: "47476540-c743-42f9-b44f-a2c6a921c3b0",
        fingerprint: "<value>",
        status: "verificationFailed",
        holderName: "<value>",
        holderType: "individual",
        bankName: "<value>",
        bankAccountType: "loan",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2024-03-25T12:45:05.316Z"),
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "0e8bf610-7957-422e-9285-f134512d72eb",
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
        issuer: "visa",
        issuerCountry: "<value>",
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