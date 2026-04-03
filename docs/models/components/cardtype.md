# CardType

The type of the card.

## Example Usage

```typescript
import { CardType } from "@moovio/sdk/models/components";

let value: CardType = "credit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"debit" | "credit" | "prepaid" | "unknown" | Unrecognized<string>
```