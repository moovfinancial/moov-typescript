# IssuedCardAuthorizationEventResult

The result of an event.

## Example Usage

```typescript
import { IssuedCardAuthorizationEventResult } from "@moovio/sdk/models/components";

let value: IssuedCardAuthorizationEventResult = "declined";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"approved" | "declined" | "processed" | Unrecognized<string>
```