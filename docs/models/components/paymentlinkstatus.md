# PaymentLinkStatus

## Example Usage

```typescript
import { PaymentLinkStatus } from "@moovio/sdk/models/components";

let value: PaymentLinkStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "used" | "disabled" | "expired" | Unrecognized<string>
```