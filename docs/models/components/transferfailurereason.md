# TransferFailureReason

Reason for a transfer's failure.

## Example Usage

```typescript
import { TransferFailureReason } from "@moovio/sdk/models/components";

let value: TransferFailureReason = "source-payment-error";
```

## Values

```typescript
"source-payment-error" | "destination-payment-error" | "wallet-insufficient-funds" | "rejected-high-risk" | "processing-error"
```