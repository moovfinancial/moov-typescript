# ListCapabilitiesResponse

## Example Usage

```typescript
import { ListCapabilitiesResponse } from "@moovio/sdk/models/operations";

let value: ListCapabilitiesResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: [
    {
      capability: "card-issuing",
      accountID: "998f5c86-f916-4cbe-a4c7-9ffd5ea60c8c",
      status: "in-review",
      createdOn: new Date("2023-11-26T12:19:41.082Z"),
      updatedOn: new Date("2025-05-27T16:12:22.860Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.Capability](../../models/components/capability.md)[] | :heavy_check_mark:                                               | N/A                                                              |