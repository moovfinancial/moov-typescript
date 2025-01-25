# AcceptDisputeRequest

## Example Usage

```typescript
import { AcceptDisputeRequest } from "@moovio/sdk/models/operations";

let value: AcceptDisputeRequest = {
  accountID: "d98f6e96-5e94-4833-b2bc-56c0548e0d89",
  disputeID: "24379b06-e7d1-44b9-97ac-e7a6e76f05d7",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `disputeID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |