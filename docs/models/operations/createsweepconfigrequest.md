# CreateSweepConfigRequest

## Example Usage

```typescript
import { CreateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigRequest = {
  accountID: "0a342973-e3c0-42d8-ba66-22e77a08e667",
  createSweepConfig: {
    walletID: "9bb0fb90-e7e6-49e7-b266-bd0742ad83c8",
    status: "disabled",
    pushPaymentMethodID: "654bf479-f3f8-4bc2-9ffd-d5de42c9165a",
    pullPaymentMethodID: "acb9e38c-33ac-4e7b-a25a-2f2c5b6be92f",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createSweepConfig`                                                          | [components.CreateSweepConfig](../../models/components/createsweepconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |