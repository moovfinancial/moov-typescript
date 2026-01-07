# Statement

A billing statement for a Moov account.

## Example Usage

```typescript
import { Statement } from "@moovio/sdk/models/components";
import { Decimal } from "@moovio/sdk/types";

let value: Statement = {
  statementID: "56dd0781-6ce4-4582-86a3-285f2834ec78",
  statementName: "<value>",
  fileName: "example.file",
  fileSize: 788385,
  billingPeriodStartDateTime: new Date("2025-09-04T04:27:37.726Z"),
  billingPeriodEndDateTime: new Date("2025-04-09T12:25:57.747Z"),
  subscriptionIDs: [
    "<value 1>",
  ],
  summary: {
    cardAcquiring: {
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      merchantFeesCollected: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      partnerFeesAssessed: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      netIncome: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      interchangeFees: {
        visa: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        mastercard: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        discover: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
        americanExpress: {
          currency: "USD",
          valueDecimal: "12.987654321",
        },
      },
    },
    ach: {
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      merchantFeesCollected: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      partnerFeesAssessed: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      netIncome: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    instantPayments: {
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      merchantFeesCollected: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      partnerFeesAssessed: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      netIncome: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    accountFees: {
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      merchantFeesCollected: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      partnerFeesAssessed: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      netIncome: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    otherCardFees: {
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      merchantFeesCollected: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      partnerFeesAssessed: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      netIncome: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    total: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    netIncomeSubtotal: {
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      merchantFeesCollected: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      partnerFeesAssessed: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      netIncome: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    residualSubtotal: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    monthlyPartnerCosts: {
      minimumCommitment: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      monthlyPlatform: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      total: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    netPartnerPayment: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  cardAcquiringFees: {
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
  },
  achFees: {
    standardCredit: {
      count: 289671,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    sameDayCredit: {
      count: 530096,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    debits: {
      count: 400977,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    return: {
      count: 713116,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    unauthorizedReturn: {
      count: 798297,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    noticeOfChange: {
      count: 991387,
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
  instantPaymentFees: {
    rtpCreditTransaction: {
      count: 513363,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    rtpDecline: {
      count: 61495,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    pushToCardTransaction: {
      count: 252042,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    pushToCardDecline: {
      count: 832847,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    pullFromCardTransaction: {
      count: 139127,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    pullFromCardDecline: {
      count: 296674,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    pullFromCardRefund: {
      count: 65974,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    instantVerification: {
      count: 942102,
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
  accountFees: {
    walletFee: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    merchantPCIFee: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    kybFee: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    kycFee: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    transactionMonitoringFee: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    total: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  otherCardFees: {
    disputes: {
      count: 405208,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    cardAccountUpdater: {
      count: 208853,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    cardVerification: {
      count: 937454,
      amount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    nameVerification: {
      count: 371999,
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
  partnerFees: {
    minimumCommitment: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    monthlyPlatform: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    total: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
  },
  createdOn: new Date("2025-01-09T19:03:51.345Z"),
  updatedOn: new Date("2025-04-20T08:54:10.576Z"),
};
```

## Fields

| Field                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `statementID`                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                 | The unique identifier for the statement.                                                                                                                                                                                                           |
| `statementName`                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                 | The name of the statement.                                                                                                                                                                                                                         |
| `fileName`                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                 | The name of the statement file.                                                                                                                                                                                                                    |
| `fileSize`                                                                                                                                                                                                                                         | *number*                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                 | The size of the statement file in bytes.                                                                                                                                                                                                           |
| `billingPeriodStartDateTime`                                                                                                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                 | The start date and time of the billing period.                                                                                                                                                                                                     |
| `billingPeriodEndDateTime`                                                                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                 | The end date and time of the billing period.                                                                                                                                                                                                       |
| `subscriptionIDs`                                                                                                                                                                                                                                  | *string*[]                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                 | List of subscription IDs associated with this statement.                                                                                                                                                                                           |
| `summary`                                                                                                                                                                                                                                          | [components.BillingSummary](../../models/components/billingsummary.md)                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                 | A summary of all fees included in a statement.                                                                                                                                                                                                     |
| `cardAcquiringFees`                                                                                                                                                                                                                                | [components.CardAcquiringFees](../../models/components/cardacquiringfees.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                 | A detailed breakdown of card acquiring fees by card brand.                                                                                                                                                                                         |
| `achFees`                                                                                                                                                                                                                                          | [components.ACHFees](../../models/components/achfees.md)                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                 | A detailed breakdown of ACH fees.                                                                                                                                                                                                                  |
| `instantPaymentFees`                                                                                                                                                                                                                               | [components.InstantPaymentFees](../../models/components/instantpaymentfees.md)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                 | A detailed breakdown of instant payment fees.                                                                                                                                                                                                      |
| ~~`platformFees`~~                                                                                                                                                                                                                                 | [components.PlatformFees](../../models/components/platformfees.md)                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                 | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>A detailed breakdown of platform fees. This field is deprecated and will be removed in a future release. Use accountFees. |
| `accountFees`                                                                                                                                                                                                                                      | [components.AccountFees](../../models/components/accountfees.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                 | A detailed breakdown of account fees.                                                                                                                                                                                                              |
| `otherCardFees`                                                                                                                                                                                                                                    | [components.OtherCardFees](../../models/components/othercardfees.md)                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                 | A detailed breakdown of other card-related fees.                                                                                                                                                                                                   |
| `partnerFees`                                                                                                                                                                                                                                      | [components.PartnerFees](../../models/components/partnerfees.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                 | Monthly partner costs that are charged separately and not included in residual subtotal (e.g. platform fees, minimums).                                                                                                                            |
| `createdOn`                                                                                                                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                 | The date and time the statement was created.                                                                                                                                                                                                       |
| `updatedOn`                                                                                                                                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                 | The date and time the statement was last updated.                                                                                                                                                                                                  |