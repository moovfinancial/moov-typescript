# CreateWebhookResponse

## Example Usage

```typescript
import { CreateWebhookResponse } from "@moovio/sdk/models/operations";

let value: CreateWebhookResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    webhookID: "<id>",
    url: "https://upbeat-duffel.info/",
    status: "disabled",
    eventTypes: [
      "bankAccount.updated",
    ],
    description: "till cuddly likewise quickly",
    createdOn: new Date("2026-07-10T10:38:57.655Z"),
    updatedOn: new Date("2026-03-26T19:47:11.043Z"),
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `headers`                                                | Record<string, *string*[]>                               | :heavy_check_mark:                                       | N/A                                                      |
| `result`                                                 | [components.Webhook](../../models/components/webhook.md) | :heavy_check_mark:                                       | N/A                                                      |