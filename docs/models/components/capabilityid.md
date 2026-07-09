# CapabilityID

Moov account capabilities.

**Deprecated capabilities**

The `send-funds`, `collect-funds`, and `wallet` capability IDs are deprecated. Request granular capabilities instead (for example, `send-funds.ach`, `collect-funds.card-payments`, or `wallet.balance`). Deprecated values will be removed in a future API version.

Read our [capabilities reference](https://docs.moov.io/guides/accounts/capabilities/reference/) to choose the right capabilities for your integration.

The `production-app`, `platform.production-app`, and / or `platform.wallet-transfers` capabilities might appear in the list for your Partner account. These are read-only capabilities that Moov requests. These capabilities remain active with your account and require no additional action.

## Example Usage

```typescript
import { CapabilityID } from "@moovio/sdk/models/components";

let value: CapabilityID = "platform.wallet-transfers";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"transfers" | "send-funds" | "send-funds.push-to-card" | "money-transfer.push-to-card" | "send-funds.ach" | "send-funds.rtp" | "send-funds.instant-bank" | "collect-funds" | "collect-funds.card-payments" | "money-transfer.pull-from-card" | "collect-funds.ach" | "wallet" | "wallet.balance" | "card-issuing" | "issuing.cardholder" | "production-app" | "platform.production-app" | "platform.wallet-transfers" | Unrecognized<string>
```