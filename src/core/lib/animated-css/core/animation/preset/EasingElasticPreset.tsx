// reference: https://easings.net/#easeInElastic
export function easeInElasticPreset(x = 1): number {
  'worklet';
  const c4 = (2 * Math.PI) / 3;

  return x === 0
    ? 0
    : x === 1
    ? 1
    : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
}

// reference: https://easings.net/#easeOutElastic
export function easeOutElasticPreset(x = 1): number {
  'worklet';
  const c4 = (2 * Math.PI) / 3;

  return x === 0
    ? 0
    : x === 1
    ? 1
    : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

// reference: https://easings.net/#easeInOutElastic
export function easeInOutElasticPreset(x = 1): number {
  'worklet';
  const c5 = (2 * Math.PI) / 4.5;

  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2
    : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
}
