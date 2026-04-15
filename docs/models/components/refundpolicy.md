# RefundPolicy

## Example Usage

```typescript
import { RefundPolicy } from "@moovio/sdk/models/components";

let value: RefundPolicy = "no-refunds";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"conditional-refund" | "custom-policy" | "event-based-policy" | "full-refund-extended-window" | "full-refund-within-30-days" | "no-refunds" | "partial-refund" | "prorated-refund" | "store-credit-only" | Unrecognized<string>
```