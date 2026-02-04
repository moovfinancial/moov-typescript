# TransactionSource

Specifies the nature and initiator of a transaction. 

Crucial for recurring and merchant-initiated transactions as per card scheme rules. 
Omit for customer-initiated e-commerce transactions.

## Example Usage

```typescript
import { TransactionSource } from "@moovio/sdk/models/components";

let value: TransactionSource = "recurring";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"first-recurring" | "recurring" | "unscheduled" | Unrecognized<string>
```