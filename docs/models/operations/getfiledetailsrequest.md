# GetFileDetailsRequest

## Example Usage

```typescript
import { GetFileDetailsRequest } from "moov-sdk/models/operations";

let value: GetFileDetailsRequest = {
  accountID: "9428460a-0b32-49f6-ad08-a6206bf74517",
  fileID: "90aa8f4d-243e-4c76-80bf-c34663ccb0e5",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `fileID`                                                   | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |