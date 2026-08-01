# WalletType

Type of a wallet.
  - `default`: The system-generated wallet automatically created when an account is granted the wallet capability.
  - `general`: An additional, user-defined wallet created via API or Dashboard.
  - `card-issuing`: The system-generated wallet automatically created when an account is granted the card-issuing capability.

## Example Usage

```typescript
import { WalletType } from "@moovio/sdk/models/components";

let value: WalletType = "general";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"default" | "general" | "card-issuing" | Unrecognized<string>
```