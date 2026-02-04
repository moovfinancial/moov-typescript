# ListPaymentMethodsResponse

## Example Usage

```typescript
import { ListPaymentMethodsResponse } from "@moovio/sdk/models/operations";

let value: ListPaymentMethodsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [
    {
      paymentMethodID: "cc13de08-d5fe-4c1b-b902-cf2e8e3a5b55",
      paymentMethodType: "moov-wallet",
      wallet: {
        walletID: "3e095e99-464f-4d24-b1e1-1dd152488431",
        partnerAccountID: "58b17cf8-0ee7-46b8-a22d-cb69ead37220",
        walletType: "default",
      },
    },
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `headers`                    | Record<string, *string*[]>   | :heavy_check_mark:           | N/A                          |
| `result`                     | *components.PaymentMethod*[] | :heavy_check_mark:           | N/A                          |