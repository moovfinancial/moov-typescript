# IssuingDeclineReason

The reason an authorization or authorization event was declined. Only present if the
authorization or event has been declined.

## Example Usage

```typescript
import { IssuingDeclineReason } from "@moovio/sdk/models/components";

let value: IssuingDeclineReason = "merchant-country-not-supported";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"insufficient-funds" | "card-not-active" | "card-expiration" | "spend-cutoff-reached" | "outside-allowed-schedule" | "spend-limit-exceeded" | "merchant-category-not-supported" | "merchant-category-restricted" | "merchant-restricted" | "merchant-country-not-supported" | "unsupported-transaction" | "network-stand-in" | "declined-by-issuer" | "invalid-request" | "system-error" | Unrecognized<string>
```