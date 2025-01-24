# TransferFailureReason

Reason for a transfer's failure.

## Example Usage

```typescript
import { TransferFailureReason } from "moov-sdk/models/components";

let value: TransferFailureReason = "destination-payment-error";
```

## Values

```typescript
"source-payment-error" | "destination-payment-error" | "wallet-insufficient-funds" | "rejected-high-risk" | "processing-error"
```