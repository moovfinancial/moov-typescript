# ListPaymentMethodsResponse

## Example Usage

```typescript
import { ListPaymentMethodsResponse } from "@moovio/sdk/models/operations";

let value: ListPaymentMethodsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      paymentMethodID: "ff572b6c-905c-4baa-89a9-8c5763505613",
      paymentMethodType: "moov-wallet",
      wallet: {
        walletID: "352b5192-026b-4a0c-b5a0-60d2a42e9e4d",
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