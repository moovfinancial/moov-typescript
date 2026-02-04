# ~~VerificationStatusDetail~~

Additional detail for a verification status.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { VerificationStatusDetail } from "@moovio/sdk/models/components";

let value: VerificationStatusDetail = "docAddressMismatch";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"failedAutoVerify" | "docDobMismatch" | "docNameMismatch" | "docAddressMismatch" | "docNumberMismatch" | "docIncomplete" | "docFailedRisk" | "potentialAccountSanctionsMatch" | "potentialRepresentativeSanctionsMatch" | "failedOther" | Unrecognized<string>
```