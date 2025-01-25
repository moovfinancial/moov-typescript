# CompleteMicroDeposits

Request to complete the micro-deposit verification workflow.

## Example Usage

```typescript
import { CompleteMicroDeposits } from "@moovio/sdk/models/components";

let value: CompleteMicroDeposits = {
  amounts: [
    18,
    21,
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `amounts`                                                                                            | *number*[]                                                                                           | :heavy_check_mark:                                                                                   | Two positive integers, in cents, equal to the values of the micro-deposits sent to the bank account. | [<br/>18,<br/>21<br/>]                                                                               |