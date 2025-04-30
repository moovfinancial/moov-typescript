# WebhookDataCancellationCreated

## Example Usage

```typescript
import { WebhookDataCancellationCreated } from "@moovio/sdk/models/components";

let value: WebhookDataCancellationCreated = {
  cancellationID: "ab2ae941-cf7d-4def-bcef-ad83dbe5e710",
  transferID: "5ae5da42-87c9-4d5c-bc9a-57682a65f52f",
  status: "completed",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `cancellationID`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `transferID`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [components.CancellationStatus](../../models/components/cancellationstatus.md) | :heavy_check_mark:                                                             | N/A                                                                            |