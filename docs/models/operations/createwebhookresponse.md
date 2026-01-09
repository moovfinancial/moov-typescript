# CreateWebhookResponse

## Example Usage

```typescript
import { CreateWebhookResponse } from "@moovio/sdk/models/operations";

let value: CreateWebhookResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
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