# CreateTransferOptionsForAccountRequest

## Example Usage

```typescript
import { CreateTransferOptionsForAccountRequest } from "@moovio/sdk/models/operations";

let value: CreateTransferOptionsForAccountRequest = {
  accountID: "26b947bb-66ec-4110-844e-433f432e2a72",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountID`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The partner's Moov account ID.                                                       |
| `createTransferOptions`                                                              | [components.CreateTransferOptions](../../models/components/createtransferoptions.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |