# IssuingAuthorizationStatus

Status of a card issuing authorization.

## Example Usage

```typescript
import { IssuingAuthorizationStatus } from "@moovio/sdk/models/components";

let value: IssuingAuthorizationStatus = "pending";
```

## Values

```typescript
"pending" | "declined" | "canceled" | "cleared" | "expired"
```