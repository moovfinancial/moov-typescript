# ListFeeRevenueRequest

## Example Usage

```typescript
import { ListFeeRevenueRequest } from "@moovio/sdk/models/operations";

let value: ListFeeRevenueRequest = {
  skip: 60,
  count: 20,
  accountID: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `skip`                                                                           | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 60                                                                               |
| `count`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 20                                                                               |
| `accountID`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The Partner's AccountID.                                                         |                                                                                  |
| `transferID`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | Optional transfer ID to filter the results by.                                   |                                                                                  |
| `disputeID`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Optional dispute ID to filter the results by.                                    |                                                                                  |
| `residualID`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | Optional residual ID to filter the results by.                                   |                                                                                  |
| `startDateTime`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | Optional date-time to inclusively filter all fees created after this date-time.  |                                                                                  |
| `endDateTime`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | Optional date-time to exclusively filter all fees created before this date-time. |                                                                                  |