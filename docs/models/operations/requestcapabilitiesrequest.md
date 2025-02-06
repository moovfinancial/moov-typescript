# RequestCapabilitiesRequest

## Example Usage

```typescript
import { RequestCapabilitiesRequest } from "@moovio/sdk/models/operations";

let value: RequestCapabilitiesRequest = {
  accountID: "b062dbef-cf90-405d-9df1-0e48f6a6c834",
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