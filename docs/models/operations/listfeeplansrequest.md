# ListFeePlansRequest

## Example Usage

```typescript
import { ListFeePlansRequest } from "@moovio/sdk/models/operations";

let value: ListFeePlansRequest = {
  accountID: "e506caf1-e576-413b-8020-d92cfee09495",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |