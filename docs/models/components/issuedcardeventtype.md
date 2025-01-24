# IssuedCardEventType

The type of event that occurred on the card.

## Example Usage

```typescript
import { IssuedCardEventType } from "moov-sdk/models/components";

let value: IssuedCardEventType = "authorization-advice";
```

## Values

```typescript
"authorization" | "reversal" | "authorization-advice" | "authorization-expiration" | "authorization-incremental" | "clearing"
```