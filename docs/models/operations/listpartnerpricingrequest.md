# ListPartnerPricingRequest

## Example Usage

```typescript
import { ListPartnerPricingRequest } from "moov-sdk/models/operations";

let value: ListPartnerPricingRequest = {
  accountID: "4169725e-7876-4037-9975-cbf0b04eca60",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `xMoovVersion`                                               | [components.Versions](../../models/components/versions.md)   | :heavy_minus_sign:                                           | Specify an API version.                                      |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |