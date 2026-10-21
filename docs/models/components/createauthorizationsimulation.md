# CreateAuthorizationSimulation

## Example Usage

```typescript
import { CreateAuthorizationSimulation } from "@moovio/sdk/models/components";

let value: CreateAuthorizationSimulation = {
  issuedCardID: "<id>",
  amount: "-14.89",
  merchantData: {
    networkID: "111111111111111",
    name: "Whole Body Fitness",
    city: "San Francisco",
    country: "US",
    postalCode: "94107",
    state: "CA",
    mcc: "7298",
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `issuedCardID`                                                                                                                               | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |
| `amount`                                                                                                                                     | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | A decimal-formatted numerical string that represents up to 2 decimal place precision. In USD for example, 12.34 is $12.34 and 0.99 is $0.99. | -14.89                                                                                                                                       |
| `merchantData`                                                                                                                               | [components.SimulationIssuingMerchantData](../../models/components/simulationissuingmerchantdata.md)                                         | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |