# IssuingAuthorizationStatus

Status of a card issuing authorization.

## Example Usage

```typescript
import { IssuingAuthorizationStatus } from "@moovio/sdk/models/components";

let value: IssuingAuthorizationStatus = "expired";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "declined" | "canceled" | "cleared" | "expired" | Unrecognized<string>
```