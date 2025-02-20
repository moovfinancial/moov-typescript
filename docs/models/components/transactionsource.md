# TransactionSource

Specifies the nature and initiator of a transaction. 

Crucial for recurring and merchant-initiated transactions as per card scheme rules. 
Omit for customer-initiated e-commerce transactions.

## Example Usage

```typescript
import { TransactionSource } from "@moovio/sdk/models/components";

let value: TransactionSource = "first-recurring";
```

## Values

```typescript
"first-recurring" | "recurring" | "unscheduled"
```