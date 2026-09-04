# WebhookDataCaptureUpdated

## Example Usage

```typescript
import { WebhookDataCaptureUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataCaptureUpdated = {
  accountID: "<id>",
  transferID: "<id>",
  captureID: "<id>",
  status: "pending",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accountID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The accountID which facilitated the transfer the capture belongs to. |
| `transferID`                                                         | *string*                                                             | :heavy_check_mark:                                                   | The transfer the capture belongs to.                                 |
| `captureID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `status`                                                             | [components.CaptureStatus](../../models/components/capturestatus.md) | :heavy_check_mark:                                                   | N/A                                                                  |