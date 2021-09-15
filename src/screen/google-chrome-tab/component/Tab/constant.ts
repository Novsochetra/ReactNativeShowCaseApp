import { Dimensions } from 'react-native';

export const PADDING = 8;
export const MARGIN = 8;
export const CONTAINER_PADDING_HORIZONTAL = PADDING * 2;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const TAB_CONTAINER_WIDTH = SCREEN_WIDTH - MARGIN * 2;
export const TAB_WIDTH = TAB_CONTAINER_WIDTH / 2 - MARGIN * 2;

export const TAB_MIN_SCALE = 0.85;
export const TAB_MAX_SCALE = 1;
export const TAB_MIN_BORDER_WIDTH = 0;
export const TAB_MAX_BORDER_WIDTH = 2;
export const MAX_ZINDEX = 999;
export const DEFAULT_ZINDEX = 1;

export const Constant = {
  TAB_MIN_SCALE,
  TAB_MAX_SCALE,

  TAB_MIN_BORDER_WIDTH,
  TAB_MAX_BORDER_WIDTH,

  MAX_ZINDEX,
  DEFAULT_ZINDEX,
};
