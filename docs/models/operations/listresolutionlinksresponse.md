# ListResolutionLinksResponse

## Example Usage

```typescript
import { ListResolutionLinksResponse } from "@moovio/sdk/models/operations";

let value: ListResolutionLinksResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: [
    {
      code: "bwebMOhZ85",
      accountID: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      partnerAccountID: "0d8e0d6e-e4a2-4f1b-8c3d-1b9e0f5a7c2d",
      recipient: "15555555555",
      url: "https://moov.link/r/bwebMOhZ85",
      createdOn: new Date("2026-07-01T12:00:00Z"),
      updatedOn: new Date("2026-07-01T12:00:00Z"),
      expiresOn: new Date("2026-07-08T12:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `headers`                                                                | Record<string, *string*[]>                                               | :heavy_check_mark:                                                       | N/A                                                                      |
| `result`                                                                 | [components.ResolutionLink](../../models/components/resolutionlink.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |