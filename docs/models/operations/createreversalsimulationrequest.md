# CreateReversalSimulationRequest

## Example Usage

```typescript
import { CreateReversalSimulationRequest } from "@moovio/sdk/models/operations";

let value: CreateReversalSimulationRequest = {
  accountID: "<id>",
  authorizationID: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `accountID`                                              | *string*                                                 | :heavy_check_mark:                                       | The Moov business account for which the card was issued. |
| `authorizationID`                                        | *string*                                                 | :heavy_check_mark:                                       | The ID of the authorization to reverse.                  |