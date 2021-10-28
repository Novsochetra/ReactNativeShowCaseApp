import { IEasingPreset } from '../../core/animation/EasingPreset.interface';
import { LayoutChangeEvent, ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface IRotateInUpRightContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  preset?: IEasingPreset;
}

export interface IRotateInUpRightPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
  onLayout: (event: LayoutChangeEvent) => void;
}
