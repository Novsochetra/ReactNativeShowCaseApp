export const sum = (array: number[]): number => {
  'worklet';

  if (!array.length) {
    return 0;
  }

  let previousValue = 0;

  for (let i = 0; i < array.length; i++) {
    previousValue += array[i];
  }

  return previousValue;
};
