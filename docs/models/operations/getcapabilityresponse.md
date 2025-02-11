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
    capability: "production-app",
    accountID: "83aa1403-23a0-4125-a44c-f8f61647a7ee",
    status: "disabled",
    createdOn: new Date("2023-05-25T07:54:08.139Z"),
    updatedOn: new Date("2024-03-11T03:02:50.967Z"),
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `headers`                                                      | Record<string, *string*[]>                                     | :heavy_check_mark:                                             | N/A                                                            |
| `result`                                                       | [components.Capability](../../models/components/capability.md) | :heavy_check_mark:                                             | N/A                                                            |