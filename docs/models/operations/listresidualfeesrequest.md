# ListResidualFeesRequest

## Example Usage

```typescript
import { ListResidualFeesRequest } from "@moovio/sdk/models/operations";

let value: ListResidualFeesRequest = {
  skip: 60,
  count: 20,
  accountID: "<id>",
  residualID: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `skip`                                                                           | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 60                                                                               |
| `count`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 20                                                                               |
| `accountID`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `residualID`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | Unique identifier for this residual payment calculation.                         |                                                                                  |
| `startDateTime`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | Optional date-time to inclusively filter all fees created after this date-time.  |                                                                                  |
| `endDateTime`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | Optional date-time to exclusively filter all fees created before this date-time. |                                                                                  |