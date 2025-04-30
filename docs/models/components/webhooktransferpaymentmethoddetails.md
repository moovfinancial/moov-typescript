# WebhookTransferPaymentMethodDetails

Payment method details for the source or destination of a transfer.

## Example Usage

```typescript
import { WebhookTransferPaymentMethodDetails } from "@moovio/sdk/models/components";

let value: WebhookTransferPaymentMethodDetails = {
  accountID: "82c59560-1f7a-4eee-9fb2-81aa77ed5dc4",
  paymentMethodID: "35c591be-c6cf-4b37-892c-2ba59b5b0f36",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `accountID`        | *string*           | :heavy_check_mark: | N/A                |
| `paymentMethodID`  | *string*           | :heavy_check_mark: | N/A                |