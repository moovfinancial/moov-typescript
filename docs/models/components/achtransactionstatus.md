# ACHTransactionStatus

Status of a transaction within the ACH lifecycle.

## Example Usage

```typescript
import { ACHTransactionStatus } from "@moovio/sdk/models/components";

let value: ACHTransactionStatus = "corrected";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"" | "initiated" | "originated" | "corrected" | "returned" | "completed" | "canceled" | Unrecognized<string>
```