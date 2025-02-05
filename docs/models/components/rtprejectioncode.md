# RTPRejectionCode

The rejection code of an RTP transaction that caused the bank account status to change.

- AC03: Account Invalid
- AC04: Account Closed
- AC06: Account Blocked
- AC14: Creditor Account Type Invalid
- AG01: Transactions Forbidden On Account
- AG03: Transaction Type Not Supported
- MD07: Customer Deceased

## Example Usage

```typescript
import { RTPRejectionCode } from "@moovio/sdk/models/components";

let value: RTPRejectionCode = "AG01";
```

## Values

```typescript
"AC03" | "AC04" | "AC06" | "AC14" | "AG01" | "AG03" | "MD07"
```