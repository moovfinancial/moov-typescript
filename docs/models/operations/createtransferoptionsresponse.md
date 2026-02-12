# CreateTransferOptionsResponse

## Example Usage

```typescript
import { CreateTransferOptionsResponse } from "@moovio/sdk/models/operations";

let value: CreateTransferOptionsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    sourceOptions: [
      {
        paymentMethodID: "<id>",
        paymentMethodType: "ach-credit-standard",
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
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.TransferOptions](../../models/components/transferoptions.md) | :heavy_check_mark:                                                       | N/A                                                                      |