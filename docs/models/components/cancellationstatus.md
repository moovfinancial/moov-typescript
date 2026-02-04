# CancellationStatus

## Example Usage

```typescript
import { CancellationStatus } from "@moovio/sdk/models/components";

let value: CancellationStatus = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "completed" | "failed" | Unrecognized<string>
```