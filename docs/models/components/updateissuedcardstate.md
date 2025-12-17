# UpdateIssuedCardState

Updates the state of a Moov issued card.
- `closed`: The card is permanently deactivated and cannot approve authorizations. A card can be closed by request or when it expires.

## Example Usage

```typescript
import { UpdateIssuedCardState } from "@moovio/sdk/models/components";

let value: UpdateIssuedCardState = "closed";
```

## Values

```typescript
"closed"
```