/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { paymentLinksGet } from "../../funcs/paymentLinksGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetPaymentLinkRequest$inboundSchema,
};

export const tool$paymentLinksGet: ToolDefinition<typeof args> = {
  name: "payment-links_get",
  description: `Retrieve a payment link by code.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/transfers.read\` scope.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await paymentLinksGet(
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
