# CardIssuingNetwork

The name of the network a card transaction is routed through.

## Example Usage

```typescript
import { CardIssuingNetwork } from "@moovio/sdk/models/components";

let value: CardIssuingNetwork = "discover";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"discover" | "shazam" | "visa" | Unrecognized<string>
```