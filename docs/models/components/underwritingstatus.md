# ~~UnderwritingStatus~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { UnderwritingStatus } from "@moovio/sdk/models/components";

let value: UnderwritingStatus = "pendingReview";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"approved" | "rejected" | "pendingReview" | "pending" | "notRequested" | Unrecognized<string>
```