# RTPTransactionStatus

Status of a transaction within the RTP lifecycle.

## Example Usage

```typescript
import { RTPTransactionStatus } from "@moovio/sdk/models/components";

let value: RTPTransactionStatus = "accepted-without-posting";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"initiated" | "completed" | "failed" | "accepted-without-posting" | Unrecognized<string>
```