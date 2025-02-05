# CreateFeePlanAgreementsRequest

## Example Usage

```typescript
import { CreateFeePlanAgreementsRequest } from "@moovio/sdk/models/operations";

let value: CreateFeePlanAgreementsRequest = {
  accountID: "cdf69baf-44ec-439b-b569-7c0659c12ab9",
  createFeePlanAgreement: {
    planID: "72a998f2-1239-4937-977c-7c28d2792c1f",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `accountID`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createFeePlanAgreement`                                                               | [components.CreateFeePlanAgreement](../../models/components/createfeeplanagreement.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |