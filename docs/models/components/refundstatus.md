# RefundStatus

## Example Usage

```typescript
import { RefundStatus } from "@moovio/sdk/models/components";

let value: RefundStatus = "created";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created" | "pending" | "completed" | "failed" | Unrecognized<string>
```