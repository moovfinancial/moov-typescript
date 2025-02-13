# ListPartnerPricingRequest

## Example Usage

```typescript
import { ListPartnerPricingRequest } from "@moovio/sdk/models/operations";

let value: ListPartnerPricingRequest = {
  accountID: "e89020e2-d5c5-4414-97d7-f806b3b80c81",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |