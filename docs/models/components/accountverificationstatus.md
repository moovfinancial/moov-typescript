# ~~AccountVerificationStatus~~

Possible states an account verification can be in.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { AccountVerificationStatus } from "moov-sdk/models/components";

let value: AccountVerificationStatus = "review";
```

## Values

```typescript
"unverified" | "pending" | "resubmit" | "review" | "verified" | "failed"
```