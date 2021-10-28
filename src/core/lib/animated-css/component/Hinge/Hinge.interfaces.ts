import { LayoutChangeEvent, ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { BouncPreset } from '.';

export interface IHingeContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  preset?: keyof typeof BouncPreset;
  finalPositionY?: number;
}

export interface IHingePresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
  onLayout: (event: LayoutChangeEvent) => void;
}
