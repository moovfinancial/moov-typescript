# CardTransactionFailureCode

## Example Usage

```typescript
import { CardTransactionFailureCode } from "@moovio/sdk/models/components";

let value: CardTransactionFailureCode = "reenter-transaction";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"call-issuer" | "do-not-honor" | "processing-error" | "invalid-transaction" | "invalid-amount" | "no-such-issuer" | "reenter-transaction" | "cvv-mismatch" | "lost-or-stolen" | "insufficient-funds" | "invalid-card-number" | "invalid-merchant" | "expired-card" | "incorrect-pin" | "transaction-not-allowed" | "suspected-fraud" | "amount-limit-exceeded" | "velocity-limit-exceeded" | "revocation-of-authorization" | "card-not-activated" | "issuer-not-available" | "could-not-route" | "cardholder-account-closed" | "account-closed" | "account-not-activated" | "authentication-failed" | "authentication-required" | "cardholder-action-required" | "format-error" | "invalid-pin" | "offline-approved" | "offline-declined" | "partial-approval" | "payment-stopped" | "pin-required" | "record-not-found" | "surcharge-not-permitted" | "transaction-reversed" | "verification-failed" | "unknown-issue" | "duplicate-transaction" | Unrecognized<string>
```