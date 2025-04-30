# WebhookDataTransferUpdated

## Example Usage

```typescript
import { WebhookDataTransferUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataTransferUpdated = {
  accountID: "e843c69f-8f94-40f2-b90e-91e23943faf0",
  transferID: "91cde62d-37f0-4fc2-9b91-702c0c2bfeac",
  status: "canceled",
  source: {
    accountID: "1f20bfed-599c-4fa0-b2d1-551596a1bf08",
    paymentMethodID: "36bed980-30f6-4481-9cdb-526e80897218",
  },
  destination: {
    accountID: "cbc83152-eefa-4c1e-aff0-3457a11691e4",
    paymentMethodID: "40927aa6-214e-46a6-b97f-a8bc427fe88f",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The accountID which facilitated the transfer.                                                                    |
| `transferID`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `status`                                                                                                         | [components.TransferStatus](../../models/components/transferstatus.md)                                           | :heavy_check_mark:                                                                                               | Status of a transfer.                                                                                            |
| `source`                                                                                                         | [components.WebhookTransferPaymentMethodDetails](../../models/components/webhooktransferpaymentmethoddetails.md) | :heavy_check_mark:                                                                                               | Payment method details for the source or destination of a transfer.                                              |
| `destination`                                                                                                    | [components.WebhookTransferPaymentMethodDetails](../../models/components/webhooktransferpaymentmethoddetails.md) | :heavy_check_mark:                                                                                               | Payment method details for the source or destination of a transfer.                                              |