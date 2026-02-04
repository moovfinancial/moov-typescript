# RTPFailureCode

Status codes for RTP failures.

## Example Usage

```typescript
import { RTPFailureCode } from "@moovio/sdk/models/components";

let value: RTPFailureCode = "other";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"processing-error" | "invalid-account" | "account-closed" | "account-blocked" | "invalid-field" | "transaction-not-supported" | "limit-exceeded" | "invalid-amount" | "customer-deceased" | "other" | Unrecognized<string>
```