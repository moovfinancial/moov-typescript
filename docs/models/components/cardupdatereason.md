# CardUpdateReason

The results of the card update request.

## Example Usage

```typescript
import { CardUpdateReason } from "@moovio/sdk/models/components";

let value: CardUpdateReason = "number-update";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"unspecified" | "account-closed" | "contact-cardholder" | "expiration-update" | "no-change" | "no-match" | "number-update" | Unrecognized<string>
```