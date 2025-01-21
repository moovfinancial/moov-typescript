# CreateSweepConfigRequest

## Example Usage

```typescript
import { CreateSweepConfigRequest } from "moov-sdk/models/operations";

let value: CreateSweepConfigRequest = {
  accountID: "8ce0f565-db26-40c3-b1a3-82cf1d7087e5",
  createSweepConfig: {
    walletID: "268233bf-2820-4066-9a63-193603a1add2",
    status: "disabled",
    pushPaymentMethodID: "bd67e6a6-b978-49ea-abf1-35f39144b1c4",
    pullPaymentMethodID: "56218a12-023b-41a6-92f8-405939406538",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `xMoovVersion`                                                               | [components.Versions](../../models/components/versions.md)                   | :heavy_minus_sign:                                                           | Specify an API version.                                                      |
| `accountID`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createSweepConfig`                                                          | [components.CreateSweepConfig](../../models/components/createsweepconfig.md) | :heavy_check_mark:                                                           | N/A                                                                          |