/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { issuingTransactionsListAuthorizations } from "../../funcs/issuingTransactionsListAuthorizations.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListIssuedCardAuthorizationsRequest$inboundSchema,
};

export const tool$issuingTransactionsListAuthorizations: ToolDefinition<
  typeof args
> = {
  name: "issuing-transactions-list-authorizations",
  description: `List issued card authorizations associated with a Moov account.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/issued-cards.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await issuingTransactionsListAuthorizations(
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
