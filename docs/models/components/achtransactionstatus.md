# ACHTransactionStatus

Status of a transaction within the ACH lifecycle.

## Example Usage

```typescript
import { ACHTransactionStatus } from "@moovio/sdk/models/components";

let value: ACHTransactionStatus = "originated";
```

## Values

```typescript
"initiated" | "originated" | "corrected" | "returned" | "completed"
```