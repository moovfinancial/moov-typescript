# ListFeePlansRequest

## Example Usage

```typescript
import { ListFeePlansRequest } from "moov-sdk/models/operations";

let value: ListFeePlansRequest = {
  accountID: "313de877-ff31-4056-93ed-b7efe4d51bcf",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `xMoovVersion`                                               | [components.Versions](../../models/components/versions.md)   | :heavy_minus_sign:                                           | Specify an API version.                                      |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |