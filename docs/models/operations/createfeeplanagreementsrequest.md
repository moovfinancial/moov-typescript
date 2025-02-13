# CreateFeePlanAgreementsRequest

## Example Usage

```typescript
import { CreateFeePlanAgreementsRequest } from "@moovio/sdk/models/operations";

let value: CreateFeePlanAgreementsRequest = {
  accountID: "3843e246-43c5-4182-85e5-a82ad1cbd14b",
  createFeePlanAgreement: {
    planID: "bd76402f-d4f5-442e-9f5b-51681d739c5b",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `accountID`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createFeePlanAgreement`                                                               | [components.CreateFeePlanAgreement](../../models/components/createfeeplanagreement.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |