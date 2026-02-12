# RequestCapabilitiesRequest

## Example Usage

```typescript
import { RequestCapabilitiesRequest } from "@moovio/sdk/models/operations";

let value: RequestCapabilitiesRequest = {
  accountID: "<id>",
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
| `accountID`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `addCapabilities`                                                        | [components.AddCapabilities](../../models/components/addcapabilities.md) | :heavy_check_mark:                                                       | N/A                                                                      |