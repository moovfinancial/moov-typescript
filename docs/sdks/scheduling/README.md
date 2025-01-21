# Scheduling
(*scheduling*)

## Overview

### Available Operations

* [createSchedule](#createschedule) - Describes the schedule to create or modify.
* [listSchedules](#listschedules) - Describes a list of schedules associated with an account. Requires at least 1 occurrence or recurTransfer to be specified.
* [updateSchedule](#updateschedule) - Describes the schedule to modify.
* [getSchedules](#getschedules) - Describes a schedule associated with an account. Requires at least 1 occurrence or recurTransfer to be specified.
* [cancelSchedule](#cancelschedule) - Describes the schedule to cancel.
* [getScheduledOccurrence](#getscheduledoccurrence) - Defines an occurrence for when to run a transfer.

## createSchedule

Describes the schedule to create or modify.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.scheduling.createSchedule({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "4ee0c8f9-d96c-44a5-924b-28f02e5d05ca",
    upsertSchedule: {
      occurrences: [
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "Kyat",
              value: 169093,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "quarrel last chilly storyboard after which",
          },
        },
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "Jordanian Dinar",
              value: 859489,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "huddle monthly boo curry official deadly",
          },
        },
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "Ouguiya",
              value: 670277,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "following eek adventurously gosh alongside shakily down",
          },
        },
      ],
      recur: {
        recurrenceRule: "<value>",
        runTransfer: {
          amount: {
            currency: "Rial Omani",
            value: 14774,
          },
          destination: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          source: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          description: "astride idle until mainstream not inure",
        },
        start: new Date("2009-11-10T23:00:00Z"),
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "moov-sdk/core.js";
import { schedulingCreateSchedule } from "moov-sdk/funcs/schedulingCreateSchedule.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await schedulingCreateSchedule(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "4ee0c8f9-d96c-44a5-924b-28f02e5d05ca",
    upsertSchedule: {
      occurrences: [
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "Kyat",
              value: 169093,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "quarrel last chilly storyboard after which",
          },
        },
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "Jordanian Dinar",
              value: 859489,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "huddle monthly boo curry official deadly",
          },
        },
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "Ouguiya",
              value: 670277,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "following eek adventurously gosh alongside shakily down",
          },
        },
      ],
      recur: {
        recurrenceRule: "<value>",
        runTransfer: {
          amount: {
            currency: "Rial Omani",
            value: 14774,
          },
          destination: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          source: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          description: "astride idle until mainstream not inure",
        },
        start: new Date("2009-11-10T23:00:00Z"),
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateScheduleRequest](../../models/operations/createschedulerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CreateScheduleSecurity](../../models/operations/createschedulesecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ScheduleResponse](../../models/components/scheduleresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GenericError            | 400, 409                       | application/json               |
| errors.ScheduleValidationError | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## listSchedules

Describes a list of schedules associated with an account. Requires at least 1 occurrence or recurTransfer to be specified.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.scheduling.listSchedules({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    skip: 60,
    count: 20,
    accountID: "f5b39da1-b677-43d6-b114-65cbbea83ad5",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "moov-sdk/core.js";
import { schedulingListSchedules } from "moov-sdk/funcs/schedulingListSchedules.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await schedulingListSchedules(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    skip: 60,
    count: 20,
    accountID: "f5b39da1-b677-43d6-b114-65cbbea83ad5",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSchedulesRequest](../../models/operations/listschedulesrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.ListSchedulesSecurity](../../models/operations/listschedulessecurity.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ScheduleResponse[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateSchedule

Describes the schedule to modify.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.scheduling.updateSchedule({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "c0aa3b4b-9122-4f67-8d60-fde10f180239",
    scheduleID: "9ab32094-a459-49c7-9ce9-437b9e400834",
    upsertSchedule: {
      occurrences: [
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "Ouguiya",
              value: 116555,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "suckle violently comparison during rosemary unusual though meh fen inside",
          },
        },
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "Bahamian Dollar",
              value: 78068,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "a both vice meaningfully pish",
          },
        },
      ],
      recur: {
        recurrenceRule: "<value>",
        runTransfer: {
          amount: {
            currency: "Mauritius Rupee",
            value: 856383,
          },
          destination: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          source: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          description: "arrange fooey consequently parody however",
        },
        start: new Date("2009-11-10T23:00:00Z"),
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "moov-sdk/core.js";
import { schedulingUpdateSchedule } from "moov-sdk/funcs/schedulingUpdateSchedule.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await schedulingUpdateSchedule(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "c0aa3b4b-9122-4f67-8d60-fde10f180239",
    scheduleID: "9ab32094-a459-49c7-9ce9-437b9e400834",
    upsertSchedule: {
      occurrences: [
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "Ouguiya",
              value: 116555,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "suckle violently comparison during rosemary unusual though meh fen inside",
          },
        },
        {
          occurrenceID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          runOn: new Date("2009-11-10T23:00:00Z"),
          runTransfer: {
            amount: {
              currency: "Bahamian Dollar",
              value: 78068,
            },
            destination: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            source: {
              paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
              achDetails: {
                companyEntryDescription: "Gym dues",
                originatingCompanyName: "Whole Body Fit",
              },
              cardDetails: {
                dynamicDescriptor: "WhlBdy *Yoga 11-12",
              },
            },
            description: "a both vice meaningfully pish",
          },
        },
      ],
      recur: {
        recurrenceRule: "<value>",
        runTransfer: {
          amount: {
            currency: "Mauritius Rupee",
            value: 856383,
          },
          destination: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          partnerAccountID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
          source: {
            paymentMethodID: "c520f1b9-0ba7-42f5-b977-248cdbe41c69",
            achDetails: {
              companyEntryDescription: "Gym dues",
              originatingCompanyName: "Whole Body Fit",
            },
            cardDetails: {
              dynamicDescriptor: "WhlBdy *Yoga 11-12",
            },
          },
          description: "arrange fooey consequently parody however",
        },
        start: new Date("2009-11-10T23:00:00Z"),
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateScheduleRequest](../../models/operations/updateschedulerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UpdateScheduleSecurity](../../models/operations/updateschedulesecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ScheduleResponse](../../models/components/scheduleresponse.md)\>**

### Errors

| Error Type                     | Status Code                    | Content Type                   |
| ------------------------------ | ------------------------------ | ------------------------------ |
| errors.GenericError            | 400, 409                       | application/json               |
| errors.ScheduleValidationError | 422                            | application/json               |
| errors.APIError                | 4XX, 5XX                       | \*/\*                          |

## getSchedules

Describes a schedule associated with an account. Requires at least 1 occurrence or recurTransfer to be specified.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.scheduling.getSchedules({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "aa7a59b8-5d59-4efd-99e7-b644e71e5f8c",
    scheduleID: "605976e8-f3ff-4e64-9b41-7255577d6f44",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "moov-sdk/core.js";
import { schedulingGetSchedules } from "moov-sdk/funcs/schedulingGetSchedules.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await schedulingGetSchedules(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "aa7a59b8-5d59-4efd-99e7-b644e71e5f8c",
    scheduleID: "605976e8-f3ff-4e64-9b41-7255577d6f44",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSchedulesRequest](../../models/operations/getschedulesrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetSchedulesSecurity](../../models/operations/getschedulessecurity.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ScheduleResponse](../../models/components/scheduleresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## cancelSchedule

Describes the schedule to cancel.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  await moov.scheduling.cancelSchedule({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "a1303a1c-8708-447e-a64b-5dba8417b641",
    scheduleID: "ab5ca483-e27d-48f0-b596-09eed517874f",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "moov-sdk/core.js";
import { schedulingCancelSchedule } from "moov-sdk/funcs/schedulingCancelSchedule.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await schedulingCancelSchedule(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "a1303a1c-8708-447e-a64b-5dba8417b641",
    scheduleID: "ab5ca483-e27d-48f0-b596-09eed517874f",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelScheduleRequest](../../models/operations/cancelschedulerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CancelScheduleSecurity](../../models/operations/cancelschedulesecurity.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type          | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.GenericError | 400, 409            | application/json    |
| errors.APIError     | 4XX, 5XX            | \*/\*               |

## getScheduledOccurrence

Defines an occurrence for when to run a transfer.

### Example Usage

```typescript
import { Moov } from "moov-sdk";

const moov = new Moov();

async function run() {
  const result = await moov.scheduling.getScheduledOccurrence({
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "7175f455-a6d6-4b87-8e24-cbd12c7dabe7",
    scheduleID: "a4ffa63d-9228-4488-8f27-d2ff59d7760c",
    occurrenceFilter: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MoovCore } from "moov-sdk/core.js";
import { schedulingGetScheduledOccurrence } from "moov-sdk/funcs/schedulingGetScheduledOccurrence.js";

// Use `MoovCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const moov = new MoovCore();

async function run() {
  const res = await schedulingGetScheduledOccurrence(moov, {
    basicAuth: {
      username: "",
      password: "",
    },
  }, {
    accountID: "7175f455-a6d6-4b87-8e24-cbd12c7dabe7",
    scheduleID: "a4ffa63d-9228-4488-8f27-d2ff59d7760c",
    occurrenceFilter: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetScheduledOccurrenceRequest](../../models/operations/getscheduledoccurrencerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetScheduledOccurrenceSecurity](../../models/operations/getscheduledoccurrencesecurity.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ScheduleResponse](../../models/components/scheduleresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |