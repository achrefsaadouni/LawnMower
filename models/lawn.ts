import * as z from "zod";
import { Lawn } from "../types";

const LawnSchema = z.object({
  lawnWidth: z.number().int(),
  lawnHight: z.number().int(),
});

export function createLawn(input: string[]): Lawn {
  const { lawnWidth, lawnHight } = LawnSchema.parse({
    lawnWidth: parseInt(input[0], 10),
    lawnHight: parseInt(input[1], 10),
  });
  return {
    lawnWidth,
    lawnHight,
  };
}
