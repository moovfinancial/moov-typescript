# ListFeePlansRequest

## Example Usage

```typescript
import { ListFeePlansRequest } from "@moovio/sdk/models/operations";

let value: ListFeePlansRequest = {
  accountID: "b75e506c-af1e-4576-913b-020d92cfee09",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |