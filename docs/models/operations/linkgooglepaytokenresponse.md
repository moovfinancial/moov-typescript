# LinkGooglePayTokenResponse

## Example Usage

```typescript
import { LinkGooglePayTokenResponse } from "@moovio/sdk/models/operations";

let value: LinkGooglePayTokenResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: [],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `headers`                                                                                            | Record<string, *string*[]>                                                                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `result`                                                                                             | [components.LinkedGooglePayPaymentMethod](../../models/components/linkedgooglepaypaymentmethod.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |