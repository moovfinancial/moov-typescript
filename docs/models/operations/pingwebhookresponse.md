# PingWebhookResponse

## Example Usage

```typescript
import { PingWebhookResponse } from "@moovio/sdk/models/operations";

let value: PingWebhookResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
    responseStatusCode: 741771,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |
| `result`                                                           | [components.PingResponse](../../models/components/pingresponse.md) | :heavy_check_mark:                                                 | N/A                                                                |