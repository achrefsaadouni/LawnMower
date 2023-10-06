import * as z from "zod";

import { CardinalDirection, Mower } from "../types";

const LawnMowerSchema = z.object({
  xPosition: z.number().int(),
  yPosition: z.number().int(),
  cardinalDirection: z.nativeEnum(CardinalDirection),
});

export function createLawnMower(input: string[]): Mower {
  const { xPosition, yPosition, cardinalDirection } = LawnMowerSchema.parse({
    xPosition: parseInt(input[0], 10),
    yPosition: parseInt(input[1], 10),
    cardinalDirection: CardinalDirection[input[2]],
  });
<<<<<<< HEAD
  const a=5
  const hjk=8
=======
>>>>>>> 513622e1e7d292e2579e59122ce1471d300f0e33
    return {
    xPosition,
    yPosition,
    cardinalDirection,
  };
}
