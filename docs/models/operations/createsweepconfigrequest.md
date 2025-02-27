# CreateSweepConfigRequest

## Example Usage

```typescript
import { CreateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigRequest = {
  accountID: "2d01f617-0083-4952-bf30-4445c051f277",
  createSweepConfig: {
    walletID: "4b0e1725-a24a-4d98-812f-07c3774eeb0a",
    status: "enabled",
    pushPaymentMethodID: "2973e3c0-2d8a-4662-82e7-7a08e667d9bb",
    pullPaymentMethodID: "fb90e7e6-9e72-466b-9d07-42ad83c8cf65",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createSweepConfig`                                                          | [components.CreateSweepConfig](../../models/components/createsweepconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |