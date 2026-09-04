# WireTransactionStatus

Status of a transaction within the wire lifecycle.

## Example Usage

```typescript
import { WireTransactionStatus } from "@moovio/sdk/models/components";

let value: WireTransactionStatus = "returned";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"initiated" | "completed" | "failed" | "returned" | Unrecognized<string>
```