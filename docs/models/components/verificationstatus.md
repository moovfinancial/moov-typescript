# ~~VerificationStatus~~

Possible states an account verification can be in.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { VerificationStatus } from "@moovio/sdk/models/components";

let value: VerificationStatus = "pending";
```

## Values

```typescript
"unverified" | "pending" | "verified" | "errored"
```