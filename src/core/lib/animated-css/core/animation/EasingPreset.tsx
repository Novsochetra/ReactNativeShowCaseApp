import { Easing } from 'react-native-reanimated';
import {
  easeInElasticPreset,
  easeInOutElasticPreset,
  easeOutElasticPreset,
} from './preset/EasingElasticPreset';
import {
  easeInBouncePreset,
  easeOutBouncePreset,
  easeInOutBouncePreset,
} from './preset/EasingBouncePreset';
import { linear } from './preset/LinearPreset';

export const EasingPreset = {
  EASE_IN_SINE: Easing.bezier(0.12, 0, 0.39, 0),
  EASE_OUT_SINE: Easing.bezier(0.61, 1, 0.88, 1),
  EASE_IN_OUT_SINE: Easing.bezier(0.37, 0, 0.63, 1),

  EASE_IN_QUAD: Easing.bezier(0.11, 0, 0.5, 0),
  EASE_OUT_QUAD: Easing.bezier(0.5, 1, 0.89, 1),
  EASE_IN_OUT_QUAD: Easing.bezier(0.45, 0, 0.55, 1),

  EASE_IN_CUBIC: Easing.bezier(0.32, 0, 0.67, 0),
  EASE_OUT_CUBIC: Easing.bezier(0.33, 1, 0.68, 1),
  EASE_IN_OUT_CUBIC: Easing.bezier(0.65, 0, 0.35, 1),

  EASE_IN_QUART: Easing.bezier(0.5, 0, 0.75, 0),
  EASE_OUT_QUART: Easing.bezier(0.25, 1, 0.5, 1),
  EASE_IN_OUT_QUART: Easing.bezier(0.76, 0, 0.24, 1),

  EASE_IN_QUINT: Easing.bezier(0.64, 0, 0.78, 0),
  EASE_OUT_QUINT: Easing.bezier(0.22, 1, 0.36, 1),
  EASE_IN_OUT_QUINT: Easing.bezier(0.83, 0, 0.17, 1),

  EASE_IN_EXPO: Easing.bezier(0.7, 0, 0.84, 0),
  EASE_OUT_EXPO: Easing.bezier(0.16, 1, 0.3, 1),
  EASE_IN_OUT_EXPO: Easing.bezier(0.87, 0, 0.13, 1),

  EASE_IN_CIRC: Easing.bezier(0.55, 0, 1, 0.45),
  EASE_OUT_CIRC: Easing.bezier(0, 0.55, 0.45, 1),
  EASE_IN_OUT_CIRC: Easing.bezier(0.85, 0, 0.15, 1),

  EASE_IN_BACK: Easing.bezier(0.36, 0, 0.66, -0.56),
  EASE_OUT_BACK: Easing.bezier(0.34, 1.56, 0.64, 1),
  EASE_IN_OUT_BACK: Easing.bezier(0.68, -0.6, 0.32, 1.6),

  EASE_IN_ELASTIC: easeInElasticPreset,
  EASE_OUT_ELASTIC: easeOutElasticPreset,
  EASE_IN_OUT_ELASTIC: easeInOutElasticPreset,

  EASE_IN_BOUNCE: easeInBouncePreset,
  EASE_OUT_BOUNCE: easeOutBouncePreset,
  EASE_IN_OUT_BOUNCE: easeInOutBouncePreset,

  LINEAR: linear,
};
