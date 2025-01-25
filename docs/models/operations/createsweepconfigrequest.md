# CreateSweepConfigRequest

## Example Usage

```typescript
import { CreateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigRequest = {
  accountID: "acdc5284-c06c-41a3-a240-a5f1e71d1a37",
  createSweepConfig: {
    walletID: "e4635288-9360-4047-9bc6-cba248d6fa58",
    status: "disabled",
    pushPaymentMethodID: "031c3b8d-f22a-40d6-a695-43bc93b2e773",
    pullPaymentMethodID: "f9a45382-9791-4e63-a8eb-54a157c5cc03",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `xMoovVersion`                                                               | [components.Versions](../../models/components/versions.md)                   | :heavy_minus_sign:                                                           | Specify an API version.                                                      |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createSweepConfig`                                                          | [components.CreateSweepConfig](../../models/components/createsweepconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |