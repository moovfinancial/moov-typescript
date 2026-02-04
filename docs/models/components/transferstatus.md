# TransferStatus

Status of a transfer.

## Example Usage

```typescript
import { TransferStatus } from "@moovio/sdk/models/components";

let value: TransferStatus = "queued";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created" | "pending" | "completed" | "failed" | "reversed" | "queued" | "canceled" | Unrecognized<string>
```