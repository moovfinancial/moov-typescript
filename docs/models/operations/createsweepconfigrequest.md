# CreateSweepConfigRequest

## Example Usage

```typescript
import { CreateSweepConfigRequest } from "@moovio/sdk/models/operations";

let value: CreateSweepConfigRequest = {
  accountID: "9bc75c69-e204-4c9f-884c-ada7404063b3",
  createSweepConfig: {
    walletID: "d0ce187c-9407-4ee2-8d01-f6170083952f",
    status: "enabled",
    pushPaymentMethodID: "4445c051-f277-4c4b-b0e1-725a24ad9812",
    pullPaymentMethodID: "07c3774e-eb0a-4342-b973-e3c02d8a6622",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createSweepConfig`                                                          | [components.CreateSweepConfig](../../models/components/createsweepconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |