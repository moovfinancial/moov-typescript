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
        paymentMethodID: "2820066a-6319-4360-a3a1-add27ebd67e6",
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
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "b9789eab-f135-4f39-8144-b1c4b56218a1",
        paymentMethodType: "ach-credit-same-day",
        bankAccount: {
          bankAccountID: "023b1a62-f840-4593-b940-65386f953aea",
          fingerprint: "<value>",
          status: "pending",
          holderName: "<value>",
          holderType: "business",
          bankName: "<value>",
          bankAccountType: "savings",
          routingNumber: "<value>",
          lastFourAccountNumber: "<value>",
          updatedOn: new Date("2025-04-26T21:45:53.740Z"),
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