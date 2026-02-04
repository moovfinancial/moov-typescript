# CardType

The type of the card.

## Example Usage

```typescript
import { CardType } from "@moovio/sdk/models/components";

let value: CardType = "credit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"debit" | "credit" | "prepaid" | "unknown" | Unrecognized<string>
```