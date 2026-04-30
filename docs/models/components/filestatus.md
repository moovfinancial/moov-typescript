# FileStatus

The file's status.

## Example Usage

```typescript
import { FileStatus } from "@moovio/sdk/models/components";

let value: FileStatus = "pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "approved" | "rejected" | Unrecognized<string>
```