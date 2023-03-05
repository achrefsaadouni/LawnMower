import * as fs from "fs";
import { CardinalDirection, Lawn, Sequence } from "./types";
import { isValidLawnMowerMove } from "./Modules/utils";
import { createLawnMower } from "./models/lawnMower";
import { createLawn } from "./models/lawn";
import { DIRECTIONS, X_AXIS, Y_AXIS } from "./Modules/constants";

const file = fs.readFileSync("./files/input.txt", "utf8");

const inputs = file.trim().split("\r\n");

const { lawnWidth, lawnHight }: Lawn = createLawn(inputs.shift().split(" "));

while (inputs.length > 0) {
  let { xPosition, yPosition, cardinalDirection } = createLawnMower(
    inputs.shift().split(" ")
  );
  const moves: string = inputs.shift();
  let i: number = DIRECTIONS.indexOf(CardinalDirection[cardinalDirection]);
  for (const move of moves) {
    switch (Sequence[move]) {
      case Sequence.L:
        i = i - 1 < 0 ? 3 : i - 1;
        break;
      case Sequence.R:
        i = i + 1 > 3 ? 0 : i + 1;
        break;
      case Sequence.F: {
        const newXPosition = (xPosition as number) + X_AXIS[i];
        const newYPosition = (yPosition as number) + Y_AXIS[i];
        if (
          isValidLawnMowerMove({
            newXPosition,
            newYPosition,
            lawnWidth,
            lawnHight,
          })
        ) {
          xPosition = newXPosition;
          yPosition = newYPosition;
        }
        break;
      }
      default:
        throw new Error("Invalid Move");
    }
  }
  console.log(xPosition, yPosition, DIRECTIONS[i]);
}
