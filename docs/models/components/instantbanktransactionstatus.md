# InstantBankTransactionStatus

Status of a transaction within the instant-bank lifecycle.

## Example Usage

```typescript
import { InstantBankTransactionStatus } from "@moovio/sdk/models/components";

let value: InstantBankTransactionStatus = "initiated";
```

## Values

```typescript
"initiated" | "completed" | "failed" | "accepted-without-posting"
```