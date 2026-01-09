# CreateWebhook

Request body for creating a new webhook.

## Example Usage

```typescript
import { CreateWebhook } from "@moovio/sdk/models/components";

let value: CreateWebhook = {
  url: "https://yearly-strategy.com/",
  status: "enabled",
  eventTypes: [],
  description:
    "interestingly merry slime monstrous gladly across reorganisation shrilly",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `url`                                                                        | *string*                                                                     | :heavy_check_mark:                                                           | The URL where webhook events will be sent.                                   |
| `status`                                                                     | [components.WebhookStatus](../../models/components/webhookstatus.md)         | :heavy_check_mark:                                                           | The status of the webhook.                                                   |
| `eventTypes`                                                                 | [components.WebhookEventType](../../models/components/webhookeventtype.md)[] | :heavy_check_mark:                                                           | The list of event types this webhook should subscribe to.                    |
| `description`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | A description of the webhook for reference. Can be an empty string.          |