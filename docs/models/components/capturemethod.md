# CaptureMethod

When funds for a `card-payment` transfer are captured.

## Example Usage

```typescript
import { CaptureMethod } from "@moovio/sdk/models/components";

let value: CaptureMethod = "manual";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"automatic" | "manual" | Unrecognized<string>
```