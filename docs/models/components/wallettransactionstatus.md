# WalletTransactionStatus

## Example Usage

```typescript
import { WalletTransactionStatus } from "@moovio/sdk/models/components";

let value: WalletTransactionStatus = "completed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "completed" | "canceled" | "failed" | Unrecognized<string>
```