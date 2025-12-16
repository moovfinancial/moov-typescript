# CardAcquiringFees

A detailed breakdown of card acquiring fees by card brand.

## Example Usage

```typescript
import { CardAcquiringFees } from "@moovio/sdk/models/components";
import { Decimal } from "@moovio/sdk/types";

let value: CardAcquiringFees = {
  visa: {
    interchange: {
      count: 869953,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    interchangePrograms: [
      {
        programName: "<value>",
        count: 474711,
        percentageRate: new Decimal("8423.25"),
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
      count: 61692,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticOnline: {
      count: 886189,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticInPerson: {
      count: 265452,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalOnline: {
      count: 731715,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalInPerson: {
      count: 459127,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    declines: {
      count: 398071,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    refunds: {
      count: 60255,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      count: 984400,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  },
  mastercard: {
    interchange: {
      count: 869953,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    interchangePrograms: [
      {
        programName: "<value>",
        count: 474711,
        percentageRate: new Decimal("8423.25"),
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
      count: 61692,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticOnline: {
      count: 886189,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticInPerson: {
      count: 265452,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalOnline: {
      count: 731715,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalInPerson: {
      count: 459127,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    declines: {
      count: 398071,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    refunds: {
      count: 60255,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      count: 984400,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  },
  discover: {
    interchange: {
      count: 869953,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    interchangePrograms: [
      {
        programName: "<value>",
        count: 474711,
        percentageRate: new Decimal("8423.25"),
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
      count: 61692,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticOnline: {
      count: 886189,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticInPerson: {
      count: 265452,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalOnline: {
      count: 731715,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalInPerson: {
      count: 459127,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    declines: {
      count: 398071,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    refunds: {
      count: 60255,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      count: 984400,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
  },
  americanExpress: {
    interchange: {
      count: 869953,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    interchangePrograms: [
      {
        programName: "<value>",
        count: 474711,
        percentageRate: new Decimal("8423.25"),
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
      count: 61692,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticOnline: {
      count: 886189,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedDomesticInPerson: {
      count: 265452,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalOnline: {
      count: 731715,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    completedInternationalInPerson: {
      count: 459127,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    declines: {
      count: 398071,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    refunds: {
      count: 60255,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      count: 984400,
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