# CapabilityID

Moov account capabilities.

The `production-app` capability might appear in your list. This is a read-only capability that Moov requests and uses for account verification purposes. The capability remains active with your account and requires no additional action.

## Example Usage

```typescript
import { CapabilityID } from "@moovio/sdk/models/components";

let value: CapabilityID = "transfers";
```

## Values

```typescript
"transfers" | "send-funds" | "collect-funds" | "wallet" | "card-issuing" | "production-app"
```