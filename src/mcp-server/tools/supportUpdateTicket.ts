/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { supportUpdateTicket } from "../../funcs/supportUpdateTicket.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateTicketRequest$inboundSchema,
};

export const tool$supportUpdateTicket: ToolDefinition<typeof args> = {
  name: "support-update-ticket",
  description: `Updates a support ticket.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/tickets.write\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await supportUpdateTicket(
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
