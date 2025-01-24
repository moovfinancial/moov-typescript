# ListFeePlansRequest

## Example Usage

```typescript
import { ListFeePlansRequest } from "moov-sdk/models/operations";

let value: ListFeePlansRequest = {
  accountID: "2ad83c8c-f654-4bf4-b79f-3f8bc2ffdd5d",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `xMoovVersion`                                               | [components.Versions](../../models/components/versions.md)   | :heavy_minus_sign:                                           | Specify an API version.                                      |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |