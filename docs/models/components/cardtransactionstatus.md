# CardTransactionStatus

Status of a transaction within the card payment lifecycle.

## Example Usage

```typescript
import { CardTransactionStatus } from "@moovio/sdk/models/components";

let value: CardTransactionStatus = "confirmed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"initiated" | "confirmed" | "canceled" | "settled" | "failed" | "completed" | Unrecognized<string>
```