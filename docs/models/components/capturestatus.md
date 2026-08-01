# CaptureStatus

## Example Usage

```typescript
import { CaptureStatus } from "@moovio/sdk/models/components";

let value: CaptureStatus = "canceled";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "submitted" | "settled" | "completed" | "failed" | "canceled" | Unrecognized<string>
```