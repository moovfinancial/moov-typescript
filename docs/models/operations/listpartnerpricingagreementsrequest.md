# ListPartnerPricingAgreementsRequest

## Example Usage

```typescript
import { ListPartnerPricingAgreementsRequest } from "@moovio/sdk/models/operations";

let value: ListPartnerPricingAgreementsRequest = {
  accountID: "5b6be92f-836b-4ee2-bd96-7cda0c067846",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                           | [components.Versions](../../models/components/versions.md)                               | :heavy_minus_sign:                                                                       | Specify an API version.                                                                  |
| `accountID`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `agreementID`                                                                            | *string*[]                                                                               | :heavy_minus_sign:                                                                       | A comma-separated list of agreement IDs to filter the results by.                        |
| `status`                                                                                 | [components.FeePlanAgreementStatus](../../models/components/feeplanagreementstatus.md)[] | :heavy_minus_sign:                                                                       | A comma-separated list of statuses to filter the results by.                             |