# GetCapabilityResponse

## Example Usage

```typescript
import { GetCapabilityResponse } from "@moovio/sdk/models/operations";

let value: GetCapabilityResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    capability: "send-funds",
    accountID: "4b0d788a-5152-485f-af99-fec5537fe10e",
    status: "enabled",
    createdOn: new Date("2025-01-08T07:46:32.172Z"),
    updatedOn: new Date("2024-12-07T01:38:47.300Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.Capability](../../models/components/capability.md) | :heavy_check_mark:                                             | N/A                                                            |