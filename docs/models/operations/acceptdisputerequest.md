# AcceptDisputeRequest

## Example Usage

```typescript
import { AcceptDisputeRequest } from "moov-sdk/models/operations";

let value: AcceptDisputeRequest = {
  accountID: "fa6f862b-9333-4704-8b9d-b0975fa481b5",
  disputeID: "20cb746e-1038-401b-97fe-46e95cea3d6b",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |