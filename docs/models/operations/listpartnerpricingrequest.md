# ListPartnerPricingRequest

## Example Usage

```typescript
import { ListPartnerPricingRequest } from "@moovio/sdk/models/operations";

let value: ListPartnerPricingRequest = {
  accountID: "42c9165a-6acb-49e3-b8c3-3ace7b25a2f2",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `xMoovVersion`                                               | [components.Versions](../../models/components/versions.md)   | :heavy_minus_sign:                                           | Specify an API version.                                      |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |