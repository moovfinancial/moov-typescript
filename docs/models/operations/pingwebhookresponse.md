# PingWebhookResponse

## Example Usage

```typescript
import { PingWebhookResponse } from "@moovio/sdk/models/operations";

let value: PingWebhookResponse = {
  headers: {},
  result: {
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
    responseStatusCode: 216663,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.PingResponse](../../models/components/pingresponse.md) | :heavy_check_mark:                                                 | N/A                                                                |