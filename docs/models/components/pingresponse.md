# PingResponse

Response from pinging a webhook.

## Example Usage

```typescript
import { PingResponse } from "@moovio/sdk/models/components";

let value: PingResponse = {
  webhook: {
    webhookID: "365db4c7-a414-4d90-8b00-147e64afca58",
    url: "https://informal-scenario.info",
    status: "enabled",
    eventTypes: [
      "sweep.created",
    ],
    description:
      "uh-huh till welcome wetly qua majestically obedience edge once",
    createdOn: new Date("2025-03-12T15:39:25.818Z"),
    updatedOn: new Date("2026-06-06T11:34:10.854Z"),
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