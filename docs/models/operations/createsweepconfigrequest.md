# CreateSweepConfigRequest

## Example Usage

```typescript
import { CreateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigRequest = {
  accountID: "45c051f2-77c4-4b0e-9172-5a24ad9812f0",
  createSweepConfig: {
    walletID: "c3774eeb-0a34-4297-93e3-c02d8a6622e7",
    status: "disabled",
    pushPaymentMethodID: "08e667d9-bb0f-4b90-8e7e-69e7266bd074",
    pullPaymentMethodID: "ad83c8cf-654b-4f47-99f3-f8bc2ffdd5de",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createSweepConfig`                                                          | [components.CreateSweepConfig](../../models/components/createsweepconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |