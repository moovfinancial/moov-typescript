# ApplicationScope

A permission that the application requests on another account.

## Example Usage

```typescript
import { ApplicationScope } from "@moovio/sdk/models/components";

let value: ApplicationScope = "files.write";
```

## Values

```typescript
"accounts.read" | "accounts.write" | "analytics.read" | "apple-pay-merchant.read" | "apple-pay-merchant.write" | "apple-pay.read" | "apple-pay.write" | "bank-accounts.read" | "bank-accounts.write" | "capabilities.read" | "capabilities.write" | "cards.read" | "cards.write" | "documents.read" | "documents.write" | "fed.read" | "files.read" | "files.write" | "issued-cards.read" | "issued-cards.write" | "issued-cards.read-secure" | "payment-methods.read" | "ping.read" | "profile-enrichment.read" | "profile.read" | "profile.write" | "profile.disconnect" | "representatives.read" | "representatives.write" | "transfers.read" | "transfers.write" | "wallets.read"
```