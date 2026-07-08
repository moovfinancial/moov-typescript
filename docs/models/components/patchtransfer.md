# PatchTransfer

## Example Usage

```typescript
import { PatchTransfer } from "@moovio/sdk/models/components";

let value: PatchTransfer = {
  metadata: {
    "optional": "metadata",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `metadata`                                                                                    | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | Free-form key-value pair list. Useful for storing information that is not captured elsewhere. | {<br/>"optional": "metadata"<br/>}                                                            |
| `foreignID`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Optional alias from a foreign/external system which can be used to reference this resource.   |                                                                                               |