export const range = ({
  start = 0,
  size,
}: {
  start: number;
  size: number;
}): number[] => Array.from({ length: size }, (x, i) => i + start);
