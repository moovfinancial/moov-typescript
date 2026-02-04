# IssuedCardEventType

The type of event that occurred on the card.

## Example Usage

```typescript
import { IssuedCardEventType } from "@moovio/sdk/models/components";

let value: IssuedCardEventType = "clearing";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"authorization" | "reversal" | "authorization-advice" | "authorization-expiration" | "authorization-incremental" | "clearing" | Unrecognized<string>
```