# RefundCardStatus

## Example Usage

```typescript
import { RefundCardStatus } from "@moovio/sdk/models/components";

let value: RefundCardStatus = "failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"initiated" | "confirmed" | "settled" | "failed" | "completed" | "cleared-externally" | Unrecognized<string>
```