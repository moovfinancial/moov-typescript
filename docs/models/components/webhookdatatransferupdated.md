# WebhookDataTransferUpdated

## Example Usage

```typescript
import { WebhookDataTransferUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataTransferUpdated = {
  accountID: "<id>",
  transferID: "<id>",
  status: "source.returned",
  source: {
    accountID: "<id>",
    paymentMethodID: "<id>",
  },
  destination: {
    accountID: "<id>",
    paymentMethodID: "<id>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The accountID which facilitated the transfer.                                                                    |
| `transferID`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `status`                                                                                                         | [components.WebhookDataTransferStatus](../../models/components/webhookdatatransferstatus.md)                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `source`                                                                                                         | [components.WebhookTransferPaymentMethodDetails](../../models/components/webhooktransferpaymentmethoddetails.md) | :heavy_check_mark:                                                                                               | Payment method details for the source or destination of a transfer.                                              |
| `destination`                                                                                                    | [components.WebhookTransferPaymentMethodDetails](../../models/components/webhooktransferpaymentmethoddetails.md) | :heavy_check_mark:                                                                                               | Payment method details for the source or destination of a transfer.                                              |
| `foreignID`                                                                                                      | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |