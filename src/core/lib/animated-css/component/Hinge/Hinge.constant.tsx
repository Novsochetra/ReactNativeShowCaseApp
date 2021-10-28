export const Constant = {
  DEFAULT_DURATION_IN_MS: 500,
  DEFAULT_DELAY_IN_MS: 0,

  INITIAL_ROTATION_Z_IN_RADIAN: 0,
  FINAL_ROTATION_Z_IN_RADIAN: Math.PI / 3,

  INITIAL_POSITION_Y: 0,
  FINAL_POSITION_Y: 200,
};

export const BouncPreset = {
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
