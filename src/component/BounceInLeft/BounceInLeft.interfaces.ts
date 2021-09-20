import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IBounceInLeftContainerProps {
  delayInMS?: number;
  initialPositionX?: number;
  type?: keyof IBouncePreset;
}

export interface IBounceInLeftPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}

export type IBouncePreset = {
  less: { damping: 4; restSpeedThreshold: 0.001 };
  medium: { damping: 3; restSpeedThreshold: 0.01 };
  high: { damping: 2; restSpeedThreshold: 0.1 };
};
