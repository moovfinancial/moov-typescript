# WebhookDataTransferCreated

## Example Usage

```typescript
import { WebhookDataTransferCreated } from "@moovio/sdk/models/components";

let value: WebhookDataTransferCreated = {
  accountID: "58def9c9-c9f3-482a-9046-fd2d2e0ce3aa",
  transferID: "498acea5-c87f-4b41-9aea-b131afe24ddf",
  status: "queued",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `accountID`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | The accountID which facilitated the transfer.                                                |
| `transferID`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [components.WebhookDataTransferStatus](../../models/components/webhookdatatransferstatus.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |