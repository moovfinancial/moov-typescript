# CreateProfileError

## Example Usage

```typescript
import { CreateProfileError } from "@moovio/sdk/models/components";

let value: CreateProfileError = {
  business: {
    industry: "electronics-appliances",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `individual`                                                                         | [components.CreateIndividualError](../../models/components/createindividualerror.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `business`                                                                           | [components.CreateBusinessError](../../models/components/createbusinesserror.md)     | :heavy_minus_sign:                                                                   | N/A                                                                                  |