# RetrieveFeesRequest

## Example Usage

```typescript
import { RetrieveFeesRequest } from "@moovio/sdk/models/operations";

let value: RetrieveFeesRequest = {
  accountID: "3e89020e-2d5c-4541-847d-7f806b3b80c8",
  skip: 60,
  count: 20,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accountID`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `transferID`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | Optional transfer ID to filter the results by.                                   |                                                                                  |
| `disputeID`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | Optional dispute ID to filter the results by.                                    |                                                                                  |
| `startDateTime`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | Optional date-time to inclusively filter all fees created after this date-time.  |                                                                                  |
| `endDateTime`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | Optional date-time to exclusively filter all fees created before this date-time. |                                                                                  |
| `skip`                                                                           | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 60                                                                               |
| `count`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 20                                                                               |