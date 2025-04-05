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
        paymentMethodID: "48a0652e-c9a9-4fa3-845b-03c2d5c8eaf2",
        paymentMethodType: "moov-wallet",
        wallet: {
          walletID: "0844f0b7-4336-47ec-96d2-031d80a5bd58",
        },
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "a2073139-5807-4806-bc58-9facd0aaf391",
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
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.TransferOptions](../../models/components/transferoptions.md) | :heavy_check_mark:                                                       | N/A                                                                      |