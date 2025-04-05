# ListFeePlansRequest

## Example Usage

```typescript
import { ListFeePlansRequest } from "@moovio/sdk/models/operations";

let value: ListFeePlansRequest = {
  accountID: "b2c4d9a1-8cbf-43cb-893e-78591c7f1071",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |