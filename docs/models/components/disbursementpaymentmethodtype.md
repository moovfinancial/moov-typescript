# DisbursementPaymentMethodType

Payment methods allowed for disbursing funds.

## Example Usage

```typescript
import { DisbursementPaymentMethodType } from "@moovio/sdk/models/components";

let value: DisbursementPaymentMethodType = "rtp-credit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"push-to-card" | "rtp-credit" | "ach-credit-same-day" | "ach-credit-standard" | Unrecognized<string>
```