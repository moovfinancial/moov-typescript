# UpdateWebhookRequest

## Example Usage

```typescript
import { UpdateWebhookRequest } from "@moovio/sdk/models/operations";

let value: UpdateWebhookRequest = {
  webhookID: "f5aa9e8d-33b8-4ea9-a2a0-4723114fb58c",
  updateWebhook: {
    url: "https://grizzled-tuba.info",
    status: "enabled",
    eventTypes: [],
    description:
      "maul after incidentally gratefully dredger guest lest forsaken alive",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `webhookID`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `updateWebhook`                                                      | [components.UpdateWebhook](../../models/components/updatewebhook.md) | :heavy_check_mark:                                                   | N/A                                                                  |