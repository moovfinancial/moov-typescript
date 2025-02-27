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
        paymentMethodID: "33b24130-b667-4459-a379-2486b37d2e77",
        paymentMethodType: "ach-credit-standard",
        bankAccount: {
          bankAccountID: "8d224f18-cdff-4838-bb74-dd898ce0f565",
          fingerprint: "<value>",
          status: "pending",
          holderName: "<value>",
          holderType: "individual",
          bankName: "<value>",
          bankAccountType: "savings",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2023-01-03T23:43:26.209Z"),
        },
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "31a382cf-1d70-487e-95c2-68233bf28200",
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