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
      capability: "production-app",
      accountID: "defd3a6f-1689-4820-806f-369b236dea3a",
      status: "in-review",
      createdOn: new Date("2023-11-08T12:23:35.310Z"),
      updatedOn: new Date("2023-10-19T22:56:22.560Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.Capability](../../models/components/capability.md)[] | :heavy_check_mark:                                               | N/A                                                              |