# WebhookTransferPaymentMethodDetails

Payment method details for the source or destination of a transfer.

## Example Usage

```typescript
import { WebhookTransferPaymentMethodDetails } from "@moovio/sdk/models/components";

let value: WebhookTransferPaymentMethodDetails = {
  accountID: "<id>",
  paymentMethodID: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `accountID`        | *string*           | :heavy_check_mark: | N/A                |
| `paymentMethodID`  | *string*           | :heavy_check_mark: | N/A                |