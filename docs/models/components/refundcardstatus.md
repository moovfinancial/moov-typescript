# RefundCardStatus

## Example Usage

```typescript
import { RefundCardStatus } from "@moovio/sdk/models/components";

let value: RefundCardStatus = "settled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"initiated" | "confirmed" | "settled" | "failed" | "completed" | Unrecognized<string>
```