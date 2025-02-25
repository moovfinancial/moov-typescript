/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { cardIssuingUpdate } from "../../funcs/cardIssuingUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateIssuedCardRequest$inboundSchema,
};

export const tool$cardIssuingUpdate: ToolDefinition<typeof args> = {
  name: "card-issuing_update",
  description: `Update a Moov issued card.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/issued-cards.write\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await cardIssuingUpdate(
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
