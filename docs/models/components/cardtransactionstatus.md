# CardTransactionStatus

Status of a transaction within the card payment lifecycle.

## Example Usage

```typescript
import { CardTransactionStatus } from "@moovio/sdk/models/components";

let value: CardTransactionStatus = "settled";
```

## Values

```typescript
"initiated" | "confirmed" | "canceled" | "settled" | "failed" | "completed"
```