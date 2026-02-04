# PaymentLinkType

## Example Usage

```typescript
import { PaymentLinkType } from "@moovio/sdk/models/components";

let value: PaymentLinkType = "payment";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"payment" | "payout" | Unrecognized<string>
```