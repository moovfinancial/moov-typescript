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
      capability: "send-funds",
      accountID: "8bfbc256-a445-4c91-b15c-bbc488bf4ca9",
      status: "in-review",
      createdOn: new Date("2023-02-10T05:07:51.800Z"),
      updatedOn: new Date("2023-06-11T13:12:44.267Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.Capability](../../models/components/capability.md)[] | :heavy_check_mark:                                               | N/A                                                              |