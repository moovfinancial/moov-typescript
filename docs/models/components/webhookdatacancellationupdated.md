# WebhookDataCancellationUpdated

## Example Usage

```typescript
import { WebhookDataCancellationUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataCancellationUpdated = {
  cancellationID: "<id>",
  transferID: "<id>",
  status: "pending",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `cancellationID`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `transferID`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [components.CancellationStatus](../../models/components/cancellationstatus.md) | :heavy_check_mark:                                                             | N/A                                                                            |