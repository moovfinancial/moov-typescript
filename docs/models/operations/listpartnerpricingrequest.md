# ListPartnerPricingRequest

## Example Usage

```typescript
import { ListPartnerPricingRequest } from "@moovio/sdk/models/operations";

let value: ListPartnerPricingRequest = {
  accountID: "8f94f6ba-fe21-4ce7-9b13-29304a95d448",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |