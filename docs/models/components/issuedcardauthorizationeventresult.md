# IssuedCardAuthorizationEventResult

The result of an event.

## Example Usage

```typescript
import { IssuedCardAuthorizationEventResult } from "@moovio/sdk/models/components";

let value: IssuedCardAuthorizationEventResult = "declined";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"approved" | "declined" | "processed" | Unrecognized<string>
```