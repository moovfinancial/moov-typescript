# AmountType

Indicates whether the payment amount is fixed by the merchant or open for the buyer to choose.

## Example Usage

```typescript
import { AmountType } from "@moovio/sdk/models/components";

let value: AmountType = "open";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"fixed" | "open" | Unrecognized<string>
```