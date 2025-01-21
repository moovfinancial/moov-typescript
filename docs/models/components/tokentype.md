# TokenType

Type of token returned.

  - `opaque`: A token following a proprietary format.
  - `jwt`: A JSON Web Token (JWT), a self-contained token that contains claims about the user and is cryptographically signed.

## Example Usage

```typescript
import { TokenType } from "moov-sdk/models/components";

let value: TokenType = "opaque";
```

## Values

```typescript
"opaque" | "jwt"
```