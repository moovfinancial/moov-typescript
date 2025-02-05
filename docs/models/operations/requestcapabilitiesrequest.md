# RequestCapabilitiesRequest

## Example Usage

```typescript
import { RequestCapabilitiesRequest } from "@moovio/sdk/models/operations";

let value: RequestCapabilitiesRequest = {
  accountID: "87a014f2-5055-4fd6-b0da-2f1d46caf91e",
  addCapabilities: {
    capabilities: [
      "wallet",
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `accountID`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `addCapabilities`                                                        | [components.AddCapabilities](../../models/components/addcapabilities.md) | :heavy_check_mark:                                                       | N/A                                                                      |