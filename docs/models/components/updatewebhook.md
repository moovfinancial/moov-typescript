# UpdateWebhook

Request body for updating an existing webhook.

## Example Usage

```typescript
import { UpdateWebhook } from "@moovio/sdk/models/components";

let value: UpdateWebhook = {
  url: "https://pretty-battle.info/",
  status: "enabled",
  eventTypes: [
    "networkID.updated",
  ],
  description: "the gee athwart catalyze",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | The URL where webhook events will be sent.                                   |
| `status`                                                                     | [components.WebhookStatus](../../models/components/webhookstatus.md)         | :heavy_check_mark:                                                           | The status of the webhook.                                                   |
| `eventTypes`                                                                 | [components.WebhookEventType](../../models/components/webhookeventtype.md)[] | :heavy_check_mark:                                                           | The list of event types this webhook should subscribe to.                    |
| `description`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | A description of the webhook for reference. Can be an empty string.          |