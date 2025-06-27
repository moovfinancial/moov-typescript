# WebhookDataTransferUpdated

## Example Usage

```typescript
import { WebhookDataTransferUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataTransferUpdated = {
  accountID: "7b54a415-9f1d-4c27-bfa5-d474acf1a242",
  transferID: "1c7cd638-93c3-4d3e-9965-9a70f1a42bd8",
  status: "reversed",
  source: {
    accountID: "2e8260fd-b5a3-4f8d-aacf-2f7a69cb00db",
    paymentMethodID: "bf898ff1-fe1c-48e0-a991-fa5ac8dcfb69",
  },
  destination: {
    accountID: "d7834ce6-70b4-443f-b54d-df4ad4e0d27c",
    paymentMethodID: "82a4e7be-d736-410a-b9e0-63f5d10817de",
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