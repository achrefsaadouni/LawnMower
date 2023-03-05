export function isValidLawnMowerMove({
  newXPosition,
  newYPosition,
  lawnWidth,
  lawnHight,
}: {
  newXPosition: number;
  newYPosition: number;
  lawnWidth: number;
  lawnHight: number;
}): boolean {
  if (
    newXPosition <= lawnWidth &&
    newXPosition >= 0 &&
    newYPosition >= 0 &&
    newYPosition <= lawnHight
  ) {
    return true;
  }
  return false;
}
