# WalletTransactionSourceType

## Example Usage

```typescript
import { WalletTransactionSourceType } from "@moovio/sdk/models/components";

let value: WalletTransactionSourceType = "issuing-authorization";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"transfer" | "dispute" | "issuing-card-transaction" | "issuing-authorization" | "sweep" | "adjustment" | "fee" | "residual" | Unrecognized<string>
```