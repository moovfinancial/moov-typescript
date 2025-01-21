# ~~VerificationStatus~~

Possible states an account verification can be in.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { VerificationStatus } from "moov-sdk/models/components";

let value: VerificationStatus = "verified";
```

## Values

```typescript
"unverified" | "pending" | "verified" | "errored"
```