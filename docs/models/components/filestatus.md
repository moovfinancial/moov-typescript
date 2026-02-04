# FileStatus

The file's status.

## Example Usage

```typescript
import { FileStatus } from "@moovio/sdk/models/components";

let value: FileStatus = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "approved" | "rejected" | Unrecognized<string>
```