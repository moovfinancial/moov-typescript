# CreateSweepConfigRequest

## Example Usage

```typescript
import { CreateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigRequest = {
  accountID: "50645d04-f24e-4d1d-8583-d310e3548d1a",
  createSweepConfig: {
    walletID: "b02613e9-93bb-4b28-be2e-245608a767c1",
    status: "disabled",
    pushPaymentMethodID: "51c89e26-3f16-4313-8e96-71042aef8008",
    pullPaymentMethodID: "f31deb60-f1a6-48a5-9176-d4a9fa7283a5",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createSweepConfig`                                                          | [components.CreateSweepConfig](../../models/components/createsweepconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |