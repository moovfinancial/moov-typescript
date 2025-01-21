# CreateFeePlanAgreementsRequest

## Example Usage

```typescript
import { CreateFeePlanAgreementsRequest } from "moov-sdk/models/operations";

let value: CreateFeePlanAgreementsRequest = {
  accountID: "fca1c22d-01e4-4ca1-ac3b-68f44459ce0a",
  createFeePlanAgreement: {
    planID: "9cfb2fd4-1cf2-4a00-9cd5-7cd4c37ba8a0",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                         | [components.Versions](../../models/components/versions.md)                             | :heavy_minus_sign:                                                                     | Specify an API version.                                                                |
| `accountID`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createFeePlanAgreement`                                                               | [components.CreateFeePlanAgreement](../../models/components/createfeeplanagreement.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |