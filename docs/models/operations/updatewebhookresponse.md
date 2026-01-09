# UpdateWebhookResponse

## Example Usage

```typescript
import { UpdateWebhookResponse } from "@moovio/sdk/models/operations";

let value: UpdateWebhookResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
  },
  result: {
    webhookID: "7e45ce23-0a3c-465a-8553-ff923a434e69",
    url: "https://swift-cash.com",
    status: "disabled",
    eventTypes: [
      "terminalApplication.updated",
    ],
    description: "mechanic pertain shoulder uh-huh phooey whenever",
    createdOn: new Date("2025-07-20T10:21:45.081Z"),
    updatedOn: new Date("2026-03-18T08:24:03.799Z"),
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Webhook](../../models/components/webhook.md) | :heavy_check_mark:                                       | N/A                                                      |