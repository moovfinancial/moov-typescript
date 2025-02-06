# ListPartnerPricingAgreementsRequest

## Example Usage

```typescript
import { ListPartnerPricingAgreementsRequest } from "@moovio/sdk/models/operations";

let value: ListPartnerPricingAgreementsRequest = {
  accountID: "0e2d5c54-147d-47f8-a06b-3b80c8174e4f",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `accountID`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `agreementID`                                                                            | *string*[]                                                                               | :heavy_minus_sign:                                                                       | A comma-separated list of agreement IDs to filter the results by.                        |
| `status`                                                                                 | [components.FeePlanAgreementStatus](../../models/components/feeplanagreementstatus.md)[] | :heavy_minus_sign:                                                                       | A comma-separated list of statuses to filter the results by.                             |