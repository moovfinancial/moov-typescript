# GetIssuedCardActivityResponse

## Example Usage

```typescript
import { GetIssuedCardActivityResponse } from "@moovio/sdk/models/operations";

let value: GetIssuedCardActivityResponse = {
  headers: {
    "key": [],
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
  result: {
    status: "pending",
    issuedCardID: "<id>",
    authorizedAmount: "-14.89",
    clearedAmount: "-14.89",
    createdOn: new Date("2024-02-13T17:56:55.990Z"),
    merchantData: {
      networkID: "111111111111111",
      name: "Whole Body Fitness",
      city: "San Francisco",
      country: "US",
      postalCode: "94107",
      state: "CA",
      mcc: "7298",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `headers`                                                                      | Record<string, *string*[]>                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `result`                                                                       | [components.IssuedCardActivity](../../models/components/issuedcardactivity.md) | :heavy_check_mark:                                                             | N/A                                                                            |