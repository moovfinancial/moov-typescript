# WalletTransactionSourceType

## Example Usage

```typescript
import { WalletTransactionSourceType } from "@moovio/sdk/models/components";

let value: WalletTransactionSourceType = "issuing-authorization";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"transfer" | "dispute" | "issuing-card-transaction" | "issuing-authorization" | "sweep" | "adjustment" | "fee" | "residual" | Unrecognized<string>
```