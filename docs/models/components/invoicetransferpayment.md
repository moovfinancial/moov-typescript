# InvoiceTransferPayment

## Example Usage

```typescript
import { InvoiceTransferPayment } from "@moovio/sdk/models/components";

let value: InvoiceTransferPayment = {
  paymentType: "transfer",
  transferID: "9dd9928c-457e-4657-8a0e-c33437e452cc",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `paymentType`      | *"transfer"*       | :heavy_check_mark: | N/A                |
| `transferID`       | *string*           | :heavy_check_mark: | N/A                |