# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "moov-sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "dc35d355-c019-46a4-9ec1-cffb194fb9b7",
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
  destinationOptions: [
    {
      paymentMethodID: "506caf1e-5761-43b0-920d-92cfee094952",
      paymentMethodType: "apple-pay",
      applePay: "<value>",
    },
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `sourceOptions`              | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |
| `destinationOptions`         | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |