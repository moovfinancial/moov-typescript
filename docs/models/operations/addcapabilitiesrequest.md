# AddCapabilitiesRequest

## Example Usage

```typescript
import { AddCapabilitiesRequest } from "moov-sdk/models/operations";

let value: AddCapabilitiesRequest = {
  accountID: "9dc30420-48a6-439c-bbd4-875a2c0696a0",
  addCapabilities: {
    capabilities: [
      "transfers",
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