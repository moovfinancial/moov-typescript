# CardUpdateReason

The results of the card update request.

## Example Usage

```typescript
import { CardUpdateReason } from "@moovio/sdk/models/components";

let value: CardUpdateReason = "number-update";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"unspecified" | "account-closed" | "contact-cardholder" | "expiration-update" | "no-change" | "no-match" | "number-update" | Unrecognized<string>
```