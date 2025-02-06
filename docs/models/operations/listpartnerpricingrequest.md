# ListPartnerPricingRequest

## Example Usage

```typescript
import { ListPartnerPricingRequest } from "@moovio/sdk/models/operations";

let value: ListPartnerPricingRequest = {
  accountID: "06caf1e5-7613-4b02-90d9-2cfee0949527",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |