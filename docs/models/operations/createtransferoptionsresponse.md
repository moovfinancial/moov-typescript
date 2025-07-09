# CreateTransferOptionsResponse

## Example Usage

```typescript
import { CreateTransferOptionsResponse } from "@moovio/sdk/models/operations";

let value: CreateTransferOptionsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    sourceOptions: [
      {
        paymentMethodID: "79f626ff-61a2-40f8-844e-688f5d56bd3b",
        paymentMethodType: "ach-debit-collect",
        bankAccount: {
          bankAccountID: "ff5fe8cb-b736-4d3b-827e-cd3aabf157fe",
          fingerprint: "<value>",
          status: "new",
          holderName: "<value>",
          holderType: "individual",
          bankName: "<value>",
          bankAccountType: "loan",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2025-03-02T11:13:45.697Z"),
        },
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "31dc9d69-d439-4e04-ab75-347da2a7de71",
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
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.TransferOptions](../../models/components/transferoptions.md) | :heavy_check_mark:                                                       | N/A                                                                      |