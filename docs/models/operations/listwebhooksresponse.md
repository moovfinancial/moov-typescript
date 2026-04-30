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
      webhookID: "<id>",
      url: "https://colorful-pulse.biz",
      status: "enabled",
      eventTypes: [
        "invoice.updated",
      ],
      description: "kettledrum posh ha dissemble place stealthily",
      createdOn: new Date("2025-08-26T21:02:35.181Z"),
      updatedOn: new Date("2026-07-27T05:49:06.460Z"),
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [components.Webhook](../../models/components/webhook.md)[] | :heavy_check_mark:                                         | N/A                                                        |