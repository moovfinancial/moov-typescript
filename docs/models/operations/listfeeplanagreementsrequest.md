# ListFeePlanAgreementsRequest

## Example Usage

```typescript
import { ListFeePlanAgreementsRequest } from "moov-sdk/models/operations";

let value: ListFeePlanAgreementsRequest = {
  accountID: "45c051f2-77c4-4b0e-9172-5a24ad9812f0",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                           | [components.Versions](../../models/components/versions.md)                               | :heavy_minus_sign:                                                                       | Specify an API version.                                                                  |
| `accountID`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `agreementID`                                                                            | *string*[]                                                                               | :heavy_minus_sign:                                                                       | A comma-separated list of agreement IDs to filter the results by.                        |
| `status`                                                                                 | [components.FeePlanAgreementStatus](../../models/components/feeplanagreementstatus.md)[] | :heavy_minus_sign:                                                                       | A comma-separated list of statuses to filter the results by.                             |