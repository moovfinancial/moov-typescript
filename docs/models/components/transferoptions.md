# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "0804e676-b681-4b8f-8d55-a78f19a39c4f",
      paymentMethodType: "apple-pay",
      applePay: "<value>",
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "b787051c-76ca-4627-936e-460e1afe0416",
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
      paymentMethodType: "ach-credit-same-day",
    },
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `sourceOptions`              | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |
| `destinationOptions`         | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |