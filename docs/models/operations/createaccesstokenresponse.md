# CreateAccessTokenResponse

## Example Usage

```typescript
import { CreateAccessTokenResponse } from "@moovio/sdk/models/operations";

let value: CreateAccessTokenResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
    tokenType: "Bearer",
    accessToken: "eyJhbGciOiJFZERTQSIsImN0eSI6IkpXVCIsImtpZCI6IkR...",
    refreshToken: "eyJhbGc0eSI6TQSIsImN0kpXVCIsImtp6IkpXVsImtpZC0a...",
    expiresIn: 1736964352,
    scope: "/accounts.read /accounts.write",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `headers`                                                    | Record<string, *string*[]>                                   | :heavy_check_mark:                                           | N/A                                                          |
| `result`                                                     | [components.AuthToken](../../models/components/authtoken.md) | :heavy_check_mark:                                           | N/A                                                          |