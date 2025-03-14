/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentLinksUpdate } from "../../funcs/paymentLinksUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdatePaymentLinkRequest$inboundSchema,
};

export const tool$paymentLinksUpdate: ToolDefinition<typeof args> = {
  name: "payment-links-update",
  description: `Update a payment link.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/transfers.write\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await paymentLinksUpdate(
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
