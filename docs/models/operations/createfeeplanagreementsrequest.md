# CreateFeePlanAgreementsRequest

## Example Usage

```typescript
import { CreateFeePlanAgreementsRequest } from "@moovio/sdk/models/operations";

let value: CreateFeePlanAgreementsRequest = {
  accountID: "3953843e-2464-43c5-8182-5e5a82ad1cbd",
  createFeePlanAgreement: {
    planID: "4b0bd764-02fd-44f5-b42e-f5b51681d739",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `accountID`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createFeePlanAgreement`                                                               | [components.CreateFeePlanAgreement](../../models/components/createfeeplanagreement.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |