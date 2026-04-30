# AuthToken

## Example Usage

```typescript
import { AuthToken } from "@moovio/sdk/models/components";

let value: AuthToken = {
  tokenType: "Bearer",
  accessToken: "eyJhbGciOiJFZERTQSIsImN0eSI6IkpXVCIsImtpZCI6IkR...",
  refreshToken: "eyJhbGc0eSI6TQSIsImN0kpXVCIsImtp6IkpXVsImtpZC0a...",
  expiresIn: 1736964352,
  scope: "/accounts.read /accounts.write",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `tokenType`                                                                                           | [components.TokenType](../../models/components/tokentype.md)                                          | :heavy_check_mark:                                                                                    | An [RFC 6750](https://www.rfc-editor.org/rfc/rfc6750#section-6.1) token type.                         | Bearer                                                                                                |
| `accessToken`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | A value passed to the authorization server to gain access to the system.                              | eyJhbGciOiJFZERTQSIsImN0eSI6IkpXVCIsImtpZCI6IkR...                                                    |
| `refreshToken`                                                                                        | *string*                                                                                              | :heavy_check_mark:                                                                                    | A value passed to the authorization server to obtain a new access token.                              | eyJhbGc0eSI6TQSIsImN0kpXVCIsImtp6IkpXVsImtpZC0a...                                                    |
| `expiresIn`                                                                                           | *number*                                                                                              | :heavy_check_mark:                                                                                    | Unix timestamp indicating when this token expires.                                                    | 1736964352                                                                                            |
| `scope`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | A space-delimited list of [scopes](https://docs.moov.io/api/authentication/scopes/) that are allowed. | /accounts.read /accounts.write                                                                        |