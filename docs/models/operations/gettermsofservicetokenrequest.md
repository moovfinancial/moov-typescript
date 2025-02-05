# GetTermsOfServiceTokenRequest

## Example Usage

```typescript
import { GetTermsOfServiceTokenRequest } from "@moovio/sdk/models/operations";

let value: GetTermsOfServiceTokenRequest = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `origin`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Indicates the domain from which the request originated. Required if referer header is not present.             |
| `referer`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Specifies the URL of the resource from which the request originated. Required if origin header is not present. |