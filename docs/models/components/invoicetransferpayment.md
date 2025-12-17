# InvoiceTransferPayment

## Example Usage

```typescript
import { InvoiceTransferPayment } from "@moovio/sdk/models/components";

let value: InvoiceTransferPayment = {
  paymentType: "transfer",
  transferID: "bb6e4b47-df52-4ec2-b787-c88cfbebb7d9",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `paymentType`                                                    | [components.PaymentType](../../models/components/paymenttype.md) | :heavy_check_mark:                                               | N/A                                                              |
| `transferID`                                                     | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |