# CreateSweepConfigRequest

## Example Usage

```typescript
import { CreateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigRequest = {
  accountID: "52f30444-5c05-41f2-b77c-4b0e1725a24a",
  createSweepConfig: {
    walletID: "9812f07c-3774-4eeb-a0a3-42973e3c02d8",
    status: "enabled",
    pushPaymentMethodID: "622e77a0-8e66-47d9-9bb0-fb90e7e69e72",
    pullPaymentMethodID: "6bd0742a-d83c-48cf-b654-bf479f3f8bc2",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createSweepConfig`                                                          | [components.CreateSweepConfig](../../models/components/createsweepconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |