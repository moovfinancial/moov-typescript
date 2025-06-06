# WebhookDataCancellationCreated

## Example Usage

```typescript
import { WebhookDataCancellationCreated } from "@moovio/sdk/models/components";

let value: WebhookDataCancellationCreated = {
  cancellationID: "8e96951f-8f83-4634-9a76-b6a5d7b2ba3b",
  transferID: "f1fe921b-a888-46cd-ac6f-498cb037c9d9",
  status: "completed",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `cancellationID`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `transferID`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [components.CancellationStatus](../../models/components/cancellationstatus.md) | :heavy_check_mark:                                                             | N/A                                                                            |