# ACHTransactionStatus

Status of a transaction within the ACH lifecycle.

## Example Usage

```typescript
import { ACHTransactionStatus } from "moov-sdk/models/components";

let value: ACHTransactionStatus = "initiated";
```

## Values

```typescript
"initiated" | "originated" | "corrected" | "returned" | "completed"
```