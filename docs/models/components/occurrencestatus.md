# OccurrenceStatus

Status of the completed occurrence.

## Example Usage

```typescript
import { OccurrenceStatus } from "@moovio/sdk/models/components";

let value: OccurrenceStatus = "failed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "failed" | "completed" | Unrecognized<string>
```