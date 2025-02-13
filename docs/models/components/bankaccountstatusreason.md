# BankAccountStatusReason

The reason the bank account status changed to the current value.

## Example Usage

```typescript
import { BankAccountStatusReason } from "@moovio/sdk/models/components";

let value: BankAccountStatusReason = "other";
```

## Values

```typescript
"bank-account-created" | "verification-initiated" | "micro-deposit-attempts-exceeded" | "micro-deposit-expired" | "max-verification-failures" | "verification-attempts-exceeded" | "verification-expired" | "verification-successful" | "ach-debit-return" | "ach-credit-return" | "rtp-credit-failure" | "micro-deposit-return" | "admin-action" | "other"
```