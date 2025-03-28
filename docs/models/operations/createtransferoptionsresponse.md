# CreateTransferOptionsResponse

## Example Usage

```typescript
import { CreateTransferOptionsResponse } from "@moovio/sdk/models/operations";

let value: CreateTransferOptionsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    sourceOptions: [
      {
        paymentMethodID: "eb830c43-2c9a-4eea-8f30-e4f34ed19219",
        paymentMethodType: "moov-wallet",
        wallet: {
          walletID: "79fe98ae-f0fc-41ca-9e78-d7835409dc39",
        },
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "50ea2367-58ea-45db-b981-9681c8d3f915",
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