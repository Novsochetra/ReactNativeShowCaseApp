// reference: https://easings.net/#easeOutBounce
export function easeOutBouncePreset(x = 1): number {
  'worklet';
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

// reference: https://easings.net/#easeInBounce
export function easeInBouncePreset(t = 0): number {
  'worklet';
  return 1 - easeOutBouncePreset(1 - t);
}

// reference: https://easings.net/#easeInOutBounce
export function easeInOutBouncePreset(x = 1): number {
  'worklet';
  return x < 0.5
    ? (1 - easeOutBouncePreset(1 - 2 * x)) / 2
    : (1 + easeOutBouncePreset(2 * x - 1)) / 2;
}
