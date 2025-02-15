# RequestCapabilitiesRequest

## Example Usage

```typescript
import { RequestCapabilitiesRequest } from "@moovio/sdk/models/operations";

let value: RequestCapabilitiesRequest = {
  accountID: "ecb062db-efcf-4900-85dd-f10e48f6a6c8",
  addCapabilities: {
    capabilities: [
      "send-funds",
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `accountID`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `addCapabilities`                                                        | [components.AddCapabilities](../../models/components/addcapabilities.md) | :heavy_check_mark:                                                       | N/A                                                                      |