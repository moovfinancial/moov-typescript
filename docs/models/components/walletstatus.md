# WalletStatus

Status of a wallet.
  - `active`: The wallet is available for use and has an enabled payment method.
  - `closed`: The wallet is no longer active and the corresponding payment method has been disabled.

## Example Usage

```typescript
import { WalletStatus } from "@moovio/sdk/models/components";

let value: WalletStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "closed" | Unrecognized<string>
```