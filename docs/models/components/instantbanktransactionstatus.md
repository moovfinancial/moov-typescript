# InstantBankTransactionStatus

Status of a transaction within the instant-bank lifecycle.

## Example Usage

```typescript
import { InstantBankTransactionStatus } from "@moovio/sdk/models/components";

let value: InstantBankTransactionStatus = "initiated";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"initiated" | "completed" | "failed" | "accepted-without-posting" | Unrecognized<string>
```