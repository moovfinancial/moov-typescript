# ListFeePlansRequest

## Example Usage

```typescript
import { ListFeePlansRequest } from "@moovio/sdk/models/operations";

let value: ListFeePlansRequest = {
  accountID: "94fb9b75-e506-4caf-b1e5-7613b020d92c",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |