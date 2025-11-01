# ListResidualFeesRequest

## Example Usage

```typescript
import { ListResidualFeesRequest } from "@moovio/sdk/models/operations";

let value: ListResidualFeesRequest = {
  skip: 60,
  count: 20,
  accountID: "4d1efaf2-6d84-489e-a95c-745590f4b18c",
  residualID: "c0c1e9e0-371e-4134-b203-602478bf1ca3",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `skip`                                                                           | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 60                                                                               |
| `count`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              | 20                                                                               |
| `accountID`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `residualID`                                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |
| `startDateTime`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | Optional date-time to inclusively filter all fees created after this date-time.  |                                                                                  |
| `endDateTime`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | Optional date-time to exclusively filter all fees created before this date-time. |                                                                                  |