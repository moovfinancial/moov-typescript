# WebhookDataEventTest

The data payload sent for an `event.test` event, such as a webhook ping.

## Example Usage

```typescript
import { WebhookDataEventTest } from "@moovio/sdk/models/components";

let value: WebhookDataEventTest = {
  ping: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ping`             | *boolean*          | :heavy_check_mark: | N/A                |