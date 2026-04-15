# TransferStatus

Status of a transfer.

## Example Usage

```typescript
import { TransferStatus } from "@moovio/sdk/models/components";

let value: TransferStatus = "queued";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"created" | "pending" | "completed" | "failed" | "reversed" | "queued" | "canceled" | Unrecognized<string>
```