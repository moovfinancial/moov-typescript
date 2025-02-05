# ListFeePlansRequest

## Example Usage

```typescript
import { ListFeePlansRequest } from "@moovio/sdk/models/operations";

let value: ListFeePlansRequest = {
  accountID: "2fd4f542-ef5b-4516-881d-739c5b6fc50a",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |