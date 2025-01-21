# CardTransactionStatus

Status of a transaction within the card payment lifecycle.

## Example Usage

```typescript
import { CardTransactionStatus } from "moov-sdk/models/components";

let value: CardTransactionStatus = "canceled";
```

## Values

```typescript
"initiated" | "confirmed" | "canceled" | "settled" | "failed" | "completed"
```