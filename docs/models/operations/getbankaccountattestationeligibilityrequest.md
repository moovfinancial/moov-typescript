# GetBankAccountAttestationEligibilityRequest

## Example Usage

```typescript
import { GetBankAccountAttestationEligibilityRequest } from "@moovio/sdk/models/operations";

let value: GetBankAccountAttestationEligibilityRequest = {
  accountID: "<id>",
  bankAccountID: "<id>",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                                                 | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `bankAccountID`                                                                                                             | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `attestedAt`                                                                                                                | [Date](../../types/rfcdate.md)                                                                                              | :heavy_minus_sign:                                                                                                          | Date to check eligibility against, as if it were the `attestedAt` value of a new attestation. Defaults<br/>to the current date. |