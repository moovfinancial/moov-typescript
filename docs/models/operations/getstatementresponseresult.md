# GetStatementResponseResult


## Supported Types

### `components.Statement`

```typescript
const value: components.Statement = {
  statementID: "56dd0781-6ce4-4582-86a3-285f2834ec78",
  statementName: "<value>",
  fileName: "example.file",
  fileSize: 788385,
  billingPeriodStartDateTime: new Date("2024-09-04T04:27:37.726Z"),
  billingPeriodEndDateTime: new Date("2024-04-09T12:25:57.747Z"),
  subscriptionIDs: [
    "<value 1>",
  ],
  summary: {
    cardAcquiring: {
      volumeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      feeAmount: {
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
      volumeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    instantPayments: {
      volumeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
      feeAmount: {
        currency: "USD",
        valueDecimal: "12.987654321",
      },
    },
    platformFees: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    adjustmentFees: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    otherFees: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    total: {
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
  platformFees: {
    walletFee: {
      currency: "USD",
      valueDecimal: "12.987654321",
    },
    merchantPCIFee: {
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
  createdOn: new Date("2024-01-10T19:03:51.345Z"),
  updatedOn: new Date("2024-04-20T08:54:10.576Z"),
};
```

### `ReadableStream<Uint8Array>`

```typescript
const value: ReadableStream<Uint8Array> = await openAsBlob("example.file");
```

