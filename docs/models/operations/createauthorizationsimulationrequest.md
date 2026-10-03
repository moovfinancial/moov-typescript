# CreateAuthorizationSimulationRequest

## Example Usage

```typescript
import { CreateAuthorizationSimulationRequest } from "@moovio/sdk/models/operations";

let value: CreateAuthorizationSimulationRequest = {
  accountID: "<id>",
  createAuthorizationSimulation: {
    issuedCardID: "<id>",
    amount: "-14.89",
    merchantData: {
      networkID: "<id>",
      name: "Whole Body Fitness",
      city: "San Francisco",
      country: "US",
      postalCode: "94107",
      state: "CA",
      mcc: "7298",
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `accountID`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The Moov business account for which the card was issued.                                             |
| `createAuthorizationSimulation`                                                                      | [components.CreateAuthorizationSimulation](../../models/components/createauthorizationsimulation.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |