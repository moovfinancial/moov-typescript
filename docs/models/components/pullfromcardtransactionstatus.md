# PullFromCardTransactionStatus

Status of a pull-from-card transaction.

## Example Usage

```typescript
import { PullFromCardTransactionStatus } from "@moovio/sdk/models/components";

let value: PullFromCardTransactionStatus = "initiated";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"initiated" | "failed" | "completed" | Unrecognized<string>
```