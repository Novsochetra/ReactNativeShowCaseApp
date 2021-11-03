export const sumPrevious = (array: number[]) => {
  let result = [0];
  let sumOfPreviousValue = 0;

  for (let i = 1; i <= array.length; i++) {
    sumOfPreviousValue += array[i - 1];
    result[i] = sumOfPreviousValue;
  }

  return result;
};
