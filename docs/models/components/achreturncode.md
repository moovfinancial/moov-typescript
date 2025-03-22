# ACHReturnCode

The return code of an ACH transaction that caused the bank account status to change.

- R02: Account Closed
- R03: No Account/Unable to Locate Account
- R04: Invalid Account Number
- R05: Improper Debit to Consumer Account
- R07: Authorization Revoked by Customer
- R08: Payment Stopped
- R10: Customer Advises Originator is Not Known or Authorized to Receiver
- R11: Customer Advises Entry Not in Accordance with the Terms of the Authorization
- R12: Branch Sold to Another DFI
- R13: RDFI not qualified to participate
- R14: Representative payee deceased or unable to continue in that capacity
- R15: Beneficiary or bank account holder
- R16: Bank account frozen
- R17: Entry with Invalid Account Number Initiated Under Questionable Circumstances
- R20: Non-payment bank account
- R23: Credit entry refused by receiver
- R29: Corporate customer advises not authorized
- R34: Limited participation RDFI
- R38: Stop Payment on Source Document (Adjustment Entry)
- R39: Improper Source Document

## Example Usage

```typescript
import { ACHReturnCode } from "@moovio/sdk/models/components";

let value: ACHReturnCode = "R38";
```

## Values

```typescript
"R02" | "R03" | "R04" | "R05" | "R07" | "R08" | "R10" | "R11" | "R12" | "R13" | "R14" | "R15" | "R16" | "R17" | "R20" | "R23" | "R29" | "R34" | "R38" | "R39"
```