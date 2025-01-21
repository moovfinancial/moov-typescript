# ListFeePlanAgreementsRequest

## Example Usage

```typescript
import { ListFeePlanAgreementsRequest } from "moov-sdk/models/operations";

let value: ListFeePlanAgreementsRequest = {
  accountID: "bd4e9bce-46ed-467b-9053-8c2f7c57fb03",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                           | [components.Versions](../../models/components/versions.md)                               | :heavy_minus_sign:                                                                       | Specify an API version.                                                                  |
| `accountID`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `agreementID`                                                                            | *string*[]                                                                               | :heavy_minus_sign:                                                                       | A comma-separated list of agreement IDs to filter the results by.                        |
| `status`                                                                                 | [components.FeePlanAgreementStatus](../../models/components/feeplanagreementstatus.md)[] | :heavy_minus_sign:                                                                       | A comma-separated list of statuses to filter the results by.                             |