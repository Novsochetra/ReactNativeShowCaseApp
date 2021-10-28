import { IEasingPreset } from '../../core/animation/EasingPreset.interface';
import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

export interface ILightSpeedOutLeftContainerProps {
  delayInMS?: number;
  durationInMS?: number;
  finalPositionX?: number;
  preset?: IEasingPreset;
}

export interface ILightSpeedOutLeftPresentationProps {
  containerStyle: Reanimated.AnimatedStyleProp<ViewStyle>;
}
