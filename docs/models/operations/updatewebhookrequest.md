# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "@moovio/sdk/models/operations";

let value: UpdateWebhookRequest = {
  webhookID: "<id>",
  updateWebhook: {
    url: "https://gripping-outlaw.name",
    status: "disabled",
    eventTypes: [
      "refund.updated",
    ],
    description:
      "plump furthermore knitting institutionalize past although mockingly ashamed gee",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `webhookID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `updateWebhook`                                                      | [components.UpdateWebhook](../../models/components/updatewebhook.md) | :heavy_check_mark:                                                   | N/A                                                                  |