# CardPaymentTransactionStatus

Status of a card payment transaction.

## Example Usage

```typescript
import { CardPaymentTransactionStatus } from "@moovio/sdk/models/components";

let value: CardPaymentTransactionStatus = "failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"initiated" | "confirmed" | "canceled" | "settled" | "failed" | "completed" | Unrecognized<string>
```