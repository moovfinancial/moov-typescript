# PushToCardTransactionStatus

Status of a push-to-card transaction.

## Example Usage

```typescript
import { PushToCardTransactionStatus } from "@moovio/sdk/models/components";

let value: PushToCardTransactionStatus = "canceled";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"initiated" | "deferred" | "canceled" | "failed" | "completed" | Unrecognized<string>
```