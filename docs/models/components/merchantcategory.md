# MerchantCategory

A predefined merchant category group and the merchant category codes (MCCs) it covers.

## Example Usage

```typescript
import { MerchantCategory } from "@moovio/sdk/models/components";

let value: MerchantCategory = {
  category: "movies",
  mccs: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                                                       | Type                                                                                                                                                                        | Required                                                                                                                                                                    | Description                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `category`                                                                                                                                                                  | [components.IssuingMerchantCategory](../../models/components/issuingmerchantcategory.md)                                                                                    | :heavy_check_mark:                                                                                                                                                          | The predefined category group.                                                                                                                                              |
| `mccs`                                                                                                                                                                      | *string*[]                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                          | The merchant category codes (MCCs) covered by this category. Each entry is either a single<br/>4-digit MCC, such as `4511`, or an inclusive range of MCCs, such as `3000-3299`. |