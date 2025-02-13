# CreateSweepConfigRequest

## Example Usage

```typescript
import { CreateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigRequest = {
  accountID: "5c051f27-7c4b-40e1-b725-a24ad9812f07",
  createSweepConfig: {
    walletID: "3774eeb0-a342-4973-ae3c-02d8a6622e77",
    status: "enabled",
    pushPaymentMethodID: "8e667d9b-b0fb-490e-a7e6-9e7266bd0742",
    pullPaymentMethodID: "d83c8cf6-54bf-4479-8f3f-8bc2ffdd5de4",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createSweepConfig`                                                          | [components.CreateSweepConfig](../../models/components/createsweepconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |