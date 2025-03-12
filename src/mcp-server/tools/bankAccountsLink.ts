/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { bankAccountsLink } from "../../funcs/bankAccountsLink.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.LinkBankAccountRequest$inboundSchema,
};

export const tool$bankAccountsLink: ToolDefinition<typeof args> = {
  name: "bank-accounts-link",
  description:
    `Link a bank account to an existing Moov account. Read our [bank accounts guide](https://docs.moov.io/guides/sources/bank-accounts/) to learn more.

It is strongly recommended that callers include the \`X-Wait-For\` header, set to \`payment-method\`, if the newly linked
bank-account is intended to be used right away. If this header is not included, the caller will need to poll the [List Payment
Methods](https://docs.moov.io/api/sources/payment-methods/list/)
endpoint to wait for the new payment methods to be available for use.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/bank-accounts.write\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await bankAccountsLink(
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

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
