# WalletTransactionStatus

## Example Usage

```typescript
import { WalletTransactionStatus } from "@moovio/sdk/models/components";

let value: WalletTransactionStatus = "completed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "completed" | "canceled" | "failed" | Unrecognized<string>
```