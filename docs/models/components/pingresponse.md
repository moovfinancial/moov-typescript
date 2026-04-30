# PingResponse

Response from pinging a webhook.

## Example Usage

```typescript
import { PingResponse } from "@moovio/sdk/models/components";

let value: PingResponse = {
  webhook: {
    webhookID: "<id>",
    url: "https://instructive-fort.org/",
    status: "disabled",
    eventTypes: [],
    description:
      "supposing loosely powerful hutch obediently after yesterday lieu strictly",
    createdOn: new Date("2026-09-15T01:25:12.094Z"),
    updatedOn: new Date("2024-12-19T08:26:36.576Z"),
  },
  requestBodySent: {},
  responseStatusCode: 782844,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `webhook`                                                                                                                | [components.Webhook](../../models/components/webhook.md)                                                                 | :heavy_check_mark:                                                                                                       | The webhook that was pinged.                                                                                             |
| `requestBodySent`                                                                                                        | Record<string, *any*>                                                                                                    | :heavy_check_mark:                                                                                                       | The request body sent to the target URL. It will contain an event type of `event.test` and an empty (null) data payload. |
| `responseStatusCode`                                                                                                     | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | The response status code after sending a ping event to the URL.                                                          |