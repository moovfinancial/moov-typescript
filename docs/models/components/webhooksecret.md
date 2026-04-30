# WebhookSecret

The secret used to verify webhook payloads.

## Example Usage

```typescript
import { WebhookSecret } from "@moovio/sdk/models/components";

let value: WebhookSecret = {
  secret: "<value>",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `secret`                                                                                                | *string*                                                                                                | :heavy_check_mark:                                                                                      | The secret key used to sign webhook payloads. Use this to verify the authenticity of incoming webhooks. |