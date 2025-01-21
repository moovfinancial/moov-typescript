# GrantType

The type of grant being requested.

  - `client_credentials`: A grant type used by clients to obtain an access token
  - `refresh_token`: A grant type used by clients to obtain a new access token using a refresh token

## Example Usage

```typescript
import { GrantType } from "moov-sdk/models/components";

let value: GrantType = "refresh_token";
```

## Values

```typescript
"client_credentials" | "refresh_token"
```