import { IEasingPreset } from '../../core/animation/EasingPreset.interface';
import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface ILightSpeedOutRightContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  finalPositionX?: number;
  preset?: IEasingPreset;
}

export interface ILightSpeedOutRightPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
