# GetFileDetailsRequest

## Example Usage

```typescript
import { GetFileDetailsRequest } from "moov-sdk/models/operations";

let value: GetFileDetailsRequest = {
  accountID: "c9e189dd-790b-40a8-bf26-d8d8ae0e2c95",
  fileID: "d43552ee-d7c5-4de8-8783-16cad718063d",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `fileID`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |