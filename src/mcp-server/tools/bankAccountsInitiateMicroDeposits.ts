/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { bankAccountsInitiateMicroDeposits } from "../../funcs/bankAccountsInitiateMicroDeposits.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.InitiateMicroDepositsRequest$inboundSchema,
};

export const tool$bankAccountsInitiateMicroDeposits: ToolDefinition<
  typeof args
> = {
  name: "bank-accounts-initiate-micro-deposits",
  description:
    `Micro-deposits help confirm bank account ownership, helping reduce fraud and the risk of unauthorized activity. 
Use this method to initiate the micro-deposit verification, sending two small credit transfers to the bank account 
you want to confirm.

If you request micro-deposits before 4:15PM ET, they will appear that same day. If you request micro-deposits any 
time after 4:15PM ET, they will appear the next banking day. When the two credits are initiated, Moov simultaneously
initiates a debit to recoup the micro-deposits. 

Micro-deposits initiated for a \`sandbox\` bank account will always be \`$0.00\` / \`$0.00\` and instantly verifiable once initiated.

You can simulate micro-deposit verification in test mode. See our [test mode](https://docs.moov.io/guides/get-started/test-mode/#micro-deposits)
guide for more information.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/bank-accounts.write\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await bankAccountsInitiateMicroDeposits(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    return formatResult(void 0, apiCall);
  },
};
