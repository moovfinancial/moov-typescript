# CreateBankAccountAttestationRequest

## Example Usage

```typescript
import { CreateBankAccountAttestationRequest } from "@moovio/sdk/models/operations";

let value: CreateBankAccountAttestationRequest = {
  accountID: "<id>",
  bankAccountID: "<id>",
  createBankAccountAttestation: {
    attestedAt: new Date("2026-05-15"),
    description: "knowledgeable whose wallop",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `bankAccountID`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createBankAccountAttestation`                                                                     | [components.CreateBankAccountAttestation](../../models/components/createbankaccountattestation.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |