# OccurrenceStatus

Status of the completed occurrence.

## Example Usage

```typescript
import { OccurrenceStatus } from "@moovio/sdk/models/components";

let value: OccurrenceStatus = "failed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "failed" | "completed" | Unrecognized<string>
```