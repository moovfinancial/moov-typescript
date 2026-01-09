# ListWebhooksResponse

## Example Usage

```typescript
import { ListWebhooksResponse } from "@moovio/sdk/models/operations";

let value: ListWebhooksResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: [
    {
      webhookID: "e2b46e77-899e-4837-8de5-9fd9dc41abba",
      url: "https://favorite-hepatitis.net/",
      status: "enabled",
      eventTypes: [],
      description: "vamoose timely ha measly",
      createdOn: new Date("2024-07-14T05:45:58.243Z"),
      updatedOn: new Date("2026-05-24T08:43:13.634Z"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.Webhook](../../models/components/webhook.md)[] | :heavy_check_mark:                                         | N/A                                                        |