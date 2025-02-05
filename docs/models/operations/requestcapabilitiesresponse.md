# RequestCapabilitiesResponse

## Example Usage

```typescript
import { RequestCapabilitiesResponse } from "@moovio/sdk/models/operations";

let value: RequestCapabilitiesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      capability: "transfers",
      accountID: "62dbefcf-9005-4ddf-a10e-48f6a6c83448",
      status: "in-review",
      createdOn: new Date("2025-01-30T17:16:27.531Z"),
      updatedOn: new Date("2025-05-06T04:29:47.644Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.Capability](../../models/components/capability.md)[] | :heavy_check_mark:                                               | N/A                                                              |