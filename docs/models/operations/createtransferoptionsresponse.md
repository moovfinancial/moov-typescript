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
        paymentMethodType: "ach-credit-standard",
      },
    ],
    destinationOptions: [
      {
        paymentMethodID: "d224f18c-dff8-438b-a74d-d898ce0f565d",
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
        paymentMethodType: "rtp-credit",
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