# InvoiceStatus

## Example Usage

```typescript
import { InvoiceStatus } from "@moovio/sdk/models/components";

let value: InvoiceStatus = "payment-pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "unpaid" | "payment-pending" | "paid" | "overdue" | "canceled" | Unrecognized<string>
```