# JSONWebKey

Describes an [RFC7517](https://datatracker.ietf.org/doc/html/rfc7517) web key.

## Example Usage

```typescript
import { JSONWebKey } from "moov-sdk/models/components";

let value: JSONWebKey = {
  kty: "EC",
  use: "enc",
  alg: "ECDH-ES+A256KW",
  kid: "bOaoOIgm-7dI_gBIvsr0jQrPyYp6H_od0Ok-hSYZQ-g=",
  crv: "P-521",
  x: "ABcm3wzKpPzYYwjDC0HSrxxVM3ULbuMDUuzkR5wNciaMHkZvQ02gLFdqTL65evV7EWaQyC7zRc28eW20p5MVDdQr",
  y: "AVa-eQsoiltOcQYy1QEcrQ9NbWktl_D4ewfg8diOZ2_svLEgEu4T1PqNcLbBGozP_VqPkXOMwNCUNI7pxajVGiIP",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `kty`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The cryptographic algorithm family used with the key (e.g., 'RSA', 'EC', 'oct').                                   |
| `use`                                                                                                              | [components.Use](../../models/components/use.md)                                                                   | :heavy_minus_sign:                                                                                                 | The intended use of the key. 'sig' for signature, 'enc' for encryption.                                            |
| `keyOps`                                                                                                           | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | The permitted operations for the key, e.g., 'sign', 'verify', 'encrypt', 'decrypt'.                                |
| `alg`                                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The algorithm intended for use with the key, e.g., 'RS256' or 'ES256'.                                             |
| `kid`                                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | A unique identifier for the key.                                                                                   |
| `crv`                                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The curve for Elliptic Curve keys, e.g., 'P-256', 'P-384', or 'P-521'.<br/><br/>This field is required when `kty` is 'EC'. |
| `x`                                                                                                                | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The x coordinate for Elliptic Curve keys.<br/><br/>This field is required when `kty` is 'EC'.                      |
| `y`                                                                                                                | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The y coordinate for Elliptic Curve keys.<br/><br/>This field is required when `kty` is 'EC'.                      |
| `n`                                                                                                                | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The modulus value for RSA keys.<br/><br/>This field is required when `kty` is 'RSA'.                               |
| `e`                                                                                                                | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The exponent value for RSA keys.<br/><br/>This field is required when `kty` is 'RSA'.                              |