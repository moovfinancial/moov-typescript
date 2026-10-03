# ListIssuedCardActivityResponse

## Example Usage

```typescript
import { ListIssuedCardActivityResponse } from "@moovio/sdk/models/operations";

let value: ListIssuedCardActivityResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [
    {
      status: "cleared",
      issuedCardID: "<id>",
      authorizedAmount: "-14.89",
      clearedAmount: "-14.89",
      createdOn: new Date("2026-10-22T07:16:04.694Z"),
      merchantData: {
        networkID: "<id>",
        name: "Whole Body Fitness",
        city: "San Francisco",
        country: "US",
        postalCode: "94107",
        state: "CA",
        mcc: "7298",
      },
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `headers`                                                                        | Record<string, *string*[]>                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `result`                                                                         | [components.IssuedCardActivity](../../models/components/issuedcardactivity.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |