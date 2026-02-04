# ACHTransactionStatus

Status of a transaction within the ACH lifecycle.

## Example Usage

```typescript
import { ACHTransactionStatus } from "@moovio/sdk/models/components";

let value: ACHTransactionStatus = "corrected";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"" | "initiated" | "originated" | "corrected" | "returned" | "completed" | "canceled" | Unrecognized<string>
```