# RefundPolicy

## Example Usage

```typescript
import { RefundPolicy } from "@moovio/sdk/models/components";

let value: RefundPolicy = "no-refunds";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"conditional-refund" | "custom-policy" | "event-based-policy" | "full-refund-extended-window" | "full-refund-within-30-days" | "no-refunds" | "partial-refund" | "prorated-refund" | "store-credit-only" | Unrecognized<string>
```