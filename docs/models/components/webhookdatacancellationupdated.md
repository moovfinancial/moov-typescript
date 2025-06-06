# WebhookDataCancellationUpdated

## Example Usage

```typescript
import { WebhookDataCancellationUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataCancellationUpdated = {
  cancellationID: "1470a08c-29d1-4cbb-b41c-ab38e894aa78",
  transferID: "5fc783ac-53b7-4aec-8274-bc1e510cfbfc",
  status: "failed",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `cancellationID`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `transferID`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [components.CancellationStatus](../../models/components/cancellationstatus.md) | :heavy_check_mark:                                                             | N/A                                                                            |