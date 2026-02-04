# WalletTransactionType

## Example Usage

```typescript
import { WalletTransactionType } from "@moovio/sdk/models/components";

let value: WalletTransactionType = "card-decline";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"account-funding" | "ach-reversal" | "auto-sweep" | "card-payment" | "card-decline" | "card-reversal" | "cash-out" | "dispute" | "dispute-reversal" | "facilitator-fee" | "issuing-refund" | "issuing-transaction" | "issuing-transaction-adjustment" | "issuing-auth-hold" | "issuing-auth-release" | "issuing-decline" | "moov-fee" | "payment" | "payout" | "refund" | "refund-failure" | "rtp-failure" | "top-up" | "wallet-transfer" | "adjustment" | "fee-revenue" | "residual" | Unrecognized<string>
```