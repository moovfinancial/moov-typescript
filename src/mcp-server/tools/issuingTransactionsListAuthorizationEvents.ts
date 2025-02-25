/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { issuingTransactionsListAuthorizationEvents } from "../../funcs/issuingTransactionsListAuthorizationEvents.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListIssuedCardAuthorizationEventsRequest$inboundSchema,
};

export const tool$issuingTransactionsListAuthorizationEvents: ToolDefinition<
  typeof args
> = {
  name: "issuing-transactions_list-authorization-events",
  description:
    `List card network and Moov platform events that affect the authorization and its hold on a wallet balance.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/issued-cards.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await issuingTransactionsListAuthorizationEvents(
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
