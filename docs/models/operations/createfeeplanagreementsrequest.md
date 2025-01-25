# CreateFeePlanAgreementsRequest

## Example Usage

```typescript
import { CreateFeePlanAgreementsRequest } from "@moovio/sdk/models/operations";

let value: CreateFeePlanAgreementsRequest = {
  accountID: "c3774eeb-0a34-4297-93e3-c02d8a6622e7",
  createFeePlanAgreement: {
    planID: "a08e667d-9bb0-4fb9-90e7-e69e7266bd07",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                         | [components.Versions](../../models/components/versions.md)                             | :heavy_minus_sign:                                                                     | Specify an API version.                                                                |
| `accountID`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createFeePlanAgreement`                                                               | [components.CreateFeePlanAgreement](../../models/components/createfeeplanagreement.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |