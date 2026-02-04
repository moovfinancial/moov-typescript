# WebhookStatus

The status of a webhook.

## Example Usage

```typescript
import { WebhookStatus } from "@moovio/sdk/models/components";

let value: WebhookStatus = "enabled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"enabled" | "disabled" | Unrecognized<string>
```