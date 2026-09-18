# OAuth2ClientType

The type of client requesting an OAuth2 token. Short codes are accepted as aliases for the corresponding client types.

## Example Usage

```typescript
import { OAuth2ClientType } from "@moovio/sdk/models/components";

let value: OAuth2ClientType = "service";
```

## Values

```typescript
"web" | "device" | "service" | "w" | "d" | "s"
```