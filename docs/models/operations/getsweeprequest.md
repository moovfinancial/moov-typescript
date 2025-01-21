# GetSweepRequest

## Example Usage

```typescript
import { GetSweepRequest } from "moov-sdk/models/operations";

let value: GetSweepRequest = {
  accountID: "b7ca9225-f1f7-46dd-92c8-519cef160aea",
  walletID: "cf0d5b33-cccc-41e6-8395-bbdfc2c99522",
  sweepID: "cbdb2b81-eea6-431c-8f07-16960fec6bb5",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `xMoovVersion`                                             | [components.Versions](../../models/components/versions.md) | :heavy_minus_sign:                                         | Specify an API version.                                    |
| `accountID`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `walletID`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `sweepID`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |