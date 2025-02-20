# ~~AccountVerificationStatus~~

Possible states an account verification can be in.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { AccountVerificationStatus } from "@moovio/sdk/models/components";

let value: AccountVerificationStatus = "pending";
```

## Values

```typescript
"unverified" | "pending" | "resubmit" | "review" | "verified" | "failed"
```