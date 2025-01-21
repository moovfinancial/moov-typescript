# IssuingAuthorizationStatus

Status of a card issuing authorization.

## Example Usage

```typescript
import { IssuingAuthorizationStatus } from "moov-sdk/models/components";

let value: IssuingAuthorizationStatus = "cleared";
```

## Values

```typescript
"pending" | "declined" | "canceled" | "cleared" | "expired"
```