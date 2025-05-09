/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EvidenceType,
  EvidenceType$inboundSchema,
  EvidenceType$outboundSchema,
} from "./evidencetype.js";

export type CreateEvidenceText = {
  /**
   * The text to associate with the dispute as evidence.
   */
  text: string;
  evidenceType: EvidenceType;
};

/** @internal */
export const CreateEvidenceText$inboundSchema: z.ZodType<
  CreateEvidenceText,
  z.ZodTypeDef,
  unknown
> = z.object({
  text: z.string(),
  evidenceType: EvidenceType$inboundSchema,
});

/** @internal */
export type CreateEvidenceText$Outbound = {
  text: string;
  evidenceType: string;
};

/** @internal */
export const CreateEvidenceText$outboundSchema: z.ZodType<
  CreateEvidenceText$Outbound,
  z.ZodTypeDef,
  CreateEvidenceText
> = z.object({
  text: z.string(),
  evidenceType: EvidenceType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEvidenceText$ {
  /** @deprecated use `CreateEvidenceText$inboundSchema` instead. */
  export const inboundSchema = CreateEvidenceText$inboundSchema;
  /** @deprecated use `CreateEvidenceText$outboundSchema` instead. */
  export const outboundSchema = CreateEvidenceText$outboundSchema;
  /** @deprecated use `CreateEvidenceText$Outbound` instead. */
  export type Outbound = CreateEvidenceText$Outbound;
}

export function createEvidenceTextToJSON(
  createEvidenceText: CreateEvidenceText,
): string {
  return JSON.stringify(
    CreateEvidenceText$outboundSchema.parse(createEvidenceText),
  );
}

export function createEvidenceTextFromJSON(
  jsonString: string,
): SafeParseResult<CreateEvidenceText, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateEvidenceText$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateEvidenceText' from JSON`,
  );
}
