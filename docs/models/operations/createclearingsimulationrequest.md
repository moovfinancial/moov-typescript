# CreateClearingSimulationRequest

## Example Usage

```typescript
import { CreateClearingSimulationRequest } from "@moovio/sdk/models/operations";

let value: CreateClearingSimulationRequest = {
  accountID: "<id>",
  authorizationID: "<id>",
  createClearingSimulation: {
    amount: "-14.89",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `accountID`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The Moov business account for which the card was issued.                                   |
| `authorizationID`                                                                          | *string*                                                                                   | :heavy_check_mark:                                                                         | The ID of the authorization to clear.                                                      |
| `createClearingSimulation`                                                                 | [components.CreateClearingSimulation](../../models/components/createclearingsimulation.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |