# TransferOptions

## Example Usage

```typescript
import { TransferOptions } from "@moovio/sdk/models/components";

let value: TransferOptions = {
  sourceOptions: [
    {
      paymentMethodID: "dee3a74a-92ce-4415-8d7c-9f8c67448a00",
      paymentMethodType: "ach-credit-standard",
      bankAccount: {
        bankAccountID: "898784ed-8993-42e6-aebb-2ec0e8bd35c5",
        fingerprint: "<value>",
        status: "errored",
        holderName: "<value>",
        holderType: "business",
        bankName: "<value>",
        bankAccountType: "general-ledger",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2025-10-10T02:00:55.209Z"),
      },
    },
  ],
  destinationOptions: [
    {
      paymentMethodID: "6cca29f4-1090-4eee-ba08-110189cc4780",
      paymentMethodType: "ach-credit-standard",
      bankAccount: {
        bankAccountID: "793c5a8d-8d55-4bb1-8423-5f5715451a1b",
        fingerprint: "<value>",
        status: "pending",
        holderName: "<value>",
        holderType: "individual",
        bankName: "<value>",
        bankAccountType: "loan",
        routingNumber: "<value>",
        lastFourAccountNumber: "<value>",
        updatedOn: new Date("2024-03-03T05:31:49.356Z"),
      },
    },
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `sourceOptions`              | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |
| `destinationOptions`         | *components.PaymentMethod*[] | :heavy_minus_sign:           | N/A                          |