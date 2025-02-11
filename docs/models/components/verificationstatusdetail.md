# ~~VerificationStatusDetail~~

Additional detail for a verification status.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { VerificationStatusDetail } from "@moovio/sdk/models/components";

let value: VerificationStatusDetail = "failedAutoVerify";
```

## Values

```typescript
"failedAutoVerify" | "docDobMismatch" | "docNameMismatch" | "docAddressMismatch" | "docNumberMismatch" | "docIncomplete" | "docFailedRisk" | "potentialAccountSanctionsMatch" | "potentialRepresentativeSanctionsMatch" | "failedOther"
```