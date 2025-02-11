# RequestCapabilitiesRequest

## Example Usage

```typescript
import { RequestCapabilitiesRequest } from "@moovio/sdk/models/operations";

let value: RequestCapabilitiesRequest = {
  accountID: "cb062dbe-fcf9-4005-9ddf-10e48f6a6c83",
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