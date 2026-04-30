# ListResidualsRequest

## Example Usage

```typescript
import { ListResidualsRequest } from "@moovio/sdk/models/operations";

let value: ListResidualsRequest = {
  skip: 60,
  count: 20,
  accountID: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `skip`                                                                                           | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 60                                                                                               |
| `count`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 20                                                                                               |
| `accountID`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `startDateTime`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | Optional date-time to inclusively filter all residuals with a period start after this date-time. |                                                                                                  |
| `endDateTime`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | Optional date-time to exclusively filter all residuals with a period end before this date-time.  |                                                                                                  |