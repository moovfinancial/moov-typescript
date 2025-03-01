# ListFeePlanAgreementsRequest

## Example Usage

```typescript
import { ListFeePlanAgreementsRequest } from "@moovio/sdk/models/operations";

let value: ListFeePlanAgreementsRequest = {
  skip: 60,
  count: 20,
  accountID: "5c68c7fc-df69-4baf-a44e-c39b5697c065",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `skip`                                                                                   | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | 60                                                                                       |
| `count`                                                                                  | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | 20                                                                                       |
| `accountID`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `agreementID`                                                                            | *string*[]                                                                               | :heavy_minus_sign:                                                                       | A comma-separated list of agreement IDs to filter the results by.                        |                                                                                          |
| `status`                                                                                 | [components.FeePlanAgreementStatus](../../models/components/feeplanagreementstatus.md)[] | :heavy_minus_sign:                                                                       | A comma-separated list of statuses to filter the results by.                             |                                                                                          |