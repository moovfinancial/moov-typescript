# ListRepresentativesRequest

## Example Usage

```typescript
import { ListRepresentativesRequest } from "moov-sdk/models/operations";

let value: ListRepresentativesRequest = {
  accountID: "f63fde8b-88fb-4962-a14b-321d336a9ea8",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | ID of the account.                                         |