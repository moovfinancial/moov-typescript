# ~~UnderwritingStatus~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { UnderwritingStatus } from "@moovio/sdk/models/components";

let value: UnderwritingStatus = "pendingReview";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"approved" | "rejected" | "pendingReview" | "pending" | "notRequested" | Unrecognized<string>
```