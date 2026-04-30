# IssuedCardEventType

The type of event that occurred on the card.

## Example Usage

```typescript
import { IssuedCardEventType } from "@moovio/sdk/models/components";

let value: IssuedCardEventType = "clearing";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"authorization" | "reversal" | "authorization-advice" | "authorization-expiration" | "authorization-incremental" | "clearing" | Unrecognized<string>
```