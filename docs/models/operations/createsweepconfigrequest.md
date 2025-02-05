# CreateSweepConfigRequest

## Example Usage

```typescript
import { CreateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigRequest = {
  accountID: "74c12fa8-cf3c-45bb-9f10-b9bc75c69e20",
  createSweepConfig: {
    walletID: "c9f84cad-a740-4406-93b3-1d0ce187c940",
    status: "disabled",
    pushPaymentMethodID: "e2d01f61-7008-4395-92f3-04445c051f27",
    pullPaymentMethodID: "c4b0e172-5a24-4ad9-a812-f07c3774eeb0",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createSweepConfig`                                                          | [components.CreateSweepConfig](../../models/components/createsweepconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |