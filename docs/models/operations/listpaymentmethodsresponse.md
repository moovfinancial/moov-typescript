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
      paymentMethodID: "ba92c22c-5545-45b3-b5ce-918a5dc92be4",
      bankAccount: {
        bankAccountID: "833fa3ef-14d3-4c97-ba45-6af66f739832",
        fingerprint:
          "dd4cbfe5fbaf47b392770b5b595bec604fd99394749b7d017153e2b9cfbea40e",
        status: "new",
        holderName: "John Doe",
        holderType: "individual",
        bankName: "Gringotts Bank",
        bankAccountType: "checking",
        routingNumber: "123456780",
        lastFourAccountNumber: "6789",
        updatedOn: new Date("2024-11-26T22:37:06Z"),
        statusReason: "bank-account-created",
      },
      paymentMethodType: "ach-debit-collect",
    },
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `headers`                    | Record<string, *string*[]>   | :heavy_check_mark:           | N/A                          |
| `result`                     | *components.PaymentMethod*[] | :heavy_check_mark:           | N/A                          |