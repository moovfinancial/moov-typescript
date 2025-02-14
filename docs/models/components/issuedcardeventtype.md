# IssuedCardEventType

The type of event that occurred on the card.

## Example Usage

```typescript
import { IssuedCardEventType } from "@moovio/sdk/models/components";

let value: IssuedCardEventType = "authorization-expiration";
```

## Values

```typescript
"authorization" | "reversal" | "authorization-advice" | "authorization-expiration" | "authorization-incremental" | "clearing"
```