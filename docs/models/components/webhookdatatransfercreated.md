# WebhookDataTransferCreated

## Example Usage

```typescript
import { WebhookDataTransferCreated } from "@moovio/sdk/models/components";

let value: WebhookDataTransferCreated = {
  accountID: "<id>",
  transferID: "<id>",
  status: "source.corrected",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `accountID`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | The accountID which facilitated the transfer.                                                |
| `transferID`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [components.WebhookDataTransferStatus](../../models/components/webhookdatatransferstatus.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `foreignID`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |