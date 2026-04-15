# CardIssuingNetwork

The name of the network a card transaction is routed through.

## Example Usage

```typescript
import { CardIssuingNetwork } from "@moovio/sdk/models/components";

let value: CardIssuingNetwork = "discover";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"discover" | "shazam" | "visa" | Unrecognized<string>
```