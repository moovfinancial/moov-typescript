# UpdateBrandRequest

## Example Usage

```typescript
import { UpdateBrandRequest } from "moov-sdk/models/operations";

let value: UpdateBrandRequest = {
  accountID: "2805a288-e712-44c4-a913-91b74da1a3e2",
  updateBrand: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `xMoovVersion`                                                   | [components.Versions](../../models/components/versions.md)       | :heavy_minus_sign:                                               | Specify an API version.                                          |
| `accountID`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `updateBrand`                                                    | [components.UpdateBrand](../../models/components/updatebrand.md) | :heavy_check_mark:                                               | N/A                                                              |