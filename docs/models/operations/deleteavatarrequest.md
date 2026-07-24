# DeleteAvatarRequest

## Example Usage

```typescript
import { DeleteAvatarRequest } from "@moovio/sdk/models/operations";

let value: DeleteAvatarRequest = {
  uniqueID: "<id>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uniqueID`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | The accountID to delete the avatar for. Only accountID values are accepted for writes. |