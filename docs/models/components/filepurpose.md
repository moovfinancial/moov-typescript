# FilePurpose

The file's purpose.

## Example Usage

```typescript
import { FilePurpose } from "@moovio/sdk/models/components";

let value: FilePurpose = "representative_verification";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"business_verification" | "representative_verification" | "individual_verification" | "merchant_underwriting" | "account_requirement" | "identity_verification" | Unrecognized<string>
```