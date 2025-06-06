# LinkApplePayTokenRequest

## Example Usage

```typescript
import { LinkApplePayTokenRequest } from "@moovio/sdk/models/operations";

let value: LinkApplePayTokenRequest = {
  accountID: "09751b0e-7e51-4438-a36b-c7cbac3901a1",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountID`                                                        | *string*                                                           | :heavy_check_mark:                                                 | ID of the Moov account representing the cardholder.                |
| `linkApplePay`                                                     | [components.LinkApplePay](../../models/components/linkapplepay.md) | :heavy_check_mark:                                                 | N/A                                                                |