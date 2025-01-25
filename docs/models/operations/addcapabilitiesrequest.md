# AddCapabilitiesRequest

## Example Usage

```typescript
import { AddCapabilitiesRequest } from "@moovio/sdk/models/operations";

let value: AddCapabilitiesRequest = {
  accountID: "066d3b0e-a642-496b-ae4a-6095071a88ee",
  addCapabilities: {
    capabilities: [
      "collect-funds",
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `xMoovVersion`                                                           | [components.Versions](../../models/components/versions.md)               | :heavy_minus_sign:                                                       | Specify an API version.                                                  |
| `accountID`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `addCapabilities`                                                        | [components.AddCapabilities](../../models/components/addcapabilities.md) | :heavy_check_mark:                                                       | N/A                                                                      |