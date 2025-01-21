# ListRefundsRequest

## Example Usage

```typescript
import { ListRefundsRequest } from "moov-sdk/models/operations";

let value: ListRefundsRequest = {
  accountID: "92d0d37b-c670-4546-a42f-6ae92cc6863c",
  transferID: "a7744dd0-b5e3-45b1-aba4-bec82e76835b",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `transferID`                                               | *string*                                                   | :heavy_check_mark:                                         | Identifier for the transfer.                               |