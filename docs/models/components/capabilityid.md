# CapabilityID

Moov account capabilities.

The `production-app`, `platform.production-app`, and / or `platform.wallet-transfers` capabilities might appear in your list. These are read-only capabilities that Moov requests and uses for account verification purposes. These capabilities remains active with your account and require no additional action.

## Example Usage

```typescript
import { CapabilityID } from "@moovio/sdk/models/components";

let value: CapabilityID = "platform.wallet-transfers";
```

## Values

```typescript
"transfers" | "send-funds" | "send-funds.push-to-card" | "money-transfer.push-to-card" | "send-funds.ach" | "send-funds.rtp" | "collect-funds" | "collect-funds.card-payments" | "money-transfer.pull-from-card" | "collect-funds.ach" | "wallet" | "wallet.balance" | "card-issuing" | "production-app" | "platform.production-app" | "platform.wallet-transfers"
```