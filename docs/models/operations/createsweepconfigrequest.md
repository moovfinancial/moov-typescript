# CreateSweepConfigRequest

## Example Usage

```typescript
import { CreateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigRequest = {
  accountID: "04445c05-1f27-47c4-8b0e-1725a24ad981",
  createSweepConfig: {
    walletID: "f07c3774-eeb0-4a34-8297-3e3c02d8a662",
    status: "disabled",
    pushPaymentMethodID: "77a08e66-7d9b-4b0f-8b90-e7e69e7266bd",
    pullPaymentMethodID: "742ad83c-8cf6-454b-9f47-9f3f8bc2ffdd",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createSweepConfig`                                                          | [components.CreateSweepConfig](../../models/components/createsweepconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |