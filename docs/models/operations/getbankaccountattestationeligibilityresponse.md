# GetBankAccountAttestationEligibilityResponse

## Example Usage

```typescript
import { GetBankAccountAttestationEligibilityResponse } from "@moovio/sdk/models/operations";

let value: GetBankAccountAttestationEligibilityResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    enabled: true,
    eligible: true,
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [components.BankAccountAttestationEligibility](../../models/components/bankaccountattestationeligibility.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |