# CreateTransferDestination

The final stage of a transfer and the ultimate recipient of the funds.

## Example Usage

```typescript
import { CreateTransferDestination } from "@moovio/sdk/models/components";

let value: CreateTransferDestination = {
  paymentMethodID: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `paymentMethodID`  | *string*           | :heavy_check_mark: | N/A                |