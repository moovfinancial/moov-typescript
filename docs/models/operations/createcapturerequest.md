# CreateCaptureRequest

## Example Usage

```typescript
import { CreateCaptureRequest } from "@moovio/sdk/models/operations";

let value: CreateCaptureRequest = {
  xIdempotencyKey: "<value>",
  accountID: "<id>",
  transferID: "<id>",
  createCapture: {
    destinationPaymentMethodID: "<id>",
    amount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    description: "Pay Instructor for May 15 Class",
    metadata: {
      "optional": "metadata",
    },
    lineItems: {
      items: [],
    },
    amountDetails: {
      tip: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      tax: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      surcharge: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    facilitatorFeeAmount: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `xIdempotencyKey`                                                    | *string*                                                             | :heavy_check_mark:                                                   | Prevents duplicate captures from being created.                      |
| `accountID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The merchant's Moov account ID.                                      |
| `transferID`                                                         | *string*                                                             | :heavy_check_mark:                                                   | Identifier for the transfer.                                         |
| `createCapture`                                                      | [components.CreateCapture](../../models/components/createcapture.md) | :heavy_check_mark:                                                   | N/A                                                                  |