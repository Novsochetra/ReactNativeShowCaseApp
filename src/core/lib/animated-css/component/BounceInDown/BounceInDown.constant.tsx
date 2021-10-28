import { IBouncePreset } from '.';

export const Constant = {
  MIN_OPACITY: 0,
  MAX_OPACITY: 1,

  MIN_SCALE: 0,
  MAX_SCALE: 1,

  DEFAULT_DURATION_IN_MS: 120,
  DEFAULT_DELAY_IN_MS: 0,

  INITIAL_POSITION_Y: -100,
  FINAL_POSITION_Y: 0,
};

export const BouncPreset: IBouncePreset = {
  less: {
    damping: 4,
    restSpeedThreshold: 0.001,
  },
  medium: {
    damping: 3,
    restSpeedThreshold: 0.01,
  },
  high: {
    damping: 2,
    restSpeedThreshold: 0.1,
  },
};
