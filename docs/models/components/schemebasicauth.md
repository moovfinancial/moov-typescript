# SchemeBasicAuth

## Example Usage

```typescript
import { SchemeBasicAuth } from "@moovio/sdk/models/components";

let value: SchemeBasicAuth = {};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `username`                                                                                                                              | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Public API key. Use together with `password` for HTTP Basic<br/>authentication. Server-side use only.<br/>                              |
| `password`                                                                                                                              | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Secret API key. Use together with `username` for HTTP Basic<br/>authentication. Server-side use only.<br/>                              |
| `accessToken`                                                                                                                           | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Short-lived OAuth2 access token. Use for client-side<br/>authentication. Mint server-side with appropriate scopes<br/>and pass to the browser.<br/> |