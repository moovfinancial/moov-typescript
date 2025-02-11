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
      accountID: "bc4c87a0-14f2-4505-b5fd-60da2f1d46ca",
      status: "pending",
      createdOn: new Date("2023-04-18T04:47:54.555Z"),
      updatedOn: new Date("2025-08-27T06:12:53.981Z"),
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `headers`                                                        | Record<string, *string*[]>                                       | :heavy_check_mark:                                               | N/A                                                              |
| `result`                                                         | [components.Capability](../../models/components/capability.md)[] | :heavy_check_mark:                                               | N/A                                                              |