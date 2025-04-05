# ListPartnerPricingAgreementsRequest

## Example Usage

```typescript
import { ListPartnerPricingAgreementsRequest } from "@moovio/sdk/models/operations";

let value: ListPartnerPricingAgreementsRequest = {
  skip: 60,
  count: 20,
  accountID: "0d731ce9-86d4-412d-954b-24cd1ea4fddc",
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