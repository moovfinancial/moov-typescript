# InvoiceStatus

## Example Usage

```typescript
import { InvoiceStatus } from "@moovio/sdk/models/components";

let value: InvoiceStatus = "payment-pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "unpaid" | "payment-pending" | "paid" | "overdue" | "canceled" | Unrecognized<string>
```