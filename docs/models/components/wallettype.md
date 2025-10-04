# WalletType

Type of a wallet.
  - `default`: The system-generated wallet automatically created when an account is granted the wallet capability.
  - `general`: An additional, user-defined wallet created via API or Dashboard.

## Example Usage

```typescript
import { WalletType } from "@moovio/sdk/models/components";

let value: WalletType = "default";
```

## Values

```typescript
"default" | "general"
```