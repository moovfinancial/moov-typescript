# RetrieveFeesRequest

## Example Usage

```typescript
import { RetrieveFeesRequest } from "@moovio/sdk/models/operations";

let value: RetrieveFeesRequest = {
  accountID: "53397a2d-769a-4532-babe-e52a28ea49da",
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