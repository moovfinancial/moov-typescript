# WebhookDataCancellationUpdated

## Example Usage

```typescript
import { WebhookDataCancellationUpdated } from "@moovio/sdk/models/components";

let value: WebhookDataCancellationUpdated = {
  cancellationID: "ed3bd952-df3c-4997-8b2c-921ee08fb61b",
  transferID: "0a83b121-751d-45ba-89b0-55c37b5f5ecc",
  status: "completed",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `cancellationID`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `transferID`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [components.CancellationStatus](../../models/components/cancellationstatus.md) | :heavy_check_mark:                                                             | N/A                                                                            |