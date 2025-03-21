/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { applePayRegisterMerchantDomains } from "../../funcs/applePayRegisterMerchantDomains.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.RegisterApplePayMerchantDomainsRequest$inboundSchema,
};

export const tool$applePayRegisterMerchantDomains: ToolDefinition<typeof args> =
  {
    name: "apple-pay-register-merchant-domains",
    description: `Add domains to be registered with Apple Pay.

Any domains that will be used to accept payments must first be [verified](https://docs.moov.io/guides/sources/cards/apple-pay/#register-your-domains) 
with Apple.

To access this endpoint using an [access token](https://docs.moov.io/api/authentication/access-tokens/) 
you'll need to specify the \`/accounts/{accountID}/apple-pay.write\` scope.`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] = await applePayRegisterMerchantDomains(
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
