# WebhookDataTransferCreated

## Example Usage

```typescript
import { WebhookDataTransferCreated } from "@moovio/sdk/models/components";

let value: WebhookDataTransferCreated = {
  accountID: "e41173ed-027a-4f96-8e93-049d2ffdc370",
  transferID: "0c2e358e-038b-45fa-8104-931f3d2f49d5",
  status: "queued",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `accountID`                                                            | *string*                                                               | :heavy_check_mark:                                                     | The accountID which facilitated the transfer.                          |
| `transferID`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `status`                                                               | [components.TransferStatus](../../models/components/transferstatus.md) | :heavy_check_mark:                                                     | Status of a transfer.                                                  |