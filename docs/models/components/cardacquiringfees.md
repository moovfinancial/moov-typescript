# CardAcquiringFees

A detailed breakdown of card acquiring fees by card brand.

## Example Usage

```typescript
import { CardAcquiringFees } from "@moovio/sdk/models/components";
import { Decimal } from "@moovio/sdk/types";

let value: CardAcquiringFees = {
  visa: {
    interchange: {
      count: 47399,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    interchangePrograms: [
      {
        programName: "<value>",
        count: 474428,
        percentageRate: new Decimal("5621.1"),
        perItemRate: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        total: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        transferVolume: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    ],
    networkPassthrough: {
      count: 116027,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticOnline: {
      count: 418959,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticInPerson: {
      count: 778418,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalOnline: {
      count: 921238,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalInPerson: {
      count: 271021,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    declines: {
      count: 367368,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    refunds: {
      count: 539173,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      count: 172473,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  },
  mastercard: {
    interchange: {
      count: 47399,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    interchangePrograms: [
      {
        programName: "<value>",
        count: 474428,
        percentageRate: new Decimal("5621.1"),
        perItemRate: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        total: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        transferVolume: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    ],
    networkPassthrough: {
      count: 116027,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticOnline: {
      count: 418959,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticInPerson: {
      count: 778418,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalOnline: {
      count: 921238,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalInPerson: {
      count: 271021,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    declines: {
      count: 367368,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    refunds: {
      count: 539173,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      count: 172473,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  },
  discover: {
    interchange: {
      count: 47399,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    interchangePrograms: [
      {
        programName: "<value>",
        count: 474428,
        percentageRate: new Decimal("5621.1"),
        perItemRate: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        total: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        transferVolume: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    ],
    networkPassthrough: {
      count: 116027,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticOnline: {
      count: 418959,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticInPerson: {
      count: 778418,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalOnline: {
      count: 921238,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalInPerson: {
      count: 271021,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    declines: {
      count: 367368,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    refunds: {
      count: 539173,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      count: 172473,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  },
  americanExpress: {
    interchange: {
      count: 47399,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    interchangePrograms: [
      {
        programName: "<value>",
        count: 474428,
        percentageRate: new Decimal("5621.1"),
        perItemRate: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        total: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        transferVolume: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    ],
    networkPassthrough: {
      count: 116027,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticOnline: {
      count: 418959,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticInPerson: {
      count: 778418,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalOnline: {
      count: 921238,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalInPerson: {
      count: 271021,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    declines: {
      count: 367368,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    refunds: {
      count: 539173,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      count: 172473,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `visa`                                                               | [components.CardBrandFees](../../models/components/cardbrandfees.md) | :heavy_check_mark:                                                   | Fees associated with Visa transactions.                              |
| `mastercard`                                                         | [components.CardBrandFees](../../models/components/cardbrandfees.md) | :heavy_check_mark:                                                   | Fees associated with Mastercard transactions.                        |
| `discover`                                                           | [components.CardBrandFees](../../models/components/cardbrandfees.md) | :heavy_check_mark:                                                   | Fees associated with Discover transactions.                          |
| `americanExpress`                                                    | [components.CardBrandFees](../../models/components/cardbrandfees.md) | :heavy_check_mark:                                                   | Fees associated with American Express transactions.                  |