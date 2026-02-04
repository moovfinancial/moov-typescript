# CapabilityID

Moov account capabilities.

The `production-app`, `platform.production-app`, and / or `platform.wallet-transfers` capabilities might appear in your list. These are read-only capabilities that Moov requests and uses for account verification purposes. These capabilities remains active with your account and require no additional action.

## Example Usage

```typescript
import { CapabilityID } from "@moovio/sdk/models/components";

let value: CapabilityID = "production-app";
```

## Values

```typescript
"transfers" | "send-funds" | "collect-funds" | "wallet" | "card-issuing" | "production-app"
```