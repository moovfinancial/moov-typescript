# IssuingAuthorizationStatus

Status of a card issuing authorization.

## Example Usage

```typescript
import { IssuingAuthorizationStatus } from "@moovio/sdk/models/components";

let value: IssuingAuthorizationStatus = "expired";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "declined" | "canceled" | "cleared" | "expired" | Unrecognized<string>
```