# UpdateBrandRequest

## Example Usage

```typescript
import { UpdateBrandRequest } from "moov-sdk/models/operations";

let value: UpdateBrandRequest = {
  accountID: "d1a6d5b6-8cf2-4820-9bf9-10560d7fe8a5",
  updateBrand: {},
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `xMoovVersion`                                                   | [components.Versions](../../models/components/versions.md)       | :heavy_minus_sign:                                               | Specify an API version.                                          |
| `accountID`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `updateBrand`                                                    | [components.UpdateBrand](../../models/components/updatebrand.md) | :heavy_check_mark:                                               | N/A                                                              |