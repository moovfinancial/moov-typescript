# CreateSweepConfigRequest

## Example Usage

```typescript
import { CreateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigRequest = {
  accountID: "01f61700-8395-42f3-a044-45c051f277c4",
  createSweepConfig: {
    walletID: "0e1725a2-4ad9-4812-8f07-c3774eeb0a34",
    status: "disabled",
    pushPaymentMethodID: "73e3c02d-8a66-422e-a77a-08e667d9bb0f",
    pullPaymentMethodID: "90e7e69e-7266-4bd0-b742-ad83c8cf654b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createSweepConfig`                                                          | [components.CreateSweepConfig](../../models/components/createsweepconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |