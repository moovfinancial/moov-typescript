# ListPartnerPricingRequest

## Example Usage

```typescript
import { ListPartnerPricingRequest } from "@moovio/sdk/models/operations";

let value: ListPartnerPricingRequest = {
  accountID: "020e2d5c-5414-47d7-9f80-6b3b80c8174e",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accountID`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `planIDs`                                                    | *string*[]                                                   | :heavy_minus_sign:                                           | A comma-separated list of plan IDs to filter the results by. |