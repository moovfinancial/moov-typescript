# GetAvatarRequest

## Example Usage

```typescript
import { GetAvatarRequest } from "@moovio/sdk/models/operations";

let value: GetAvatarRequest = {
  uniqueID: "<id>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `xMoovVersion`                                                                                           | [components.Versions](../../models/components/versions.md)                                               | :heavy_minus_sign:                                                                                       | Specify an API version.                                                                                  |
| `uniqueID`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Any unique ID associated with an account such as accountID, representativeID, routing number, or userID. |